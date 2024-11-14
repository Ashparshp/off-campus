import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoute.js";
import axios from "axios";
import path from "path";
import { fileURLToPath } from 'url';
import passport from "passport";
import cookieSession from "cookie-session";
import OAuth2Strategy from "passport-google-oauth20";
// import "./utils/passport.js";
import session from "express-session";
import { User } from "./models/User.js";


const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin:process.env.APP_URL,
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "script-src * 'unsafe-inline' 'unsafe-eval';"
    );
    next();
});




const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ROUTES


app.use(session({
  secret:process.env.JWT_SECRET,
  resave:false,
  saveUninitialized:true
}))




app.use(passport.initialize());
app.use(passport.session());  

passport.use(
  new OAuth2Strategy({
      clientID:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:"/auth/google/callback",
      scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          let user = await User.findOne({googleId:profile.id});

          if(!user){
              user = new User({
                  googleId:profile.id,
                  username:profile.displayName,
                  email:profile.emails[0].value,
                  profile_picture:profile.photos[0].value
              });

              await user.save();
          }

          return done(null,user)
      } catch (error) {
          return done(error,null)
      }
  }
  )
)

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:`${process.env.APP_URL}/`,
    failureRedirect:`${process.env.APP_URL}/auth/google`
}))

app.get("/login/success",async(req,res)=>{
    
    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
  req.logout(function(err){
      if(err){return next(err)}
      res.redirect(process.env.APP_URL);
  })
})

app.get("/keep_alive", (req, res) => {
  res.json({test  :"I am alive"});
});
// app.use("/auth",authRoutes);




if (process.env.NODE_MODE === "production") {
  // Serve static files from the React app in production
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
} else {
  // Serve a message indicating the API is running in development
  app.get("/", (req, res) => {
    res.send("API is running in development mode.");
  });
}


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(PORT, () => {
      console.log(`Server is running at Port: ${PORT}`);


      const selfPingUrl = `http://localhost:${PORT}/keep_alive`;
      setInterval(async () => {
        try {
          await axios.get(selfPingUrl);
          console.log(`Self-ping successful at ${new Date().toISOString()}`);
        } catch (error) {
          console.error(`Self-ping failed: ${error.message}`);
        }
      }, 5 * 60 *  1000);
    });
    
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
