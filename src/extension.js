const vscode = require('vscode');
const ChordProPreview = require('./preview');
const { exportToPdf } = require('./pdf');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('ChordPro extension is now active!');

  const preview = new ChordProPreview(context);

  // Register Preview Command
  let disposablePreview = vscode.commands.registerCommand(
    'chordpro.showPreview',
    () => {
      preview.show();
    },
  );

  // Register PDF Export Command
  let disposablePdf = vscode.commands.registerCommand(
    'chordpro.exportPdf',
    () => {
      exportToPdf();
    },
  );

  // Update preview on document change/save
  vscode.workspace.onDidChangeTextDocument(
    (event) => {
      if (event.document === vscode.window.activeTextEditor?.document) {
        preview.update();
      }
    },
    null,
    context.subscriptions,
  );

  vscode.window.onDidChangeActiveTextEditor(
    () => {
      preview.update();
    },
    null,
    context.subscriptions,
  );

  context.subscriptions.push(disposablePreview);
  context.subscriptions.push(disposablePdf);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
