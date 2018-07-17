var express=require('express')
var app=express()
var mongoose=require('mongoose')
var config=require('./config/config')
var routes=require('./routes/routes')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.port || config.port


mongoose.connect('mongodb://localhost/mow',(err,data)=>{
    if(err){
        console.error("Database not connected..",err);
    }
    else{
        console.log("Database connected");
    }
})

app.use('/user',routes)

app.listen(PORT, () => {
    console.log("Sevrer started",PORT)
})