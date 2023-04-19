import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Types as HomeTypes, Creators as HomeActions } from '../../ducks/home'
import { api } from '../../../services/api';
import { Page } from '../../../interface/enums';

function* getHomePageDocuments(page: Page): any {
  try {
    const response = yield call(api.get, `user/cart`);
    console.log(response)
    if (response.status === 200) {
      yield put(HomeActions.getHomePageDocumentsSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getHomePageDocumentsFail(response));
    }
  } catch (error) {
    yield put(HomeActions.getHomePageDocumentsFail({ success: false, message: '', }));
  }
}

function* getHomePageDocumentsWatcher() {
  yield takeLatest(HomeTypes.GET_HOME_DOCUMENTS_REQUEST, getHomePageDocuments);
}

export default function* rootSagas() {
  yield all([
    fork(getHomePageDocumentsWatcher),
  ]);
}
