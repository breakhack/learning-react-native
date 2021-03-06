import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
} from '../actions/types';

const initialState = {
  email: 'test@test.com',
  password: 'qweqweqwe',
  user: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAIL:
      const error = 'Authentication Failed!\n' + action.payload.message;
      return { ...state, error, password: '', loading: false };
    case LOGIN_USER_LOADING:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
}