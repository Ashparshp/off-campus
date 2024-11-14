import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true,
    
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