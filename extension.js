const vscode = require('vscode');

module.exports.activate = function () {

    vscode.window.onDidChangeTextEditorSelection(event => {
        // annoying: whenever you cursor is on the word 'bisect' it is being
        // reset to document start...
        const { textEditor, selections } = event;
        const wordRange = textEditor.document.getWordRangeAtPosition(selections[0].active)
        if (textEditor.document.getText(wordRange).toLowerCase() === 'bisect') {
            textEditor.selection = new vscode.Selection(0, 0, 0, 0);
        }
    });
}
