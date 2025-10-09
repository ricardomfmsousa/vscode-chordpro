const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('chordpro.exportToPdf', function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('No active file open');
            return;
        }

        const document = editor.document;
        const filePath = document.uri.fsPath;

        // Check if the file has a ChordPro extension
        const ext = path.extname(filePath).toLowerCase();
        const validExtensions = ['.cho', '.crd', '.chord', '.chopro', '.chordpro', '.pro'];

        if (!validExtensions.includes(ext)) {
            vscode.window.showWarningMessage('Current file is not a ChordPro file (.cho, .crd, .chord, .chopro, .chordpro, .pro)');
            return;
        }

        // Save the document before exporting
        document.save().then(() => {
            const outputPath = filePath.replace(ext, '.pdf');
            const command = `chordpro "${filePath}" --output="${outputPath}"`;

            vscode.window.showInformationMessage(`Exporting ChordPro to PDF...`);

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showErrorMessage(`ChordPro export failed: ${error.message}`);
                    console.error('ChordPro error:', error);
                    if (stderr) {
                        console.error('ChordPro stderr:', stderr);
                    }
                    return;
                }

                if (stderr) {
                    console.warn('ChordPro stderr:', stderr);
                }

                // Check if PDF was created
                if (fs.existsSync(outputPath)) {
                    vscode.window.showInformationMessage(`PDF exported successfully: ${path.basename(outputPath)}`);

                    // Open the PDF with system default viewer
                    const pdfUri = vscode.Uri.file(outputPath);
                    vscode.env.openExternal(pdfUri);
                } else {
                    vscode.window.showWarningMessage(`PDF export completed but file not found at: ${outputPath}`);
                }
            });
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
