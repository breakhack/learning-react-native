import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    loginUserLoading(dispatch);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFail(dispatch, error))
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  Actions.main();
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error })
};

const loginUserLoading = (dispatch) => {
  dispatch({ type: LOGIN_USER_LOADING })
};