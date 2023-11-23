const crptocoins = require("./Coinschema1")


const getitems=async(req,res)=>{
    const userid=await crptocoins.find()
    res.json(userid)
}
module.exports=getitems