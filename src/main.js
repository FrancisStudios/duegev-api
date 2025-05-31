/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import express from 'express';
import process from 'process';
import cors from 'cors'
import MessageInterface from './utils/message.interface.js';
import Response from './API/response.collection.js';
import DataBaseService from './API/db/db.service.js';
import DuegevAPIAuth from './API/endpoints/authentication.endpoint.js';

const DuegevBackendAPI = express();
DuegevBackendAPI.use(cors());
DuegevBackendAPI.use(express.json({ type: '*/*', limit: '50mb' }));
DuegevBackendAPI.use(express.urlencoded({ extended: true, limit: '50mb' }));
DuegevBackendAPI.use(
  express.json({
    verify: (req, res, buf) => { req.rawBody = buf.toString() },
    limit: '50mb'
  })
);

console.log('🌱 Duegev monolith server started 🌱');

/* Init services */
await DataBaseService.init();

/* Init Endpoints */
DuegevBackendAPI.get('/', function (req, res) {
  res.send(MessageInterface.construct(Response.STATUS.OK, Response.MESSAGE.ROOT_MESSAGE));
});

DuegevAPIAuth.initEndpoint(DuegevBackendAPI);

DuegevBackendAPI.listen(
  String(process.env.DUEGEVBACKEND_PORT),
  process.env.DUEGEVBACKEND_IP
);