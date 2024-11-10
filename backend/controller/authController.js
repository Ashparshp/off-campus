import { User } from "../models/User.js";
// import { oauth2Client } from "../utils/googleConfig.js";
import axios from "axios";
import { google } from "googleapis";
import jwt from "jsonwebtoken";


export const googleLogin  = async (req, res) => {
  try {
    const {code} = req.body;
   
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'postmessage'
    );
    const googleRes = await oauth2Client.getToken(code); 
    oauth2Client.setCredentials(googleRes.tokens);
   

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name, picture } = userRes.data;  
    let user = await User.findOne({ email });

    if (!user) {
        user = await User.create({
            username : name,
            email,
            profile_picture: picture,
        });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIMEOUT,
    });
    res.status(200).json({
        message: 'success',
        token,
        user,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
}