/**
 * @ class : mysql.config.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'today',
  logging: false,
  pool: {
    max: 1000,
    min: 0,
    idle: 50000,
  },
};

module.exports = { ...config };
