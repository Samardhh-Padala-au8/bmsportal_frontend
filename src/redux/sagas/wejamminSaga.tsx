import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects';
import { baseApi } from 'redux/api';
import { actionIds } from '../types/actionsType';

function* userdataSaga() {
  yield takeEvery(actionIds.SEND_DATA, userworker);
}
function* userworker(obj) {
  const userdata = obj.payload;
  const history = obj.history;
  const data = {
    type: actionIds.SEND_DATA_RESPONSE,
    payload: userdata,
  };
  yield put(data);
  history.push('/signup3');
}
function* snapdataSaga() {
  yield takeEvery(actionIds.SEND_SNAP_DATA, snapeworker);
}
function* snapeworker(obj) {
  const userdata = obj.payload;
  const data = {
    type: actionIds.SEND_SNAP_DATA_RESPONSE,
    payload: userdata,
  };
  yield put(data);
}
function* copyrightSaga() {
  yield takeEvery(actionIds.POST_COPYRIGHT, copyworker);
}
function* copyworker(obj) {
  const { copyright } = obj.payload;
  const history = obj.history;
  const response: any = yield call(
    baseApi.post,
    `/copyright/claim`,
    copyright,
    {},
  );
  switch (response.status) {
    case 201:
      const data = {
        type: actionIds.POST_COPYRIGHT_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/postcopy');
  }
}
function* loginSaga() {
  yield takeEvery(actionIds.LOGIN_CALL, loginworkeer);
}
function* loginworkeer(obj) {
  const { username, password } = obj.payload;
  const history = obj.history;
  const response: any = yield call(
    baseApi.post,
    `/auth/login/email`,
    { email: username, password: password },
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.LOGIN_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/submit');
  }
}
function* signupSaga() {
  yield takeEvery(actionIds.SIGNUP_CALL, signupworkeer);
}
function* signupworkeer(obj) {
  const history = obj.history;
  const response: any = yield call(
    baseApi.post,
    `/auth/register/email`,
    { ...obj.payload },
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.SIGNUP_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/signup1');
  }
}
function* snapchatloginSaga() {
  yield takeEvery(actionIds.SNAPCHAT_CALL, snapworker);
}
function* snapworker(obj) {
  const { profile, history, type } = obj.payload;
  const response: any = yield call(
    baseApi.post,
    `/social/login/snapchat`,
    profile,
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.SNAPCHAT_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/uploadaudio/step1');
  }
}
function* facebookloginSaga() {
  yield takeEvery(actionIds.FACEBOOK_CALL, facebookworker);
}
function* facebookworker(obj) {
  const { profile, history, type } = obj.payload;
  const response: any = yield call(
    baseApi.post,
    `/social/login/fb`,
    profile,
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.FACEBOOK_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/uploadaudio/step1');
  }
}

function* googleloginSaga() {
  yield takeEvery(actionIds.GOOGLE_CALL, googleworker);
}
function* googleworker(obj) {
  const { profile, history, type } = obj.payload;
  const response: any = yield call(
    baseApi.post,
    `/social/login/google`,
    profile,
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.GOOGLE_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/uploadaudio/step1');
  }
}

function* forgotpwdSaga() {
  yield takeEvery(actionIds.FORGOTPASSWORD_CALL, forgotpasswordSaga);
}

function* forgotpasswordSaga(obj) {
  const { email } = obj.payload;
  const history = obj.history;
  const response: any = yield call(
    baseApi.post,
    `/auth/forgot-password`,
    { email: email },
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.FORGOTPASSWORD_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/submit');
  }
}

function* resetPwdSaga() {
  yield takeEvery(actionIds.RESETPASSWORD_CALL, resetpasswordSaga);
}

function* resetpasswordSaga(obj) {
  const { password } = obj.payload;
  const history = obj.history;
  const response: any = yield call(
    baseApi.post,
    `/auth/reset-passwor`,
    { password: password },
    {},
  );
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.RESETPASSWORD_RESPONSE,
        payload: response.data,
      };
      yield put(data);
      history.push('/submit');
  }
}
function* submitSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.SUBMIT_TRACK, createsomethingworker);
}
function* createsomethingworker(obj) {
  const token = localStorage.getItem('token');
  const { track } = obj.payload;
  const response: any = yield call(baseApi.post, `/beat`, track, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  switch (response.status) {
    case 201:
      const data = {
        type: actionIds.SUBMIT_TRACK_RESPONSE,
        payload: response.data,
      };
      yield put(data);
  }
}

function* submitnullSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.NULL_BEAT, createsomethingnullworker);
}
function* createsomethingnullworker() {
  const data = {
    type: actionIds.NULL_BEAT_RESPONSE,
  };
  yield put(data);
}

function* uploadimageSaga() {
  yield takeEvery(actionIds.UPLOAD_IMAGE, createimageworker);
}

function* createimageworker(obj) {
  const token = localStorage.getItem('token');
  const { image } = obj.payload;
  const response: any = yield call(baseApi.post, `/beat/cover/upload`, image, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.UPLOAD_IMAGE_RESPONSE,
        payload: response.data.url,
      };
      yield put(data);
  }
}

function* uploadmusicSaga() {
  yield takeEvery(actionIds.UPLOAD_MUSIC, createmusicworker);
}

function* createmusicworker(obj) {
  const token = localStorage.getItem('token');
  const { music } = obj.payload;
  const response: any = yield call(baseApi.post, `/beat/upload`, music, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  switch (response.status) {
    case 200:
      const data = {
        type: actionIds.UPLOAD_MUSIC_RESPONSE,
        payload: response.data.url,
      };
      yield put(data);
  }
}
export {
  submitSaga,
  uploadimageSaga,
  uploadmusicSaga,
  loginSaga,
  snapchatloginSaga,
  facebookloginSaga,
  googleloginSaga,
  signupSaga,
  forgotpwdSaga,
  resetPwdSaga,
  userdataSaga,
  snapdataSaga,
  copyrightSaga,
  submitnullSaga,
};
