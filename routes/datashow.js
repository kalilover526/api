var dbinsert=require('../models/insert')
var mongoose=require('mongoose')
exports.finditem=(req ,res)=>{
    dbinsert.findOne({category:req.body.category},(err,data)=>
{
    if(err){
        res.json({
            success:false,
            msg:"not found"
        })
    }else{
        res.json({
            success:true,
            msg:"All data",
            data:data,
        
        })
    }
})
}
