var push=require('../../models/restaurant')
var mongoose=require('mongoose')
var cat;
var cats,obj,flag=0;

exports.pushcat=(req,res)=>{cat=req.body.catname;
   if(!req.body.id)
   {
       res.json({
           success:false,
           msg:"Please enter all the details"
       })
   } else{
       push.findOne({_id:req.body.id},(err,resData)=>{
           if(err){
               res.json({
                   success:false,
                   msg:"something went wrong"
               })
           }else if(!resData){
               res.json({

                success:false,
                msg:"no restaurant found"
               })
           }else{
               cats=data.category
               for(let i=0;i<cats.length;i++){
                   if(cats[i].catname==req.body.catname)
                   {
                       obj=cats[i];
                       flag=1
                   }
               }
               
               temp={
                   catname:cat,
                   item:req.body.item,
                   price:req.body.price,
                   variant:req.body.variant,
                   image:req.body.image
               }
               push.findOneAndUpdate({_id:req.body.id},{$push:{category:temp},},(err,data)=>{
                   if(err){
                       res.json({
                           success:false,
                           msg:"data not inseted"
                       })
                   }else{
                       res.json({
                           success:true,
                           msg:"Data Inserted",
                           data:data
                       })
                   }
               })
           }
       })
   }
}