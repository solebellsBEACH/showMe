import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  Creators as ApplicationActions,
  Types as ApplicationTypes,
} from '../../ducks/application';

// function* getUserCart(): any {
//   try {
//     const response = yield call(api.get, `user/cart`);
//     console.log(response)
//     if (response.status === 200) {
//       yield put(ApplicationActions.getUserCartSuccess(
//         response.data
//       ));
//     } else {
//       yield put(ApplicationActions.getUserCartFail(response));
//     }
//   } catch (error) {
//     yield put(ApplicationActions.getUserCartFail({ success: false, message: '', }));
//   }
// }

// function* getUserCartWatcher() {
//   yield takeLatest(ApplicationTypes.GET_USER_CART_REQUEST, getUserCart);
// }

export default function* rootSagas() {
  yield all([
    // fork(getUserCartWatcher),
  ]);
}
