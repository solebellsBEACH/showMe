import { all, AllEffect } from 'redux-saga/effects';

import homeSagas from './home';
import stacksSagas from './stacks';
import hobbiesSagas from './hobbies';
import applicationSagas from './application';

export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([
    homeSagas(),
    applicationSagas(),
    stacksSagas(),
    hobbiesSagas(),
  ]);
}
