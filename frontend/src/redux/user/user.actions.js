import userTypes from './user.types';

/**
 * SIGN IN
 */
export const signInStart = emailAndPassword => ({
  type: userTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const singInFailure = error => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error,
});

/**
 * SIGN UP
 */
export const signUpStart = emailAndPassword => ({
  type: userTypes.SIGN_UP_START,
  payload: emailAndPassword,
});

export const signUpSuccess = user => ({
  type: userTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = error => ({
  type: userTypes.SIGN_UP_FAILURE,
  payload: error,
});

/**
 * SIGN OUT
 */
export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error,
});
