
// const LOG_WRAP_LIMIT = 79;
// const LATEX_WARNING_REGEX = /^LaTeX Warning: (.*)$/;
// const HBOX_WARNING_REGEX = /^(Over|Under)full \\(v|h)box/;
// const PACKAGE_WARNING_REGEX = /^(Package \b.+\b Warning:.*)$/;
// const LINES_REGEX = /lines? ([0-9]+)/;
// const PACKAGE_REGEX = /^Package (\b.+\b) Warning/;

// enum STATE {
//     NORMAL = 0,
//     ERROR = 1
// };

// interface LaTeXError {
// 	line: number;
//     file: string;
//     level: string;
//     message: string | undefined;
//     content: string;
//     raw: string;
// }

// class LogText {
//     private text: string;
//     private lines: string[];
//     private row: number;
//     constructor(text: string) {
//         this.text = text.replace(/(\r\n)|\r/g, '\n');
//         const wrappedLines = this.text.split('\n');
//         this.lines = [wrappedLines[0]];
//         let i = 1;
//         while (i < wrappedLines.length) {
//             if (wrappedLines[i - 1].length === LOG_WRAP_LIMIT && wrappedLines[i - 1].slice(-3) !== '...') {
//                 this.lines[this.lines.length - 1] += wrappedLines[i];
//             } else {
//                 this.lines.push(wrappedLines[i]);
//             }
//             i++;
//         }
//         this.row = 0;
//     }

//     public nextLine(): string | undefined {
//         this.row++;
//         if (this.row >= this.lines.length) {
//             return undefined;
//         } else {
//             return this.lines[this.row];
//         }
//     }

//     public rewindLine(): void {
//     	this.row--;
//     }

//     public linesUpToNextMatchingLine(match: RegExp): string[] {
//         const lines: string[] = [];
//         let nextLine: string | undefined = this.nextLine();
//         if (nextLine) {
//             lines.push(<string>nextLine);
//         }
//         while (nextLine && !nextLine!.match(match)) {
//             nextLine = this.nextLine();
//             if (nextLine) {
//                 lines.push(<string>nextLine);
//             }
//         }
//         return lines;
//     };

//     public linesUpToNextWhitespaceLine() {
//         return this.linesUpToNextMatchingLine(/^ *$/);
//     };
// }

// class LaTeXParser {
// 	private log: LogText;
// 	private state: STATE;
// 	private fileBaseNames: RegExp[];
// 	private ignoreDuplicates: boolean;
// 	private openParens: number;
// 	private currentLine: string | undefined = undefined;
// 	private currentError: LaTeXError;
// 	private currentFilePath: string;
// 	private data: LaTeXError[];
// 	constructor(text: string) {
// 		this.log = new LogText(text);
// 	    this.state = STATE.NORMAL;
// 	    this.fileBaseNames = [/compiles/, /\/usr\/local/];
// 	    this.ignoreDuplicates = true;
// 	    this.data = [];
// 	    this.fileStack = [];
// 	    this.currentFileList = this.rootFileList = [];
// 	    this.openParens = 0;
// 	}

// 	private currentLineIsError(): boolean {
// 		if (this.currentLine) {
// 			return this.currentLine[0] === '!';
// 		}
//         return false;
//     };

