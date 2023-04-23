import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  Types as HobbiesTypes,
  Creators as HobbiesActions,
} from '../../ducks/hobbies';
import { api } from '../../../services/api';
import { LanguageCodeEnum } from '../../../interface/enums';

function* getHobbiesPageData(params: {
  type: string;
  payload?: { language: LanguageCodeEnum };
}): any {
  const language = params.payload.language || LanguageCodeEnum.english;
  try {
    const response = yield call(
      api.get,
      `document/allHobbies?language=${language}`,
    );
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
