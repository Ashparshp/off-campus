import express from 'express';
import { googleLogin } from '../controller/authController.js';
import passport from 'passport';
const Router = express.Router();

// Router.post('/google', googleLogin);  // This is the route that the frontend will hit to login with google OLD CODE

Router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Logged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

Router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});


Router.get("/google", passport.authenticate("google", {scope:
	[ 'email', 'profile' ]}
));

Router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);




Router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.APP_URL);
});




export default Router;