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

//restaurant adding the data
var restadd=require('./restaurant/restadd')
router.post('/restadd',restadd.restinsert)
//global adding of data
var addItem=require('./update')
router.post('/additem',addItem.additem)
//restaurant login and signup
var restsign=require('./restaurant/restsign')
router.post('/restsign',restsign.rsignup)
router.post('/restlogin',restsign.restlogin)
//getrest
var restdata=require('../routes/restaurant/getrest')
router.get('/getrest',restdata.restd)
//getitems for restaurnat showing the data of items and category
var rescat=require('../routes/restaurant/getcat')
router.post('/getcat',rescat.restdata)

var resitem=require('../routes/restaurant/getitems')
router.post('/getitems',resitem.showcat)
//customer login
var custlogin=require('./loginandsignup')
router.post('/signup',custlogin.signup)
router.post('/login',custlogin.login)
module.exports=router
