import { all, AllEffect } from 'redux-saga/effects';

import homeSagas from './home';
import stacksSagas from './stacks';
import hobbiesSagas from './hobbies';


export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([homeSagas(), hobbiesSagas(), stacksSagas()]);
}
