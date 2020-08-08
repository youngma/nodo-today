/**
 * @ class : sequelize.client.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import * as CONFIG from '../config';

const Sequelize = require('sequelize');

const {
  host, databse, user, password, logging, pool,
} = CONFIG.mysql;

const MysqlClient = new Sequelize(databse, user, password, {
  host,
  dialect: 'mysql',
  logging,
  pool,
});

const loadTable = tableName => MysqlClient.models[tableName];
module.exports = { MysqlClient, loadTable };
