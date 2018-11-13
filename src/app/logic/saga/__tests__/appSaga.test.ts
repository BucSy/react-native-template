import { expectSaga } from 'redux-saga-test-plan';
import { rootSaga } from '../rootSaga'
import { TEXT_FROM_INPUTBOX, TEXT_TO_STORE } from '../app/appActions';

describe('Saga tests', () => {
    expectSaga.DEFAULT_TIMEOUT = 8000;

    it('Send data to form', () => {
            return expectSaga(rootSaga)
                .put({type: TEXT_FROM_INPUTBOX, payload: 'SOMETHING' })
                .dispatch({type: TEXT_TO_STORE, payload: 'something' })
                .silentRun();
    }, 15000);
});