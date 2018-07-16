var express=require('express')
var router=express.Router()
//var tokenVerify=require('./token')


var inserton=require('./insertandshow')
router.post('/insert',inserton.insert)
var findPerson=require('./datashow')
router.post('/getdata',findPerson)
var update=require('./update')
router.post('/update',update.update)

var reslogin=require('./loginandsignup')
router.post('/signup',reslogin.signup)
router.post('/login',reslogin.login)
module.exports=router
