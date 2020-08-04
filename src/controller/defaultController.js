/**
 * @ class : photoController.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

/**
 * @ controller : uploadImageOrVideo
 */
module.exports.healthCheck = async (req, res, next) => {
  res.send(` Today Server Date ${new Date().toISOString()}`); // object를 리턴함
};
