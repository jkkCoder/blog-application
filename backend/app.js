const express = require("express")
const mongoose = require("mongoose")
const blogRouter = require("./routes/blogRoute")
const router = require("./routes/userRoute")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose.connect('mongodb+srv://admin:ZHEWAm682Ux2In7o@cluster0.uu0qj.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("connected to database and listening to localhost at port 5000"))
.catch((err)=>console.log(err))


//mongodb username admin
//mongdb password  ZHEWAm682Ux2In7o