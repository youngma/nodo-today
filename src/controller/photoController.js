/**
 * @ class : photoController.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

import * as KAKAO_VISION_SERVICE from '../service/kakaoVisionService';
import * as PHOTO_DB from '../dao/photo.dao';
/**
 * @ controller : uploadImageOrVideo
 */
module.exports.tagging = async (req, res, next) => {
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

/**
 * @ controller : uploadImageCrop
 */
module.exports.uploadImageOrVideo = async (req, res, next) => {
  const saveFiles = req.file;

  const {
    originalname, path, mimetype, filename, size,
  } = saveFiles;

  const originalnames = originalname.split('.');
  const photo = {
    orgFileName: originalname,
    fileFullPath: path,
    fileType: mimetype,
    firstName: originalnames[0],
    lastName: originalnames[1],
    createdBy: 'system',
    updatedBy: 'system',
  };

  const r = await PHOTO_DB.insertPhoto(photo);
  res.send(r); // object를 리턴함
};
