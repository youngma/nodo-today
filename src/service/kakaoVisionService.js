/**
 * @ class : kakaoVisionService.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

import qs from 'qs';
import sharp from 'sharp';
import * as HTTP_CLIENT from '../lib/http.client';
import * as CONFIG from '../config';

// eslint-disable-next-line camelcase
const getTagging = async (image_url) => {
  const { kakaoVision } = CONFIG.apis;
  const { name, taggingEndPoint, restKey } = kakaoVision;

  const instance = HTTP_CLIENT.loadInstance(name);
  const source = HTTP_CLIENT.cancelToken();
  const timeoutId = setTimeout(() => source.cancel(), 1000);

  let response = {};
  try {
    const data = { image_url };
    const options = {
      method: 'POST',
      headers: {
        Authorization: `KakaoAK ${restKey}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(data),
      url: taggingEndPoint,
    };
    response = await instance(options);
    clearTimeout(timeoutId);
  } catch (e) {
    console.log(`${e}`);
    return [];
  }
  const { status, data } = response;
  if (data) {
    return data.result;
  }
  return [];
};

const faceDetect = async (imageUrl) => {
  const { kakaoVision } = CONFIG.apis;
  const { name, faceDetectEndPoint, restKey } = kakaoVision;

  const instance = HTTP_CLIENT.loadInstance(name);
  const source = HTTP_CLIENT.cancelToken();
  const timeoutId = setTimeout(() => source.cancel(), 1000);

  let response = {};
  try {
    const data = { image_url: imageUrl };
    const options = {
      method: 'POST',
      headers: {
        Authorization: `KakaoAK ${restKey}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(data),
      url: faceDetectEndPoint,
    };
    response = await instance(options);
    clearTimeout(timeoutId);
  } catch (e) {
    console.log(`${e}`);
    return [];
  }

  const { status, data } = response;
  const { width, height, faces } = data.result;
  let idx = 0;
  faces.forEach((face) => {
    const {
      x, y, w, h,
    } = face;
    idx += 1;
    const outputImage = `/Users/bob/bob/project/today/image_${idx}.jpg`;

    const extractData = {
      width: Math.floor(w * width),
      height: Math.floor(h * height),
      left: Math.floor(x * width),
      top: Math.floor(y * height),
    };
    sharp('/Users/bob/Desktop/1111.jpg').extract(extractData).toFile(outputImage);
  });

  if (data) {
    return data.result;
  }

  return [];
};

module.exports = { getTagging, faceDetect };
