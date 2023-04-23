import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Types as HomeTypes, Creators as HomeActions } from '../../ducks/home'
import { api } from '../../../services/api';

function* getHomePageData(): any {
  try {
    const response = yield call(api.get, `document/allHome`);
    if (response.status === 202) {
      yield put(HomeActions.getHomePageDataSuccess(
        response.data.data
      ));
    } else {
      yield put(HomeActions.getHomePageDataFail());
    }
  } catch (error) {
    yield put(HomeActions.getHomePageDataFail());
  }
}

function* getHomePageDataWatcher() {
  yield takeLatest(HomeTypes.GET_HOMEPAGE_DATA_REQUEST, getHomePageData);
}

export default function* rootSagas() {
  yield all([
    fork(getHomePageDataWatcher),
  ]);
}
