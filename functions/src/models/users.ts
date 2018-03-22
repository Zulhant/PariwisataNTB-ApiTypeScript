const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   _id: {
      type: Object,
      required: [true, '_id is required']
   },
   userName: {
      type: String,
      required: [true, 'userName is required']
   },
   hashPassword: {
      type: String,
      required: [true, 'hashPassword is required']
   },
   role: {
      type: String,
      required: [true, 'role is required'],
      enum: ['admin', 'user']
   }
})

const userModel = mongoose.model('User', userSchema);
export default userModel;