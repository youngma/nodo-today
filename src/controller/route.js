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

router.post('/upload', MIDDLEWARE.save, UPLOAD_CTRL.uploadImageOrVideo);
router.post('/faceDetect', MIDDLEWARE.save, UPLOAD_CTRL.faceDetect);
router.get('/', DEF_CTRL.healthCheck);
router.get('/health', DEF_CTRL.healthCheck);
