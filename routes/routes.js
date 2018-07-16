var express=require('express')
var router=express.Router()
//var tokenVerify=require('./token')


var inserton=require('./insertandshow')
router.post('/insert',inserton.insert)
var findPerson=require('./datashow')
router.post('/getdata',findPerson)
var update=require('./update')
router.post('/update',update.update)

var login=require('./loginandsignup')
router.post('/signup',login.signup)
router.post('/login',login.loginn)
module.exports=router
