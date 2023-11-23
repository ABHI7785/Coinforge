const crptocoins = require("./Coinschema1")





const Buycoin=async (req,res)=>{
    const userid=req.params.id
     const Buycoins =await crptocoins.find({_id:userid})
     res.json(Buycoins)
 }

 module.exports={Buycoin}