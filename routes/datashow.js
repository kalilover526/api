var dbinsert=require('../models/insert')
var mongoose=require('mongoose')

var finditem=(req ,res)=>{
    dbinsert.find({},(err,data)=>
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
module.exports=finditem