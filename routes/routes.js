var express=require('express')
var router=express.Router()


var inserton=require('./insertandshow')
router.post('/insert',inserton.insert)
var findPerson=require('./datashow')
router.post('/getdata',findPerson)
var update=require('./update')
router.post('/update',update.update)
module.exports=router
