const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    Creator: {
        type: String,
        required: [true, "Please enter a creator"]
    },
    Overview: {
        type: String,
        required: [true, "Please enter an Overview"]
    },
    Title: {
        type: String,
        required: [true, "Please enter a title"]
    }
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post;