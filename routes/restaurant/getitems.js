var resdata=require('../../models/restaurant')

exports.showcat=(req,res)=>{
    if(!req.body.id){
        res.json({
           success:false,
           msg:"Please give the id of restaurant" 
        })
    }else{
        resdata.findOne({_id:req.body.id},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong"
                })
            }else if(!data){
               res.json({
                   success:false,
                   msg:"restaurant data not found"
               })
            }else{
                res.json({
                    success:false,
                    msg:"restaurant data using id",
                    data:data.category
                })
            }
        })
    }
}