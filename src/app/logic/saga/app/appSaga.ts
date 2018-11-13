import { put, call } from 'redux-saga/effects';
import { TEXT_TO_STORE } from '../app/appActions';

function appTextInputHandler(textInput: string) {
    const text = 'basictext';
    return text;
}

export function* appTextInput(action: { type: string, payload: string}) {
    const text = yield call(appTextInputHandler, action.payload);
    yield put({type: TEXT_TO_STORE, payload: text});
}