var mongoose=require('mongoose')
var Schema=mongoose.Schema



var login=new Schema({

    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    }
}) 

module.exports=mongoose.model('customer',login)