//     private currentLineIsRunawayArgument(): boolean {
//     	if (this.currentLine) {
//         	return !!this.currentLine.match(/^Runaway argument/);
//     	}
//     	return false;
//     };
//     private currentLineIsWarning(): boolean {
//     	if (this.currentLine) {
//         	return !!this.currentLine.match(LATEX_WARNING_REGEX);
//         }
//     	return false;
//     };
//     private currentLineIsPackageWarning(): boolean {
//     	if (this.currentLine) {
//         	return !!this.currentLine.match(PACKAGE_WARNING_REGEX);
//        	}
//     	return false;
//     };
//     private currentLineIsHboxWarning(): boolean {
//     	if (this.currentLine) {
//         	return !!this.currentLine.match(HBOX_WARNING_REGEX);\
//         }
//     	return false;
//     };
//     private parseRunawayArgumentError(): void {
//         this.currentError = {
//             line: 0,
//             file: this.currentFilePath,
//             level: 'error',
//             message: this.currentLine,
//             content: '',
//             raw: this.currentLine + '\n'
//         };
//         this.currentError.content += this.log.linesUpToNextWhitespaceLine().join('\n');
//         this.currentError.content += '\n';
//         this.currentError.content += this.log.linesUpToNextWhitespaceLine().join('\n');
//         this.currentError.raw += this.currentError.content;
//         const matchRes = this.currentError.raw.match(/l\.([0-9]+)/);
//         if (matchRes) {
//             this.currentError.line = parseInt(matchRes[1], 10);
//         }
//     };
//     this.parseSingleWarningLine = function(prefix_regex) {
//         var line, lineMatch, warning, warningMatch;
//         warningMatch = this.currentLine.match(prefix_regex);
//         if (!warningMatch) {
//             return;
//         }
//         warning = warningMatch[1];
//         lineMatch = warning.match(LINES_REGEX);
//         line = lineMatch ? parseInt(lineMatch[1], 10) : null;
//         this.data.push({
//             line: line,
//             file: this.currentFilePath,
//             level: 'warning',
//             message: warning,
//             raw: warning
//         });
//     };
//     this.parseMultipleWarningLine = function() {
//         var line, lineMatch, packageMatch, packageName, prefixRegex, raw_message, warningMatch, warning_lines;
//         warningMatch = this.currentLine.match(PACKAGE_WARNING_REGEX);
//         if (!warningMatch) {
//             return;
//         }
//         warning_lines = [warningMatch[1]];
//         lineMatch = this.currentLine.match(LINES_REGEX);
//         line = lineMatch ? parseInt(lineMatch[1], 10) : null;
//         packageMatch = this.currentLine.match(PACKAGE_REGEX);
//         packageName = packageMatch[1];
//         prefixRegex = new RegExp('(?:\\(' + packageName + '\\))*[\\s]*(.*)', 'i');
//         while (!!(this.currentLine = this.log.nextLine())) {
//             lineMatch = this.currentLine.match(LINES_REGEX);
//             line = lineMatch ? parseInt(lineMatch[1], 10) : line;
//             warningMatch = this.currentLine.match(prefixRegex);
//             warning_lines.push(warningMatch[1]);
//         }
//         raw_message = warning_lines.join(' ');
//         this.data.push({
//             line: line,
//             file: this.currentFilePath,
//             level: 'warning',
//             message: raw_message,
//             raw: raw_message
//         });
//     };
//     this.parseHboxLine = function() {
//         var line, lineMatch;
//         lineMatch = this.currentLine.match(LINES_REGEX);
//         line = lineMatch ? parseInt(lineMatch[1], 10) : null;
//         this.data.push({
//             line: line,
//             file: this.currentFilePath,
//             level: 'typesetting',
//             message: this.currentLine,
//             raw: this.currentLine
//         });
//     };
//     this.parseParensForFilenames = function() {
//         var filePath, newFile, pos, previousFile, token;
//         pos = this.currentLine.search(/\(|\)/);
//         if (pos !== -1) {
//             token = this.currentLine[pos];
//             this.currentLine = this.currentLine.slice(pos + 1);
//             if (token === '(') {
//                 filePath = this.consumeFilePath();
//                 if (filePath) {
//                     this.currentFilePath = filePath;
//                     newFile = {
//                         path: filePath,
//                         files: []
//                     };
//                     this.fileStack.push(newFile);
//                     this.currentFileList.push(newFile);
//                     this.currentFileList = newFile.files;
//                 } else {
//                     this.openParens++;
//                 }
//             } else if (token === ')') {
//                 if (this.openParens > 0) {
//                     this.openParens--;
//                 } else {
//                     if (this.fileStack.length > 1) {
//                         this.fileStack.pop();
//                         previousFile = this.fileStack[this.fileStack.length - 1];
//                         this.currentFilePath = previousFile.path;
//                         this.currentFileList = previousFile.files;
//                     }
//                 }
//             }
//             this.parseParensForFilenames();
//         }
//     };

