import { put, call } from 'redux-saga/effects';
import { TEXT_FROM_INPUTBOX } from '../app/appActions';

function appTextInputHandler(textInput: string) {
    const text = textInput.toUpperCase();
    return text;
}

export function* appTextInput(action: { type: string, payload: string}) {
    const text = yield call(appTextInputHandler, action.payload);
    yield put({type: TEXT_FROM_INPUTBOX, payload: text});
}