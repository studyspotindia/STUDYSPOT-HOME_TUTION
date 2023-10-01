const jwt=require("jsonwebtoken")
const Student=require("../model/Student.model")
require("dotenv").config()

const StudentAuth = async (req,res,next)=>{

    try{
        const token=req.cookies.token;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        const rootUsers= await Student.findOne({_id:verifyToken._id ,});

        if(!rootUsers){ throw new Error("User Not Found")}
        req.token=token;
        req.rootUser=rootUsers;
        req.userID=rootUsers._id
        next()

    }catch(err){
        res.status(401).send("Unauthorized : No Torken Found");
        console.log(err)

    }

}