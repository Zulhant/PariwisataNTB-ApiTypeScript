import * as express from 'express';
import * as post from '../handlers/wisata/wisata-pot';
import * as get from '../handlers/wisata/wisata-get';
import * as put from '../handlers/wisata/wisata-put';
import * as del from '../handlers/wisata/wisata-delete';
import { WISATA_ID, KATEGORY_WISATA } from '../config/params';

const RouterWisata = express.Router();

RouterWisata.route(`/:${KATEGORY_WISATA}`)
   .get(get.getAllWisata)
   .post(post.createWisata)

RouterWisata.route(`/:${KATEGORY_WISATA}/:${WISATA_ID}`)
   .get(get.getWisata)
   .put(put.updateWisata)
   .delete(del.deleteWisata)
export default RouterWisata;
