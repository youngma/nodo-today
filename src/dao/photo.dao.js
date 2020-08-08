/**
 * @ class : photo.dao.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import PhotoDB from './db/photo';
import DB from '../lib/sequelize.client';
import { Tables } from './db/table.enum';

const insertPhoto = async (photo) => {
  const newPhoto = await DB.insert(Tables.Photo, photo);
  return newPhoto;
};

module.exports = { insertPhoto };
