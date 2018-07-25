var mongoose=require('mongoose')
var Schema=mongoose.Schema

var order=new Schema({
    rest_id:String,
    cust_id:String,
    item:[{
        itemname:[{type:String}],
        quantity:Number,
        categoryName:[{
            type:String,
        }],
        varinat:{type:String},
        datetime:{
            type:String
        },
        total:{
            type:Number
        }
 
    }],
    status:[{
        type:Number
    }],
    address:[{
      type:String,

    }]
})
module.exports=mongoose.model('orderdata',order)