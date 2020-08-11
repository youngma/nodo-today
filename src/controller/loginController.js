/**
 * @ class : loginController.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

import * as KAKAO_AUTH_SERVICE from '../service/kakaoLoginService';

/**
 * @ controller : signUp
 */
module.exports.signUp = async (req, res, next) => {
  const {
    token,
  } = req.body;

  const userInfo = await KAKAO_AUTH_SERVICE.searchUserMe(token);
  console.log(userInfo);

  res.send(userInfo); // object를 리턴함
};

/**
 * @ controller : signIn
 */
module.exports.signIn = async (req, res, next) => {
  const {
    token,
  } = req.query;

  const userInfo = await KAKAO_AUTH_SERVICE.loadTokenInfo(token);
  console.log(userInfo);

  // 토큰 유호성 확인
  // user table 확인
  // redis 저장 (3600 sec)

  res.send(200); // object를 리턴함
};
