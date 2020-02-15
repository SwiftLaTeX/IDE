/********************************************************************************
 * Copyright (C) 2019 Elliott Wen.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from 'inversify';
export enum ExporterStatus {
	Init = 1,
	Ready,
	Busy,
	Error,
	Finish
}

const ENGINE_PATH = '/bin/dvipdfmx.js';

export class ConvertResult {
	pdf: Uint8Array | undefined = undefined;
	status: number = -254;
	log: string = 'No log';
}

@injectable()
export class XDVExporter {
	private xdvWorker: Worker | undefined = undefined;
	public xdvWorkerStatus: ExporterStatus = ExporterStatus.Init;
	constructor() {
	}

	public async loadExporter(): Promise<void> {
		if (this.xdvWorker !== undefined) {
			throw new Error('Other instance is running, abort()');
		}
		this.xdvWorkerStatus = ExporterStatus.Init;
		await new Promise((resolve, reject) => {
			this.xdvWorker = new Worker(ENGINE_PATH);
			this.xdvWorker.onmessage = (ev: any) => {
				const data: any = ev['data'];
				const cmd: string = <string>(data['cmd']);
				if (cmd === 'postRun') {
					this.xdvWorkerStatus = ExporterStatus.Ready;
					resolve();
				} else {
					this.xdvWorkerStatus = ExporterStatus.Error;
					reject();
				}
			};
		});

		this.xdvWorker!.onmessage = (ev: any) => {
		};
	}

	private checkExporterStatus(): void {
		if (this.xdvWorkerStatus !== ExporterStatus.Ready) {
			throw Error('Engine is still spinning.');
		}
	}

	public async exportPDF(): Promise<ConvertResult> {
		this.checkExporterStatus();
		this.xdvWorkerStatus = ExporterStatus.Busy;
		const start_compile_time = performance.now();
		const res: ConvertResult = await new Promise((resolve, reject) => {
			this.xdvWorker!.onmessage = (ev: any) => {
				const data: any = ev['data'];
				const cmd: string = <string>(data['cmd']);
				const result: string = <string>data['result'];
				const log: string = <string>data['log'];
				const status: number = <number>data['status'];
				const pdf: Uint8Array = <Uint8Array>data['pdf'];
				if (cmd === 'export') {
					if (result === 'failed') {
						console.error('Exporter crushed terribly. Log: ' + log);
						this.xdvWorkerStatus = ExporterStatus.Error;
						reject(log);
					} else {
						console.log('Exporter compilation finish ' + (performance.now() - start_compile_time));
						const nice_report = new ConvertResult();
						nice_report.status = status;
						nice_report.log = log;
						nice_report.pdf = pdf;
						this.xdvWorkerStatus = ExporterStatus.Finish;
						resolve(nice_report);
					}
				}
			};
			this.xdvWorker!.postMessage({ 'cmd': 'export' });
		});

		this.xdvWorker!.onmessage = (ev: any) => {
		};
		return res;
	}

	public writeMemFSFile(srccode: string | Uint8Array, filename: string): void {
		this.checkExporterStatus();
		if (this.xdvWorker !== undefined) {
			this.xdvWorker.postMessage({ 'cmd': 'writefile', 'url': filename, 'src': srccode });
		}
	}


	public makeMemFSFolder(folder: string): void {
		this.checkExporterStatus();
		if (this.xdvWorker !== undefined) {
			if (folder === '' || folder === '/') {
				return;
			}
			this.xdvWorker.postMessage({ 'cmd': 'mkdir', 'url': folder });
		}
	}

	public closeWorker(): void {
		if (this.xdvWorker !== undefined) {
			this.xdvWorker.postMessage({ 'cmd': 'grace' });
			this.xdvWorker = undefined;
		}
	}
}
