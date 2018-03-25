import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import { https } from 'firebase-functions';

import RouterWisata from './Router/Router-wisata';

const app = express();
app.use(
  cors({
    origin: true
  })
);

admin.initializeApp(functions.config().firebase);
export const DB = admin.firestore();

app.use('/wisata', RouterWisata);

exports.api = functions.https.onRequest(app)
