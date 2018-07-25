var showdata=require('../../models/restaurant')
 


exports.show=(req ,res)=>{
    if(!req.body.pin){
        res.json({
            success:false,
            msg:"please give the pincode to search for"
        })
    }else{
        showdata.find({pincode:req.body.pin},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something wernt wrong"
                })
            }else{ cover=data.coverage
                for(let i=0;i<coverage.length;i++)
                {
                    if(cover[i].pincode==req.body.pin){
                    obj=cover[i];
                    flag=1;}

                 }
                 if(flag==1){
                     res.json({
                         success:true,
                         msg:"restaurnat by coverage",
                         data:obj
                     })
                 }else{
                     res.json({
                         success:false,
                         msg:"restaurant data not found",
                         data:cover
                     })
                 }}
        })

    }
}