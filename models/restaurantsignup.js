var mongoose=require('mongoose')
var Schema=mongoose.Schema

var restsign=new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        requied:true,
        unique:true
    },
    rest_name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
password:{
   type:String,
   required:true,

}
})

module.exports=mongoose.model('restsign',restsign)