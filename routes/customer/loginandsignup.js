var dbLogin = require('../../models/login');
const jwt=require("jsonwebtoken");
const randomstring = require("randomstring");
var nodemailer = require('nodemailer');
require('dotenv').config();
const tokenstring=randomstring.generate();

exports.signup= (req, res) => {
    if (!req.body.name || !req.body.email ||!req.body.phone|| !req.body.password) {
        res.json({
            success: false,
            msg: "enter all signup details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email}, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } 
             
            
            else if (!loginData || loginData == null) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                    Createdon: Date.now(),
                    updatedon:Date.now(),
                    token: tokenstring,
                    active: false
                }).save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg:"phone number is already registered"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registration done. Please login to continue." + process.env.Email
                        })

                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                   user: process.env.EMAIL,
                                   pass: process.env.PASS
                               }
                           });
                        
                           let mailOptions = {
                            from: '"MEALS ON WHEELS" <onwheelmeals@gmail.com>', // sender address
                            to: req.body.email, // list of receivers
                            subject: 'Please verify your email', // Subject line
                            text: 'You need to verify your email by clicking on this link', // plain text body
                            html: '<h1>please click on this email</h1> <br> <a href="http://localhost:5678/login/verify">link</a>  <br> and your token is <br> ' + tokenstring  // html body
                        };

                        transporter.sendMail(mailOptions, function (err, info) {
                            if(err)
                              console.log(err)
                            else
                              console.log(info);
                         });
                    












                    }
                })
             }
            
            
            else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }

            
        })


    }
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, login) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try after some time."
                })
            } else if (!login || login == null) {
                res.json({
                    success: false,
                    msg: "Please register first."
                })
            } else if (login.password != req.body.password) {
                res.json({
                    success: false,
                    msg: "Incorrect Password"
                })
             
            } else if(login.active == false) 
            {
                res.json({
                    success:false,
                    msg:"please"
                })
            }
            else {
                const tokenData = {
                    name: login.name,
                    email: login.email
                }
                jwt.sign({tokenData}, 'sparks2k18', (err, token) =>
               { res.json({
                    success: true,
                    token: token,
                    msg: "Login done" 
                });
            }
            );
                // var date=Date.now();
                // res.json({
                //     msg:date
                // })
            dbLogin.findOneAndUpdate({email:req.body.email},{$set: {updatedon:Date.now()}},(err,data)=>{
               
                if(err){
                    res.json({
                        msg:"yup"
                    })
                }
            })                
            }
        })
    }

}