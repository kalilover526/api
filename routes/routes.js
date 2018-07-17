var express=require('express')
var router=express.Router()
//var tokenVerify=require('./token')


var inserton=require('./insertategory')
router.post('/insertcategory',inserton.insertcategory)
var finditem=require('./datashow')
router.post('/getdata',finditem)
var additem=require('./update')
router.post('/additem',additem.additem)

var reslogin=require('./loginandsignup')
router.post('/signup',reslogin.signup)
router.post('/login',reslogin.login)
module.exports=router
