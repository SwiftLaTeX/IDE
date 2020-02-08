/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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

import { injectable } from 'inversify';
import { OS } from '../common/os';
import { ApplicationServer, ExtensionInfo, ApplicationInfo } from '../common/application-protocol';

@injectable()
export class DummyApplicationServerImpl implements ApplicationServer {

	getExtensionsInfos(): Promise<ExtensionInfo[]> {
		const extensions: ExtensionInfo[] = [
			{
				name: 'Minio Filesystem (AGPL3)',
				version: '0.1'
			},
			{
				name: 'YJS Editor (MIT)',
				version: '13.05'
			},
			{
				name: 'TexLab (GPL3)',
				version: '0.7'
			},
			{
				name: 'XeTeX (MIT)',
				version: '0.9999'
			},
			{
				name: 'Swift WYSIWYG (Proprietary)',
				version: '0.1'
			},
			{
				name: 'Theia (Eclipse 2)',
				version: '0.15.0'
			}
		];
		return Promise.resolve(extensions);
	}

	getApplicationInfo(): Promise<ApplicationInfo | undefined> {
		return Promise.resolve(undefined);
	}

	async getBackendOS(): Promise<OS.Type> {
		return OS.Type.Linux;
	}
}
