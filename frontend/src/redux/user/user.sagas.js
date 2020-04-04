import { takeLatest, put, call, all } from 'redux-saga/effects';

// import {} from './../../'

import userTypes from './user.types';

import {
  singInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

export function* signIn() {
  yield console.log('sign in start');
}

export function* onSignInStart() {
  yield takeLatest(userTypes.SIGN_IN_START, signIn);
}

export function* userSagas() {
  yield all([call(onSignInStart)]);
}
