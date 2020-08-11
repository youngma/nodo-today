/**
 * @ class : common.util.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
const Bearer = 'Bearer';

const getBearerToken = authorization => authorization.split(' ')[1];
const makeBearerToken = token => `${Bearer} ${token}`;


module.exports = { getBearerToken, makeBearerToken };
