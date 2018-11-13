import { takeEvery } from 'redux-saga/effects';
import { TEXT_TO_STORE } from './app/appActions';
import { appTextInput } from './app/appSaga';

export function* rootSaga() {
    yield takeEvery([TEXT_TO_STORE], appTextInput);
}