import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../util/request'
import apiConfig from '../../config/api'

import {
  REQUEST_LOGIN,
  successLogin,
  failLogin
 } from './action';

//登录
function* login(action) {
  let {phone, password} = action.values
  let url = apiConfig.login.replace('[PHONE]', phone)
              .replace('[PASSWORD]', password);

  let options = {
    method: 'GET'
  }

  try{
    let data = yield call(request, url, options);

    if(data.code == 200){
      yield put(successLogin(data))
      localStorage.setItem('userData', JSON.stringify(data))
    } else {
      yield put(failLogin(data.msg))
    }
  } catch(err) {
    yield put(failLogin('请求数据失败'))
  }
}

function* handleLogin() {
  yield takeLatest(REQUEST_LOGIN, login)
}

export default [
  handleLogin,
];
