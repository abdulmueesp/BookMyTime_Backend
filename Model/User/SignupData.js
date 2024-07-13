const mongoose =require("mongoose")

const signupdata =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    block:{
        type: Boolean,
        default: true
    }
})

const signupmodel = mongoose.model('userdata',signupdata)
module.exports=signupmodel