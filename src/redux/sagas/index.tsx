import {
  facebookloginSaga,
  googleloginSaga,
  loginSaga,
  signupSaga,
  snapchatloginSaga,
  submitSaga,
  uploadimageSaga,
  uploadmusicSaga,
  forgotpwdSaga,
  resetPwdSaga,
  userdataSaga,
  snapdataSaga,
  copyrightSaga,
  submitnullSaga,
} from './wejamminSaga';
import { call, all, spawn } from 'redux-saga/effects';
import {
  imagefileSaga,
  musicfileSaga,
  submitfileSaga,
  trimfileSaga,
} from './musicSaga';

export default function* rootSaga() {
  function* createSaga(saga, index) {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e: any) {
        if (e.response) {
          if (e.response.status === 401) {
            const currentLoc = window.location.href;
            if (!currentLoc.includes('/login')) {
              window.history.pushState({}, '', `/login`);
              window.location.reload();
            }
          }
        }
      }
    }
  }

  const sagas = [
    submitSaga,
    uploadimageSaga,
    uploadmusicSaga,
    signupSaga,
    loginSaga,
    snapchatloginSaga,
    facebookloginSaga,
    googleloginSaga,
    forgotpwdSaga,
    resetPwdSaga,
    userdataSaga,
    snapdataSaga,
    musicfileSaga,
    imagefileSaga,
    submitfileSaga,
    trimfileSaga,
    copyrightSaga,
    submitnullSaga,
  ];
  yield all(sagas.map((saga, index) => spawn(createSaga, saga, index)));
}
