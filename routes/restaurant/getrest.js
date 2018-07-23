var dbshow=require('../../models/restaurant')
var mongoose=require('mongoose')
var x;
exports.restd=(req,res)=>{
    dbshow.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"No data"
            })
        }else{
            res.json({
                success:true,
                msg:"restaurantdata",
                id: data[0]._id,
                rest_name:data[0].rest_name,
                address:data[0].address
            })
        }
    })
}