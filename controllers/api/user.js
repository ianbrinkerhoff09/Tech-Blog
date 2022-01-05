const router = require("express").Router();
const { User } = require("../../models");

// creates a new userand adds to db
router.post("/create", async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(userData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// logs in an existing user
router.post("/login", async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (!userData) {
			res.status(400).json({ message: "Incorrect Email and/or Password" });
			return;
		}
		const user = userData.get({ plain: true });
		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json({
				user: userData,
				message: "Login successful",
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// logs out any user that is logged in
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
