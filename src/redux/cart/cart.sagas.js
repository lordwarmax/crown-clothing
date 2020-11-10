import { takeLatest, call, all, put } from 'redux-saga/effects';

import UserActionTypes from '../user.reducer/user.types';
import { clearCart } from './cart.actionts';

export function* clearCartOnSignOut () {
    yield put(clearCart());
};

export function* onSignOutSuccess () {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas () {
    yield all([call(onSignOutSuccess)]);
};