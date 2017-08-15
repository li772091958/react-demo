import { takeLatest } from 'redux-saga/effects';

import {
  ABOUT
 } from './action';

//登录
function* about(action) {
  console.log(action)
}

function* handleAbout() {
  yield takeLatest(ABOUT, about)
}

export default [
  handleAbout,
];
