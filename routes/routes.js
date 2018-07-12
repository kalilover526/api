var express=require('express')
var router=express.Router()


var inserton=require('./insertandshow')
router.post('/insert',inserton.insert)
var findPerson=require('./datashow')
router.get('/getdata',findPerson)

module.exports=router
