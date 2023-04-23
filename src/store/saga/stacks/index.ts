import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Types as StackTypes, Creators as StackActions } from '../../ducks/stacks';
import { api } from '../../../services/api';

function* getStackPageData(): any {
    try {
        const response = yield call(api.get, `document/allStacks`);
        if (response.status === 202) {
            yield put(StackActions.getStackPageDataSuccess(response.data.data));
        } else {
            yield put(StackActions.getStackPageDataFail());
        }
    } catch (error) {
        yield put(StackActions.getStackPageDataFail());
    }
}

function* getStackPageDataWatcher() {
    yield takeLatest(StackTypes.GET_STACKSPAGE_DATA_REQUEST, getStackPageData);
}

export default function* rootSagas() {
    yield all([fork(getStackPageDataWatcher)]);
}
