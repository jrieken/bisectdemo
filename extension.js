const vscode = require('vscode');

module.exports.activate = function () {

    function maybeResetCursor(textEditor) {
        // annoying: whenever your cursor is on the word 'bisect' it is 
        // being reset to the document start...
        const wordRange = textEditor.document.getWordRangeAtPosition(textEditor.selection.active)
        if (textEditor.document.getText(wordRange).toLowerCase() === 'bisect') {
            textEditor.selection = new vscode.Selection(0, 0, 0, 0);
        }
    }

    // whenever the selection changes there is a chance to annoy someone
    vscode.window.onDidChangeTextEditorSelection(event => {
        maybeResetCursor(event.textEditor);
    });

    // right after start/activate take the chance to annoy someone
    if (vscode.window.activeTextEditor) {
        maybeResetCursor(vscode.window.activeTextEditor);
    }
}
