var dblogin=require('../models/login')

var jwt=require('jsonwebtoken')

exports.signup=(req ,res)=>{
    if(!req.body.name||!req.body.email||!req.body.phone||!req.body.password){
    res.json({
        success:false,
        msg:"please enter all the details"
    })
    }else{

        dblogin.findOne({email:req.body.email},(err,signdata)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong.."
                })
            }else if(!signdata||signdata==null){

                new dblogin({
                    name:req.body.name,
                    email:req.body.email,
                    phone:req.body.phone,
                    password:req.body.password
                }).save((err,Savedata)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"please try after sometime"
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"Registration done.Please login to continue"
                        })
                    }
                })
            }else{
                res.json({
                    success:false,
                    msg:"You are already registered"
                })
            }
        })
    }
}


exports.loginn=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:"please enter all the details."
        })
    }else{
      dblogin.findOne({email:req.body.email},(err,login)=>{
          if(err){
              res.json({
                  success:false,
                  msg:"please try after sometime"
              })
          }else if(!login||login==null){
              res.json({
                  success:false,
                  msg:"please register first"
              })
          } else {
            res.json({
                success: false,
                msg: "You have already registered."
            })
        }


    }
}