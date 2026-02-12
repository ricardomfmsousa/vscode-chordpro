const vscode = require('vscode');
const ChordSheetJS = require('chordsheetjs');

class ChordProPreview {
  /**
   * @param {vscode.ExtensionContext} context
   */
  constructor(context) {
    this.context = context;
    this.panel = undefined;
    this.parser = new ChordSheetJS.ChordProParser();
    this.formatter = new ChordSheetJS.HtmlTableFormatter();
  }

  show() {
    if (this.panel) {
      this.panel.reveal(vscode.ViewColumn.Beside);
    } else {
      this.panel = vscode.window.createWebviewPanel(
        'chordproPreview',
        'ChordPro Preview',
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
        },
      );

      this.panel.onDidDispose(
        () => {
          this.panel = undefined;
        },
        null,
        this.context.subscriptions,
      );

      this.update();
    }
  }

  update() {
    if (this.panel && vscode.window.activeTextEditor) {
      const editor = vscode.window.activeTextEditor;
      if (editor.document.languageId === 'chordpro') {
        const text = editor.document.getText();
        const song = this.parser.parse(text);
        const html = this.formatter.format(song);
        this.panel.title = `Preview: ${song.title || 'Untitled'}`;
        this.panel.webview.html = this._getWebviewContent(html);
      }
    }
  }

  _getWebviewContent(chordHtml) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChordPro Preview</title>
    <style>
        body {
            font-family: var(--vscode-editor-font-family);
            padding: 20px;
            background-color: var(--vscode-editor-background);
            color: var(--vscode-editor-foreground);
        }
        .chord-sheet {
            font-family: monospace;
        }
        .paragraph {
            margin-bottom: 1em;
        }
        .row {
            display: flex;
            flex-wrap: wrap;
        }
        .column {
            display: flex;
            flex-direction: column;
        }
        .chord {
            color: var(--vscode-textLink-foreground);
            font-weight: bold;
            min-height: 1.2em;
        }
        .lyrics {
            min-height: 1.2em;
        }
    </style>
</head>
<body>
    ${chordHtml}
</body>
</html>`;
  }
}

module.exports = ChordProPreview;
