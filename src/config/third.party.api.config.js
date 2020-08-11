/**
 * @ class : third.party.api.config.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
const kakaoVision = {
  name: 'KAKAO_VISION',
  faceDetectEndPoint: 'https://kapi.kakao.com/v1/vision/face/detect',
  taggingEndPoint: 'https://kapi.kakao.com/v1/vision/multitag/generate',
  restKey: 'ff72f6ae01a1be9fa3ce50444cb82f73',
};


// POST /oauth/token HTTP/1.1
// Host: kauth.kakao.com
// Content-type: application/x-www-form-urlencoded;charset=utf-8

const kakaoLogin = {
  name: 'KAKAO_AUTH',
  host: 'kauth.kakao.com',
  getTokenInfo: '/v1/us/access_token_info',
  getUserMe: '/v2/user/me',
  restKey: 'ff72f6ae01a1be9fa3ce50444cb82f73',
  secret: 'ik8obW3iWbQNrUN3rEwD1XPOc4n1hPPp',
};

module.exports = { kakaoVision, kakaoLogin };
