import URI from '@theia/core/lib/common/uri';
import { Command, CommandContribution, CommandRegistry, DisposableCollection, MenuContribution, MenuModelRegistry } from '@theia/core';
import { Widget } from '@theia/core/lib/browser';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { EditorManager, EditorOpenerOptions, EditorWidget } from '@theia/editor/lib/browser';
import { Git, GitFileChange } from '../common';
import { GitRepositoryTracker } from './git-repository-tracker';
import { GitQuickOpenService } from './git-quick-open-service';
import { GitSyncService } from './git-sync-service';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { GitRepositoryProvider } from './git-repository-provider';
import { GitErrorHandler } from '../browser/git-error-handler';
import { ScmCommand } from '@theia/scm/lib/browser/scm-provider';
import { ProgressService } from '@theia/core/lib/common/progress-service';
import { GitPreferences } from './git-preferences';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare const EDITOR_CONTEXT_MENU_GIT: string[];
export declare namespace GIT_COMMANDS {
    const CLONE: {
        id: string;
        label: string;
    };
    const FETCH: {
        id: string;
        label: string;
    };
    const PULL_DEFAULT: {
        id: string;
        label: string;
    };
    const PULL: {
        id: string;
        label: string;
    };
    const PUSH_DEFAULT: {
        id: string;
        label: string;
    };
    const PUSH: {
        id: string;
        label: string;
    };
    const MERGE: {
        id: string;
        label: string;
    };
    const CHECKOUT: {
        id: string;
        label: string;
    };
    const COMMIT: {
        id: string;
        tooltip: string;
        iconClass: string;
        label: string;
    };
    const COMMIT_ADD_SIGN_OFF: {
        id: string;
        label: string;
        iconClass: string;
        category: string;
    };
    const COMMIT_AMEND: {
        id: string;
    };
    const COMMIT_SIGN_OFF: {
        id: string;
    };
    const OPEN_FILE: Command;
    const OPEN_CHANGED_FILE: Command;
    const OPEN_CHANGES: Command;
    const SYNC: {
        id: string;
        label: string;
    };
    const PUBLISH: {
        id: string;
        label: string;
    };
    const STAGE: {
        id: string;
        category: string;
        label: string;
        iconClass: string;
    };
    const STAGE_ALL: {
        id: string;
        category: string;
        label: string;
        iconClass: string;
    };
    const UNSTAGE: {
        id: string;
        iconClass: string;
        category: string;
        label: string;
    };
    const UNSTAGE_ALL: {
        id: string;
        iconClass: string;
        category: string;
        label: string;
    };
    const DISCARD: {
        id: string;
        iconClass: string;
        category: string;
        label: string;
    };
    const DISCARD_ALL: {
        id: string;
        iconClass: string;
        category: string;
        label: string;
    };
    const STASH: {
        id: string;
        category: string;
        label: string;
    };
    const APPLY_STASH: {
        id: string;
        category: string;
        label: string;
    };
    const APPLY_LATEST_STASH: {
        id: string;
        category: string;
        label: string;
    };
    const POP_STASH: {
        id: string;
        category: string;
        label: string;
    };
    const POP_LATEST_STASH: {
        id: string;
        category: string;
        label: string;
    };
    const DROP_STASH: {
        id: string;
        category: string;
        label: string;
    };
    const REFRESH: {
        id: string;
        label: string;
        iconClass: string;
        category: string;
    };
    const INIT_REPOSITORY: {
        id: string;
        label: string;
        iconClass: string;
        category: string;
    };
}
export declare class GitContribution implements CommandContribution, MenuContribution, TabBarToolbarContribution, ColorContribution {
    static GIT_CHECKOUT: string;
    static GIT_SYNC_STATUS: string;
    protected toDispose: DisposableCollection;
    protected readonly editorManager: EditorManager;
    protected readonly quickOpenService: GitQuickOpenService;
    protected readonly repositoryTracker: GitRepositoryTracker;
    protected readonly syncService: GitSyncService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly git: Git;
    protected readonly gitErrorHandler: GitErrorHandler;
    protected readonly commands: CommandRegistry;
    protected readonly progressService: ProgressService;
    protected readonly gitPreferences: GitPreferences;
    onStart(): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerCommands(registry: CommandRegistry): void;
    amend(): Promise<void>;
    protected withProgress<T>(task: () => Promise<T>): Promise<T>;
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    protected hasConflicts(changes: GitFileChange[]): boolean;
    protected allStaged(changes: GitFileChange[]): boolean;
    protected openFile(widget?: Widget): Promise<EditorWidget | undefined>;
    protected getOpenFileOptions(widget?: Widget): GitOpenFileOptions | undefined;
    openChanges(widget?: Widget): Promise<EditorWidget | undefined>;
    protected getOpenChangesOptions(widget?: Widget): GitOpenChangesOptions | undefined;
    protected updateStatusBar(): void;
    protected getCheckoutStatusBarCommand(): ScmCommand | undefined;
    protected getSyncStatusBarCommand(): ScmCommand | undefined;
    commit(options?: Git.Options.Commit & {
        message?: string;
    }): Promise<void>;
    addSignOff(): Promise<void>;
    /**
     * It should be aligned with https://code.visualstudio.com/api/references/theme-color#git-colors
     */
    registerColors(colors: ColorRegistry): void;
}
export interface GitOpenFileOptions {
    readonly uri: URI;
    readonly options?: EditorOpenerOptions;
}
export interface GitOpenChangesOptions {
    readonly change: GitFileChange;
    readonly options?: EditorOpenerOptions;
}
//# sourceMappingURL=git-contribution.d.ts.map