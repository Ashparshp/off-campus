import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default :  ""
  },
  profile_picture: {
    type: String,
    default: "",
  },
});

export const User = mongoose.model('User', UserSchema);