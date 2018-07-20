var mongoose=require('mongoose')
var Schema=mongoose.Schema

var resadd= new Schema({

   
    category:[{
    
            type:String,
            requied:true,
            unique:true
        }],
        item:[{
        
             type:String,
             required:true,
         }],
         price:[{
             type:Number,
             requied:true,
         }],
         image:[{
             type:String,
             required:true
         }],
         variant:[{
             type:String,
             required:true
         }]

    


    }]




})