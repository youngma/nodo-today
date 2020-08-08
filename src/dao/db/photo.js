/**
 * @ class : photo.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import { DataTypes } from 'sequelize';
import * as DB from '../../lib/sequelize.client';
import { Tables } from './table.enum';


const PhotoDB = DB.MysqlClient.define(Tables.Photo, {
  // Model attributes are defined here
  seq: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  orgFileName: {
    field: 'org_file_name',
    type: DataTypes.STRING,
  },
  fileType: {
    field: 'org_file_name',
    type: DataTypes.STRING,
  },
  fileFullPath: {
    field: 'file_full_path',
    type: DataTypes.STRING,
  },
  firstName: {
    field: 'first_name',
    type: DataTypes.STRING,
  },
  lastName: {
    field: 'last_name',
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  createdBy: {
    field: 'created_by',
    type: DataTypes.STRING,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
  updatedBy: {
    field: 'updated_by',
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  freezeTableName: true,
  tableName: Tables.Photo,
});

module.exports = { PhotoDB };
