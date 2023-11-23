
const bcrypt=require('bcrypt');
const user = require('./Userchema');


const Createuser=async(req,res)=>{
    const{Name,Email,Password}=req.body;
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const Userdetails=await user.create({
        Name,Email,Password:hashedpassword
    })

res.json(Userdetails)

}
module.exports=Createuser



