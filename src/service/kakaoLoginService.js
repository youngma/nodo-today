/**
 * @ class : kakaoVisionService.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

import qs from 'qs';
import sharp from 'sharp';
import * as HTTP_CLIENT from '../lib/http.client';
import * as CONFIG from '../config';
import * as UTIL from '../lib/common.util';

const { METHOD } = HTTP_CLIENT;

const sendRequest = async (name, method, url, query, params, token) => {
  const instance = HTTP_CLIENT.loadInstance(name);
  const source = HTTP_CLIENT.cancelToken();
  const timeoutId = setTimeout(() => source.cancel(), 1000);

  let response = {};
  try {
    const options = {
      method: 'get',
      headers: {
        Authorization: UTIL.makeBearerToken(token),
      },
      url,
    };
    response = await instance(options);
    clearTimeout(timeoutId);
  } catch (e) {
    console.log(`${e}`);
    return null;
  }

  return response;
};

const searchUserMe = async (token) => {
  const { kakaoLogin } = CONFIG.apis;
  const {
    host, name, getUserMe,
  } = kakaoLogin;

  const response = await sendRequest(name, METHOD.GET, `${host}${getUserMe}`, null, null, token);
  const { status, data } = response;

  if (data) {
    return true;
  }
  return false;
};

const loadTokenInfo = async (token) => {
  const { kakaoLogin } = CONFIG.apis;
  const {
    host, name, getUserMe,
  } = kakaoLogin;

  const response = await sendRequest(name, METHOD.GET, `${host}${getUserMe}`, null, null, token);
  const { status, data } = response;

  if (data) {
    return true;
  }
  return false;
};

module.exports = { loadTokenInfo, searchUserMe };
