import { EditorState } from 'prosemirror-state';
import { Transform } from 'prosemirror-transform';
import { EditorView } from 'prosemirror-view';
import { UICommand } from '@modusoperandi/licit-doc-attrs-step';

// Code to convert the selected text into LowerCase

export class UpperCaseCommand extends UICommand {
  // To check if any text is selected

  isEnabled = (state: EditorState): boolean => {
    return this._isEnabled(state);
  };

  _isEnabled = (state: EditorState): boolean => {
    const tr = state.tr;
    if (!tr.selection.empty) {
      return true;
    }
    return false;
  };

  // Logic to convert text to uppercase and assign them marks

  execute = (
    state: EditorState,
    dispatch: (tr: Transform) => void | undefined,
    _view: EditorView | undefined
  ): boolean => {
    const { from, to } = state.selection;
    const tr = state.tr;
    state.doc.nodesBetween(from, to, (node, pos) => {
      if (node.isText && pos <= to && pos + node.nodeSize >= from) {
        const start = Math.max(pos, from);
        const end = Math.min(pos + node.nodeSize, to);
        const text = node.textBetween(start - pos, end - pos);

        if (text !== text.toUpperCase()) {
          const transformedText = text.toUpperCase();

          tr.replaceWith(
            start,
            end,
            state.schema.text(transformedText, node.marks)
          );
        }
      }
    });
    dispatch(tr.scrollIntoView());
    return true;
  };

  renderLabel() {
    return null;
  }
  isActive(): boolean {
    return true;
  }
  waitForUserInput(): Promise<null> {
    return Promise.resolve(null);
  }
  executeWithUserInput(): boolean {
    return true;
  }
  cancel(): void {
    return null;
  }
  executeCustom(_state: EditorState, tr: Transform): Transform {
    return tr;
  }
}
