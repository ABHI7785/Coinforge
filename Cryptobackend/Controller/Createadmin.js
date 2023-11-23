const bcrypt=require('bcrypt');
const adminn = require('./Adminschema');



const Createadminn = async(req,res)=>{
    const{Email,Password}=req.body;
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const Admindetails=await adminn.create({
        Email,Password:hashedpassword
    })

res.json(Admindetails)

}
module.exports=Createadminn