const express=require("express")
const cors=require("cors")
const cookieParser = require('cookie-parser');
const { connection } = require("./config/db")
const { studentRoute } = require("./routes/Student.route")
const { tutorRoute } = require("./routes/Tutor.route")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin: 'https://studyspotindia.github.io', // Replace with your frontend URL
    credentials: true // Allow sending and receiving credentials (cookies, etc.)
  }));


app.get("/" ,async (req,res)=>{
    try{
        res.send("This is Our Homepage")
    }catch(err){
           res.send(err)
    }
})

app.use("/student",studentRoute)
app.use("/tutor" ,tutorRoute)


app.listen(process.env.PORT, async()=>{
    try{
       await connection
       console.log("sever is connected")
    }catch(err){
          console.log("error")
          console.log(err)
    }
    console.log(`Port is Running on ${process.env.PORT}`)
})