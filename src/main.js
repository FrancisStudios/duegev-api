import express from 'express';
import process from 'process';
import cors from 'cors'
import DuegevUserEndpoint from './API/user.endpoint.js';
import DuegevLabelEndpoint from './API/label.endpoint.js';

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

console.log('Duegev monolith server started');

/* Init Endpoint Services */
// DuegevUserEndpoint.initEndpoint(DuegevBackendAPI);
// DuegevLabelEndpoint.initEndpoint(DuegevBackendAPI);


/* ROOT and basic API definitions */
DuegevBackendAPI.get('/', function (req, res) {
  res.send('{ "message": "Welcome to Duegev Monolith" }');
});

DuegevBackendAPI.listen(
  String(process.env.DUEGEVBACKEND_PORT),
  process.env.DUEGEVBACKEND_IP
);