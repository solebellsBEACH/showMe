import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  Types as StackTypes,
  Creators as StackActions,
} from '../../ducks/stacks';
import { api } from '../../../services/api';
import { LanguageCodeEnum } from '../../../interface/enums';

function* getStackPageData(params: {
  type: string;
  payload?: { language: LanguageCodeEnum };
}): any {
  const language = params.payload.language || LanguageCodeEnum.english;
  try {
    const response = yield call(
      api.get,
      `document/allStacks?language=${language}`,
    );
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
