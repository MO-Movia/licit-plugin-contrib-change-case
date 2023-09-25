
import { EditorView } from 'prosemirror-view';
import { Plugin, PluginKey } from 'prosemirror-state';
import {UpperCaseCommand} from './UpperCaseCommand';
import {LowerCaseCommand} from './LowerCaseCommand';
import {SentanceCaseCommand} from './SentanceCaseCommand';

export class ChangeCasePlugin extends Plugin {
    _view: EditorView = null;
    constructor() {
        super({
            key: new PluginKey('ChangeCasePlugin'),
        });
    }

    initButtonCommands() {
        return {
            '[font_download] Change Case': [
                {
                    'UpperCase': new UpperCaseCommand(),
                    'LowerCase': new LowerCaseCommand(),
                    'SentanceCase': new SentanceCaseCommand(),
                },
            ],
        };
    }
}

