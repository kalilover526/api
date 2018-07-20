var restsign=require('../../models/restaurant')
var mongoose=require('mongoose')

exports.rsingup=(req,res)=>{
    if(!req.body.name||!req.body.phone||!req.body.email||!req.body. rest_name||!req.body.password||!req.body.address){
        res.json({
            success:false,
            msg:"please enter all the details"
        })
    }else{
        restsign.findOne({email:req.body.email},{phone:req.body.phone},(err,signData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else if(!signData||signData==null){
                new restsign({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    phone:req.body.phone,
                    rest_name:req.body.rest_name,
                    address:{
                        city:req.body.city,
                        landmark:req.body.landmark,
                        pincode:req.body.pincode,
                        street:req.body.street,
                        lane:req.body.lane

                    }
                }).save(err,resData)=>{
                    if(err){

                        res.json({
                            success:false,
                            msg:"please try after sometime"
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"Registration done..Please login to continue"
                        })
                    }
                }
            }else{
                res.json({
                    success:false,
                    msg:"YOu r already Registered"
                })
            }
        })
    }
}