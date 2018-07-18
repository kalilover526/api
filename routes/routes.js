var express=require('express')
var router=express.Router()
//var tokenVerify=require('./token')


var inserton=require('./insertcategory')
router.post('/insertcategory',inserton.insertcategory)

//item searching 
var findItem=require('./datashow')
router.post('/getdata',findItem.finditem)

var alldata=require('./datashow')
router.get('/alldata',alldata.findcategory)


var addItem=require('./update')
router.post('/additem',addItem.additem)

var reslogin=require('./loginandsignup')
router.post('/signup',reslogin.signup)
router.post('/login',reslogin.login)
module.exports=router
