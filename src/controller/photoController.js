/**
 * @ class : photoController.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */


import * as KAKAO_VISION_SERVICE from '../service/kakaoVisionService';

/**
 * @ controller : uploadImageOrVideo
 */
module.exports.uploadImageOrVideo = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { image_url } = req.body;
  const result = await KAKAO_VISION_SERVICE.getTagging(image_url);
  return res.send(result); // object를 리턴함
};

/**
 * @ controller : uploadImageCrop
 */
module.exports.faceDetect = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { image_url } = req.body;
  const result = await KAKAO_VISION_SERVICE.faceDetect(image_url);
  return res.send(result); // object를 리턴함
};
