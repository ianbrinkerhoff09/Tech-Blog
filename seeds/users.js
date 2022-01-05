const { User } = require("../models");

const userData = [
	{
		username: "ianbrinkerhoff09",
		email: "ian.brinkerhoff@gmail.com",
		password: "supersecretpass",
	},
];

const UserToSeed = () => User.bulkCreate(userData);

module.exports = UserToSeed;
