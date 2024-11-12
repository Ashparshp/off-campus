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



const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files based on environment
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

// ROUTES
app.use("/api/auth",authRoutes);
app.use("/keep_alive", (req, res) => {
  res.send("I am alive");
});

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
