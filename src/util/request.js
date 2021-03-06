import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  let setting = {};
  if(options && options.headers){
    setting.headers = options.headers;
  }else{
    setting.headers = {};
  }
  setting.headers['Content-Type'] = 'application/json';
  //setting.headers['x-access-token'] = localStorage.getItem('token');

  options = {...options, ...setting};
  options.body = JSON.stringify(options.body)

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}
