const trade = require("./Tradersschema");

const createtrade = async (req,res)=>{
   const  {name,place,occupation,age}=req.body;
   const  createprofile = await trade.create({name,place,occupation,age}) 
   res.json(createprofile)


     
}


const getprofile=async(req,res)=>{
    const userid=await trade.find()
    res.json(userid)
}

const DeleteTrade=async (req,res)=>{
    const userid=req.params.id
     const DeleteTrader=await trade.findByIdAndRemove({_id:userid})
     res.json("deleted")
 }
  
 const UpdateTrade=async (req,res)=>{

    const  {name,place,occupation,age}=req.body;
    const _id=req.params.id
     const UpdateTrader=await trade.findByIdAndUpdate(_id,{name,place,occupation,age})
     res.json(UpdateTrader)
 }

 const getsingleprofile=async(req,res)=>{
    const tradeid=req.params.id
    const userid=await trade.find({_id:tradeid})
    res.json(userid)
}







module.exports={createtrade,getprofile,UpdateTrade,DeleteTrade,getsingleprofile}