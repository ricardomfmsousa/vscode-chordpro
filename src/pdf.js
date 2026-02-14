const vscode = require('vscode');
const ChordSheetJS = require('chordsheetjs');
const fs = require('fs');

async function exportToPdf() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document.languageId !== 'chordpro') {
    vscode.window.showErrorMessage('Please open a ChordPro file to export.');
    return;
  }

  // Parse the song
  const parser = new ChordSheetJS.ChordProParser();
  const song = parser.parse(editor.document.getText());

  // Prompt for save location
  const defaultName = song.title ? `${song.title}.pdf` : 'song.pdf';
  const uri = await vscode.window.showSaveDialog({
    defaultUri: vscode.Uri.file(defaultName),
    filters: {
      'PDF Files': ['pdf'],
    },
  });

  if (!uri) {
    return; // User cancelled
  }

  try {
    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Generating PDF...',
        cancellable: false,
      },
      async () => {
        const formatter = new ChordSheetJS.PdfFormatter();
        formatter.format(song);
        const pdfBlob = await formatter.generatePDF();
        const arrayBuffer = await pdfBlob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        await fs.promises.writeFile(uri.fsPath, buffer);
      },
    );

    vscode.window.showInformationMessage(
      `Successfully exported to ${defaultName}`,
    );
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to export PDF: ${error.message}`);
  }
}

module.exports = {
  exportToPdf,
};
