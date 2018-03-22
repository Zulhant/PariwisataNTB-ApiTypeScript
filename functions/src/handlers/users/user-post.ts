import * as express from 'express';
import userModel from '../../models/users';
import { Request } from 'express-serve-static-core';
import { Response } from 'express';
import responGenerator from '../../helpers/respon';

export const createUser = async (req: Request, res: Response) => {
   try {
      req.body._id = Math.round(Date.now())
      const createDocUser = await userModel.create(req.body);
      if (createDocUser) {
         res.jsonp(
            responGenerator.success('success')
         )
      }
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      )
   }
}