import { put, takeEvery } from 'redux-saga/effects';
import { actionIds } from '../types/actionsType';
function* musicfileSaga() {
  yield takeEvery(actionIds.MUSIC_CONSTANT, museworker);
}
function* museworker(obj) {
  const musicdata = obj.payload;
  const data = {
    type: actionIds.MUSIC_CONSTANT_RESPONSE,
    payload: musicdata,
  };
  yield put(data);
}
function* imagefileSaga() {
  yield takeEvery(actionIds.IMAGE_CONSTANT, imageworker);
}
function* imageworker(obj) {
  const imagedata = obj.payload;
  const data = {
    type: actionIds.IMAGE_CONSTANT_RESPONSE,
    payload: imagedata,
  };
  yield put(data);
}
function* trimfileSaga() {
  yield takeEvery(actionIds.MUSIC_TRIM_CONSTANT, trimworker);
}
function* trimworker(obj) {
  const trimdata = obj.payload;
  const data = {
    type: actionIds.MUSIC_TRIM_CONSTANT_RESPONSE,
    payload: trimdata,
  };
  yield put(data);
}

function* submitfileSaga() {
  yield takeEvery(actionIds.SUBMIT_DATA, submitworker);
}
function* submitworker(obj) {
  const subdata = obj.payload;
  const data = {
    type: actionIds.SUBMIT_DATA_RESPONSE,
    payload: subdata,
  };
  yield put(data);
}

export { musicfileSaga, imagefileSaga, trimfileSaga, submitfileSaga };
