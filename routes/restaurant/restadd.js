var resinsert=require('../../models/resadd')
var mongoose=require('mongoose')

exports.restinsert=(req,res)=>{
    if(!req.body.category.catname){
        res.json({
            success:false,
            msg:"please provide all the details"
        })
    }else{

        resinsert.findOne({catname:req.body.category.catname},(err,resData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong"
                })
            }else if(!resData||resData==null)
            {
                new resinsert({
                    
                        category:{
                          catname:req.body.catname,
                           item:{
                              itname:req.body.itname,
                               price:req.body.price,
                               image:req.body.image,
                               variant:req.body.variant
                           }
                        }   
                       
                })
            }
        })
    }
}