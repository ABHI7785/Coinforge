const cart = require("./CartSchema");



const Createcart = async(req,res)=>{
    const{name1,symbol1,current_price1,quantity,total,mail}=req.body;
    
    const cartdetails=await cart.create({
        name1,symbol1,current_price1,quantity,total,mail
    })

    res.json(cartdetails)
}
module.exports=Createcart