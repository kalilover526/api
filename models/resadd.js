var mongoose=require('mongoose')
var Schema=mongoose.Schema

var resadd= new Schema({

   food:[{
    category:[{
       catname:{
            type:String,
            requied:true,
            unique:true
        },
        item:[{
        itname:{
             type:String,
             required:true,
         },
         price:{
             type:Number,
             requied:true,
         },
         image:{
             type:String,
             required:true
         },
         variant:{
             type:String,
             required:true
         }

        }]


    }]



   }]
})