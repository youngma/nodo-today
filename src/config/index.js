/**
 * @ class : index.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import mysql from './mysql.config';
import common from './evn.config';
import apis from './third.party.api.config';

module.exports = {
  port: process.env.PORT || 4000,
  mysql,
  common,
  apis,
};
