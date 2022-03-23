const Post = require("../models/Post")

exports.createPost = async (req, res, next) => {
  const { Creator, Title, Overview } = req.body;
  try {
      const post = await Post.create({
          Creator,
          Overview,
          Title
      })
      res.status(200).json({ success: true, post })
  } catch (error) {
      res.status(400).json({ success: false, error })
  }
};
exports.getPosts = async (req, res, next) => {
    const allPosts = await Post.find()
    try {
        res.status(200).json({ success: true, allPosts })
    } catch (err) {
        res.status(500).json({ success: false, err })
    }
}

exports.getPostByCreator = async (req, res, next) => {
    const { creator } = req.body;

    const creatorPosts = await Post.find({ Creator: creator })
    try {
        res.status(200).json({ creatorPosts })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}