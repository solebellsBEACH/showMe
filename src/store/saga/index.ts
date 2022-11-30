import { all, AllEffect } from 'redux-saga/effects';

import applicationSagas from './application';

export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([
    applicationSagas(),
  ]);
}
