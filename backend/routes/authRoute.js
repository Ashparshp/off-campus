import express from 'express';
import { googleLogin } from '../controller/authController.js';
const Router = express.Router();

Router.post('/google', googleLogin);

export default Router;