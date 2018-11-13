import { TEXT_FROM_INPUTBOX, CHANGE_LANGUAGE } from '../../saga/app/appActions';
import produce from 'immer';

export interface IApp {
    textFromInputBox: string;
    language: string | undefined;
}

const initalizeState: IApp = {
    textFromInputBox: 'basictext',
    language: "",
};

export default (state = initalizeState, action: {type: string, payload: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case TEXT_FROM_INPUTBOX:
                draft.textFromInputBox = action.payload;
                return draft;
            case CHANGE_LANGUAGE:
                draft.language = action.payload;
                return draft;
            default:
                return state;
        }
});