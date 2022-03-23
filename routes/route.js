const express = require("express") 
const router = express.Router()

const { createPost, getPosts, getPostByCreator } = require("../controllers/postController")
const { createNewUser, login } = require("../controllers/userController")

// User API

router.route("/user/register").post(createNewUser)
router.route("/user/login").post(login)
// Post API

router.route("/Post/createpost").post(createPost)
router.route("/Post/getposts").get(getPosts)
router.route("/Post/getpostbycreator").get(getPostByCreator)

module.exports = router