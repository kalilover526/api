var dbins=require('../../models/resadd')
var mongoose=require('mongoose')
var cat;

exports.restinsert=(req,res)=>{
    
    if(!req.body.category.catname)
    {
        res.json({
            success:false,
            msg:"Please provide all the details"
        })
    }
    else
    {cat=JSON.parse(req.body.category)
        dbins.findOne({catname:req.body.category[0].catname},(err,inData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"somethig went wrong"
                })
            }else if(!inData||inData==null)
            {
                new dbins({
                    category:{
                        catname:req.body.catname,
                        item:[],
                        price:[],
                        image:[],
                        variant:[]
                    }
                }).save((err,saveData)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Please try after some time"
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"data inserted",
                            data:saveData
                        })
                    }
                })
            }else{
                res.json({
                    success:false,
                    msg:"item already inserted"
                })
            }
        })
    }
}   