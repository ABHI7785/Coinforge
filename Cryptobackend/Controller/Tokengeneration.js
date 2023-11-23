const jwt=require('jsonwebtoken');
const user = require('./Userschema');



const Createuser=async (req,res)=>{
    const {Name,Email,Password}=req.body;
    const Userdata =await user.findOne({ Email,Password });
    
    if(Userdata) {
        res.json("SUCCESS");
    }
    else
    {
    const Userdetails=await user.create({
       Name,Email,Password
    })
    res.json({
        Id:Userdetails._id,
        Name:Userdetails.Name,
        Email:Userdetails.Email,
        Password:Userdetails.Password,
        Token:tokengenerate(Userdetails._id),
    });
}}
const tokengenerate=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'1d',
})
}

module.exports=Createuser