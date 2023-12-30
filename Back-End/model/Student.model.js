const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    gender:{type:String,required:true},
    profile:{type:String,required:true},
    phone:{type:Number,required:true},
    classname:{type:String,required:true},
    location:{type:String,required:true},
    subject:{type:String,required:true},
    tutiontype:{type:String,required:true},
    fees:{type:String,required:true},
    typeofuser: { type: String, default: "student" },
})

const StudentModel=mongoose.model("student",studentSchema)

module.exports={
    StudentModel
}