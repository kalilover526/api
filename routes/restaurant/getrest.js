var dbshow=require('../../models/restaurant')
var mongoose=require('mongoose')
var restname=[]
var ids=[]
exports.restd=(req,res)=>{
    dbshow.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"No data"
            })
        }else{console.log(data.length);
        for(let key in data){
            restname.push(data[key].rest_name)
            ids.push(data[key]._id)
        }
            res.json({
                success:true,
                msg:"restaurantdata",
               name:restname,
            id:ids})
          }
    })
}