import * as express from 'express';
import * as get from '../handlers/users/user-get';
import * as post from '../handlers/users/user-post';
import { USER_ID } from '../config/params';

const RouterUser = express.Router();

RouterUser.route(`/`)
   .get(get.getUsers)
   .post(post.createUser);

RouterUser.route(`/:${USER_ID}`)
   .get(get.getUser);

export default RouterUser;