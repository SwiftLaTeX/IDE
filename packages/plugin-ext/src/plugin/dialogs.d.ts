import { OpenDialogOptions, SaveDialogOptions, UploadDialogOptions } from '@theia/plugin';
import { RPCProtocol } from '../common/rpc-protocol';
import Uri from 'vscode-uri';
export declare class DialogsExtImpl {
    private proxy;
    constructor(rpc: RPCProtocol);
    showOpenDialog(options: OpenDialogOptions): PromiseLike<Uri[] | undefined>;
    showSaveDialog(options: SaveDialogOptions): PromiseLike<Uri | undefined>;
    showUploadDialog(options: UploadDialogOptions): PromiseLike<Uri[] | undefined>;
}
//# sourceMappingURL=dialogs.d.ts.map