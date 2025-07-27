const mongoose=require("mongoose");

const profileSchema=new mongoose.Schema({
    gender:{
        type:String,
    },
    dateOfBirth:{
        type:String
    },
    contactNumber:{
        type:Number,
        trim:true 
    },
    description:{
        type:String,
        trim:true
    },
    areaOfExpertise:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Technology"
    }],
})

module.exports=mongoose.model("Profile",profileSchema);