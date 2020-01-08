'use strict';

import * as vscode from 'vscode';
import {
    extractAbbreviation,
  } from './util';

interface AbbreviationSource {
  abbr: string,
  rangeToReplace: vscode.Range,
};

class ReactEmmet {
    getAbbreviationSource() : AbbreviationSource {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No editor is active');
            return null;
        }
        let rangeToReplace: vscode.Range = editor.selection;
        let abbr = editor.document.getText(rangeToReplace);
        if (rangeToReplace.isEmpty) {
            [rangeToReplace, abbr] = extractAbbreviation(rangeToReplace.start);
        }
    
        return {
          rangeToReplace,
          abbr,
        }
      }

    dispose() {
        // empty disposing method
    }
}

export default ReactEmmet;
