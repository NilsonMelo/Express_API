const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Nilson:Nilson123@cluster0.fmvp3.mongodb.net/Posts?retryWrites=true&w=majority")
    console.log("MongoDB Connected")
}

module.exports = connectDB