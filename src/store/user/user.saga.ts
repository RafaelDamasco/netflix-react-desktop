import userService from 'services/user/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthPayload, AuthResponse, AuthErrorMessage } from 'services/user/user.type';
import { PayloadAction } from '@reduxjs/toolkit';
import userSlice, { initialState } from './user.slice';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem('USER_TOKEN_COOKIE', response.data.token);
  } catch (exception) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

export default function* userSaga() {
  yield takeLatest('user/authentication', authentication);
}
