const { Post } = require("../models");

const postData = [
	{
		post_text:
			"I literally don't know what to put in here lol",
		user_id: 1,
	},
];

const PostToSeed = () => Post.bulkCreate(postData);

module.exports = PostToSeed;
