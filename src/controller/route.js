/**
 * @ class : route.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import express from 'express';
import * as MIDDLEWARE from '../lib/middleware';
import * as UPLOAD_CTRL from './photoController';
import * as DEF_CTRL from './defaultController';

// eslint-disable-next-line import/prefer-default-export
export const router = express.Router();

function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
}

router.post('/upload', MIDDLEWARE.save, wrapAsync(UPLOAD_CTRL.uploadImageOrVideo));
router.post('/tagging', MIDDLEWARE.save, UPLOAD_CTRL.tagging);
router.post('/faceDetect', MIDDLEWARE.save, UPLOAD_CTRL.faceDetect);
router.get('/', DEF_CTRL.healthCheck);
router.get('/health', DEF_CTRL.healthCheck);
