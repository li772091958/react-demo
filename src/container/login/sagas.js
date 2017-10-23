import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../util/request'
import apiConfig from '../../config/api'

import {
  REQUEST_DATA,
  successData,
  failData
 } from './action';

//登录
function* home(action) {
  let url = apiConfig.url.replace('[LIMIT]', 20)
  let options = {
    method: 'GET'
  }
  try{
    let data = yield call(request, url, options)
    if(data.code == 200){
      yield put(successData(data.data))
    } else {
      yield put(failData('请求数据失败'))
    }
  } catch(err) {
    yield put(failData('出现异常了'))
  }
}

function* handleHome() {
  yield takeLatest(REQUEST_DATA, home)
}

export default [
  handleHome,
];
