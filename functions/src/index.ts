import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import { https } from 'firebase-functions';
import mongoose = require('mongoose');
import * as config from './config/DB';

import {
  RouterUser
} from './Router';

const app = express();
mongoose.connect(config.DB);
mongoose.Promise = global.Promise;

app.use(
  cors({
    origin: true
  })
);
admin.initializeApp(functions.config().firebase);


app.use('/user', RouterUser);

exports.api = functions.https.onRequest(app)