// 	public parse(): void {
// 		let lineNo = 0;
//         while ((this.currentLine = this.log.nextLine()) !== undefined) {
//             if (this.state === STATE.NORMAL) {
//                 if (this.currentLineIsError()) {
//                     this.state = STATE.ERROR;
//                     this.currentError = {
//                         line: null,
//                         file: this.currentFilePath,
//                         level: 'error',
//                         message: this.currentLine.slice(2),
//                         content: '',
//                         raw: this.currentLine + '\n'
//                     };
//                 } else if (this.currentLineIsRunawayArgument()) {
//                     this.parseRunawayArgumentError();
//                 } else if (this.currentLineIsWarning()) {
//                     this.parseSingleWarningLine(LATEX_WARNING_REGEX);
//                 } else if (this.currentLineIsHboxWarning()) {
//                     this.parseHboxLine();
//                 } else if (this.currentLineIsPackageWarning()) {
//                     this.parseMultipleWarningLine();
//                 } else {
//                     this.parseParensForFilenames();
//                 }
//             }
//             if (this.state === state.ERROR) {
//                 this.currentError.content += this.log.linesUpToNextMatchingLine(/^l\.[0-9]+/).join('\n');
//                 this.currentError.content += '\n';
//                 this.currentError.content += this.log.linesUpToNextWhitespaceLine().join('\n');
//                 this.currentError.content += '\n';
//                 this.currentError.content += this.log.linesUpToNextWhitespaceLine().join('\n');
//                 this.currentError.raw += this.currentError.content;
//                 lineNo = this.currentError.raw.match(/l\.([0-9]+)/);
//                 if (lineNo) {
//                     this.currentError.line = parseInt(lineNo[1], 10);
//                 }
//                 this.data.push(this.currentError);
//                 this.state = state.NORMAL;
//             }
//         }
//         return this.postProcess(this.data);
// 	}
// }

// LatexParser = function(text, options) {
    
// };
// (function() {
//     this.parse = function() {
        
//     };
    
//     this.consumeFilePath = function() {
//         var endOfFilePath, path;
//         if (!this.currentLine.match(/^\/?([^ \)]+\/)+/)) {
//             return false;
//         }
//         endOfFilePath = this.currentLine.search(RegExp(' |\\)'));
//         path = void 0;
//         if (endOfFilePath === -1) {
//             path = this.currentLine;
//             this.currentLine = '';
//         } else {
//             path = this.currentLine.slice(0, endOfFilePath);
//             this.currentLine = this.currentLine.slice(endOfFilePath);
//         }
//         return path;
//     };
//     return this.postProcess = function(data) {
//         var all, errors, hashEntry, hashes, i, typesetting, warnings;
//         all = [];
//         errors = [];
//         warnings = [];
//         typesetting = [];
//         hashes = [];
//         hashEntry = function(entry) {
//             return entry.raw;
//         };
//         i = 0;
//         while (i < data.length) {
//             if (this.ignoreDuplicates && hashes.indexOf(hashEntry(data[i])) > -1) {
//                 i++;
//                 continue;
//             }
//             if (data[i].level === 'error') {
//                 errors.push(data[i]);
//             } else if (data[i].level === 'typesetting') {
//                 typesetting.push(data[i]);
//             } else if (data[i].level === 'warning') {
//                 warnings.push(data[i]);
//             }
//             all.push(data[i]);
//             hashes.push(hashEntry(data[i]));
//             i++;
//         }
//         return {
//             errors: errors,
//             warnings: warnings,
//             typesetting: typesetting,
//             all: all,
//             files: this.rootFileList
//         };
//     };
// }).call(LatexParser.prototype);
// LatexParser.parse = function(text, options) {
//     return new LatexParser(text, options).parse();
// };
// return LatexParser;
// });