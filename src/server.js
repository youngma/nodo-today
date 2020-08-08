/**
 * @ class : server.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */

import express from 'express';
import cors from 'cors';
import { port } from './config';
import { router } from './controller/route';

require('dotenv').config();

const app = express();
// app.use(cors);
app.use(express.json({ limit: '50mb' }));

app.use(router);

app.use((req, res, next) => {
  res.sendStatus(404);
});

// Global Error Handler
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    const resBody = { message: err.message };
    res.status(500).send(resBody);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.info(`🚀 [${process.env.NODE_ENV}]  API Server at http://localhost:${port} / `);
});
