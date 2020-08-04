/**
 * @ class : http.client.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import axios from 'axios'
import http from 'http';
import https from 'https';

const instance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

const instanceMap = {};

export const loadInstance = (name) => {
  let httpClient = instanceMap[name];
  if (!httpClient) {
    httpClient = instance;
  }
  return httpClient;
};

export const cancelToken = () => axios.CancelToken.source();
