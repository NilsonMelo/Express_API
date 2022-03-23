const User = require("../models/User");
const bcrypt = require("bcrypt")
exports.createNewUser = async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const newUser = await User.create({
      Username,
      Password,
    });
    res.status(200).json({ success: true, newUser });
  } catch (error) {
    res.status(400).json({ success: true, error });
  }
};

exports.login = async (req, res) => {
    const { Username, Password} = req.body;
    if (!Username || !Password) {
      res.status(400).json({ success: false, error: "Invalid request, no password/username given"})
    } else {
      try {
        
        const user = await User.findOne({ Username }).select("+password")
          if (!user) {
             res.status(404).json({ success: false, error: "The username was not found!"})
          } else {
            const isMatch = await user.MatchPasswords(Password)
            if (!isMatch) {
              res.status(400).json({ success: false, error: "Invalid Details"})
            } else {
              res.status(200).json({ success: true, user })
            }
          }        
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })      
      }
    }
}


exports.followUser = async (req, res) => {
  const { follower, followerUsername, username } = req.body;
  if (!follower || !followerUsername || !username) {
    res.status(400).json({ success: false, error: "Send all details"})
  }
}