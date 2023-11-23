const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken');
const adminn = require("./Adminschema");







const AdminSignUp=async (req,res)=>{
    const {Email,Password}=req.body;
    const Userdata =await adminn.findOne({Email});
    
    if(Userdata && (await bcrypt.compare(Password,Userdata.Password)))
    {

        res.json("User already Exists");
    }
    else
    {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(Password,salt);

    const Userdetails=await adminn.create({
       Email,Password:hashedpassword
    })
    res.json({
        Id:Userdetails._id,
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

module.exports=AdminSignUp