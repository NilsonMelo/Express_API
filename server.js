const express = require("express") 
const app = express()
const path = require("path")


const connectDB = require("./Database/db")
const cors = require("cors")
app.use(express.json()) 
app.use(cors())

const PORT = 3000


// api 

app.use("/api", require("./routes/route"))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    connectDB()
})