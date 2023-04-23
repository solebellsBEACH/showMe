import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  Types as HobbiesTypes,
  Creators as HobbiesActions,
} from '../../ducks/hobbies';
import { api } from '../../../services/api';

function* getHobbiesPageData(): any {
  try {
    const response = yield call(api.get, `document/allHobbies`);
    if (response.status === 202) {
      yield put(HobbiesActions.getHobbiesPageDataSuccess(response.data.data));
    } else {
      yield put(HobbiesActions.getHobbiesPageDataFail());
    }
  } catch (error) {
    yield put(HobbiesActions.getHobbiesPageDataFail());
  }
}

function* getHobbiesPageDataWatcher() {
  yield takeLatest(
    HobbiesTypes.GET_HOBBIESPAGE_DATA_REQUEST,
    getHobbiesPageData,
  );
}

export default function* rootSagas() {
  yield all([fork(getHobbiesPageDataWatcher)]);
}
