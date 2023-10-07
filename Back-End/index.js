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

const allowedOrigins = [
    'https://studyspotindia.github.io',
    'https://studyspotindia.com', // Add additional origins as needed
    'https://study-spot.vercel.app',
    "http://localhost:3000"
  ];
  
  const corsOptions = {
    origin: allowedOrigins,
    credentials: true
  };

app.use(cors(corsOptions));


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