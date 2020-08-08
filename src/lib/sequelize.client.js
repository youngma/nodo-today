/**
 * @ class : sequelize.client.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import * as CONFIG from '../config';
import { Tables } from '../dao/db/table.enum';

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
const insert = async (tableName, row) => {
  console.log(tableName, row);

  if (!Object.values(Tables).includes(tableName)) {
    throw new Error(`not found tableName => ${tableName}`);
  }

  const table = loadTable(tableName);
  if (row instanceof Object) {
    const result = await table.create(tableName, row);
    console.log(result)
    return result;
  }

  if (row instanceof Array) {
    const result = await table.bulkCreate(tableName, row);
    return result;
  }

  throw new Error(`row type error => ${row}`);
};

module.exports = { MysqlClient, insert };
