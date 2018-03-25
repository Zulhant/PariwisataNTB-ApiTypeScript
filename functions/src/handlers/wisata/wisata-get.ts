import * as express from 'express';
import { WISATA_ID, KATEGORY_WISATA } from '../../config/params';
import responGenerator from '../../helpers/respon';
import { Request } from 'express';
import { Response } from 'firebase-functions';
import { DB } from '../../index';


export const getAllWisata = async (req: Request, res: Response) => {
   const kategoryWisata = req.params[KATEGORY_WISATA];
   try {
      const dataWisata = await DB.doc(`pariwisata/wisata`).collection(kategoryWisata).get();
      if (!dataWisata.empty) {
         const masterData = []
         dataWisata.forEach(docWisata => {
            const data = docWisata.data();
            data._id = docWisata.id
            masterData.push(data)
         });

         res.jsonp(
            responGenerator.success(masterData)
         );
      } else {
         res.jsonp(
            responGenerator.noPound('data tidak ditemukan')
         )
      }
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      )
   }
}


export const getWisata = async (req: Request, res: Response) => {
   const kategoryWisata = req.params[KATEGORY_WISATA];
   const wisataId = req.params[WISATA_ID];
   try {
      const dataWisata = await DB.doc(`pariwisata/wisata`).collection(kategoryWisata).doc(wisataId).get();
      if (dataWisata.exists) {
         const data = dataWisata.data();
         data._id = dataWisata.id
         res.jsonp(
            responGenerator.success(data)
         );
      } else {
         res.jsonp(
            responGenerator.noPound('data tidak ditemukan')
         )
      }
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      )
   }
}
