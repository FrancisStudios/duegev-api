import express from 'express';
import process from 'process';
import cors from 'cors'
import MessageInterface from './utils/message.interface.js';
import { MongoClient } from 'mongodb';
import Response from './API/response.collection.js';

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

/* API PATHS */
DuegevBackendAPI.get('/', function (req, res) {
  res.send(MessageInterface.construct(Response.STATUS.OK, Response.MESSAGE.ROOT_MESSAGE));
});

DuegevBackendAPI.listen(
  String(process.env.DUEGEVBACKEND_PORT),
  process.env.DUEGEVBACKEND_IP
);