import * as express from 'express';
import { Request } from 'express-serve-static-core';
import { Response } from 'express';
import responGenerator from '../../helpers/respon';
import userModel from '../../models/users';
import { USER_ID } from '../../config/params';

export const getUsers = async (req: Request, res: Response) => {
   try {
      const usersData = await userModel.find({});
      if (usersData) {
         res.jsonp(
            responGenerator.success(usersData)
         )
      }
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      )
   }
}


export const getUser = async (req: Request, res: Response) => {
   const userId = req.params[USER_ID];
   try {
      const userData = await userModel.findOne({ _id: userId });
      if (userData) {
         res.jsonp(
            responGenerator.success(userData)
         )
      }
   } catch (e) {
      res.jsonp(
         responGenerator.badRequest(e)
      )
   }
}