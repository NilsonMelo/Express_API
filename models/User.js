const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    Password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    followers: {
        type: Array,
    },
    following: {
        type: Array,
    }
})

UserSchema.pre("save", async function(next) {
    if (!this.isModified("Password")) return next()
    else {
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(this.Password, salt)
        this.Password = hashed;
    }
})

UserSchema.methods.MatchPasswords = async function (reqPassword) {
     return await bcrypt.compare(reqPassword, this.Password)
}

const User = new mongoose.model("User", UserSchema)

module.exports = User;