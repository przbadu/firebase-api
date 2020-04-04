import userTypes from './user.types';

const initialState = {
  currentUser: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userTypes.SIGN_IN_FAILURE:
    case userTypes.SIGN_UP_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
