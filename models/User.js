const mongoose=require("mongoose")

const userShema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Mentor"],
        default:"Student",
        required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    // courses:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Course"
    // }],
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    active:{
        type:Boolean,
        default:true
    },
    // courseProgress:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     red:"CourseProgress",
    // }],
},{timestamps: true}); // Add timestamps for when the document is created and modified
module.exports=mongoose.model("User",userShema);
