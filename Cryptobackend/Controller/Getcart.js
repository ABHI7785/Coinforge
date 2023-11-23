const cart = require("./CartSchema")

const getcart=async(req,res)=>{
    const userid=await cart.find()
    res.json(userid)
}


const Viewcart=async (req,res)=>{
    const userid=req.params.id
     const Viewcartt=await cart.find({_id:userid})
     res.json(Viewcartt)
 }


 const Deletecart=async (req,res)=>{
    const userid=req.params.id
     const Deletecartt=await cart.findByIdAndRemove({_id:userid})
     res.json("deleted")
 }


module.exports={getcart,Viewcart,Deletecart}
