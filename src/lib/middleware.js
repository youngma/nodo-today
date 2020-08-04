/**
 * @ class : middleware.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import multer from 'multer';
import * as CONFIG from '../config';

const uploadPath = multer({ dest: CONFIG.common.destinationFolder });
const save = uploadPath.single('file');
module.exports = { save };
