var mongoose=require('mongoose')
var Schema=mongoose.Schema

var insert=new Schema({

    category:{
        type:String,
        required:true,
        unique:true},
     item :[{
         type:String,
         unique:true,
         required:true
     }]
})
module.exports=mongoose.model('insertion',insert)