const mongoose=require("mongoose")

const tutorSchema=mongoose.Schema({

    email:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    profile:{type:String,required:true},
    phone:{type:Number,required:true},
    highereducation:{type:String,required:true},
    location:{type:String,required:true},
    subjecttaught:{type:String,required:true},
    classtaught:{type:String,required:true},
    experience:{type:String,required:true},
    tutiontype:{type:String,required:true},
    fees:{type:String,required:true},
    about:{type:String,required:true},
    typeofuser: { type: String, default: "tutor" },

})

const TutorModel=mongoose.model("tutor",tutorSchema)

module.exports={
    TutorModel
}