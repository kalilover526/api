var dbcat=require('../../models/restaurant')
var mongoose=require('mongoose')
exports.restdata=(req,res)=>{
    dbcat.find({_id:req.body.id},(err,data)=>{
        if(err){
            res.josn({
                success:false,
                msg:"no data"
            })
        }else{
            res.json({
                success:true,
                msg:"restaurant category",
                category:data[0].category
            })
        }
    })
}