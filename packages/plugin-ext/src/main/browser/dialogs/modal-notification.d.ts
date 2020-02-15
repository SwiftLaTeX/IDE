import { Message } from '@phosphor/messaging';
import { AbstractDialog } from '@theia/core/lib/browser/dialogs';
import '../../../../src/main/browser/dialogs/style/modal-notification.css';
export declare enum MessageType {
    Error = "error",
    Warning = "warning",
    Info = "info"
}
export declare class ModalNotification extends AbstractDialog<string | undefined> {
    protected actionTitle: string | undefined;
    constructor();
    protected onCloseRequest(msg: Message): void;
    get value(): string | undefined;
    showDialog(messageType: MessageType, text: string, actions: string[]): Promise<string | undefined>;
    protected createMessageNode(messageType: MessageType, text: string, actions: string[]): HTMLElement;
    protected toIconClass(icon: MessageType): string;
}
//# sourceMappingURL=modal-notification.d.ts.map