var dbshow=require('../../models/restaurant')
var mongoose=require('mongoose')
var restname=[]
var ids=[]

exports.restd=(req,res)=>{
if(!req.body.pin){
    res.json({
        success:false,
        msg:'Please provide a pincode for searching'
    })
}else{
    dbshow.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"No data"
            })
        }else{
        for(let key in data){
            restname.push(data[key].rest_name)
            ids.push(data[key]._id)
        }
            res.json({
                success:true,
                msg:"restaurantdata",
               name:restname,
            id:ids,
        })
        restname=[],ids=[]  
        }
    })}
}