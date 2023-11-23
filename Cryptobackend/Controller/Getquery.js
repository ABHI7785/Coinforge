
const query = require("./Queryschema")



const getquery=async(req,res)=>{
    const userid=await query.find()
    res.json(userid)
}

const Viewquery=async (req,res)=>{
    const userid=req.params.id
     const Viewquery1=await query.find({_id:userid})
     res.json(Viewquery1)
 }


 const Deletequery=async (req,res)=>{
    const userid=req.params.id
     const Deletequery1=await query.findByIdAndRemove({_id:userid})
     res.json("deleted")
 }



 



module.exports={getquery,Viewquery,Deletequery}