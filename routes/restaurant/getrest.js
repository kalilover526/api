var dbshow=require('../../models/restaurant')
var mongoose=require('mongoose')
var restname=[]
var ids=[]
var phones=[]
var add=[]
var web=[]
var systime

var restTime

exports.restd=(req,res)=>{

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
            phones.push(data[key].phone)
            add.push(data[key].address)
            web.push(data[key].website)
            systime=Date().slice(16,21).split(":")
            restTime=data[key].timming
            


        }
            res.json({
                success:true,
                msg:"restaurantdata",
               name:restname,
            id:ids,
            phone:phones,
            address:add,
            websites:web,
            systim:restTime
       
            

        })
        restname=[],ids=[]  ,phones=[],add=[],web=[]
        }
    })
}