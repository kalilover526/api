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

},
address:[{
  city:{
      type:String,
      required:true
  },
  pincode:{
      type:Number,
      requied:true,
     
  },
  street:{  type:String,
    required:true
},
  lane:{
      type:String,
      required:true
  },
  landmark:{
      type:String,
      required:true
  },

}],

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

module.exports=mongoose.model('restaurant',restsign)