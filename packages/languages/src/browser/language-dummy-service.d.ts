import { LanguageContribution } from '../common';
export declare class LanguageDummyService implements LanguageContribution.Service {
    protected nextId: number;
    create(contributionId: string, parameters: any): Promise<string>;
    destroy(sessionId: string): Promise<void>;
}
//# sourceMappingURL=language-dummy-service.d.ts.map