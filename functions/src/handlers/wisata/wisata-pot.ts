import * as express from 'express';
import { DB } from '../../index';
import responGenerator from '../../helpers/respon';
import { Request } from 'express';
import { Response } from 'firebase-functions';
import { KATEGORY_WISATA } from '../../config/params';
import { GeoPoint } from '@google-cloud/firestore';


export const createWisata = async (req: Request, res: Response) => {
   const kategoryWisata = req.params[KATEGORY_WISATA];
   try {
      await DB.doc('pariwisata/wisata').collection(kategoryWisata).add(req.body);
      res.jsonp(
         responGenerator.success('success')
      );
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      );
   }
}
