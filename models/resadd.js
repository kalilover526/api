var mongoose=require('mongoose')
var Schema=mongoose.Schema

var resadd= new Schema({

   category:[{
       catname:{
           type:String,
           required:true,
           unique:true
       },
       item:[{
           type:String,

       }],
       price:[{
           type:Number,

       }],
       image:[{
           type:String
       }],
       varriant:[{
           type:String
       }]
    } ]


})  
module.exports=mongoose.model('restcat',resadd)