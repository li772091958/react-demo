import request from '../../util/request'
import apiConfig from '../../config/api'
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  REQUEST_DATA,
  SUCCESS_DATA,
  successData,
  failData
 } from './action';

const homeEpic = (action$, store, getJSON) =>
  action$.ofType(REQUEST_DATA)
    .mergeMap(({ payload }) =>
      ajax.getJSON(apiConfig.url.replace('[LIMIT]', 20))
        .map(response => ({
          type: 'SUCCESS_DATA',
          data: response.data
        }))
    );

export default homeEpic