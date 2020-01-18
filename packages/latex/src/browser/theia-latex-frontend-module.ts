/**
 * Generated using theia-extension-generator
 */

import { LaTeXClientContribution } from './theia-latex-contribution';
import { LanguageClientContribution } from "@theia/languages/lib/browser";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(LaTeXClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toDynamicValue(ctx => ctx.container.get(LaTeXClientContribution));
});
