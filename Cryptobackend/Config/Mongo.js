const mongoose=require('mongoose')

const connnection=async()=>{
    try{

        const connect=await mongoose.connect("mongodb+srv://Abhi12345:Abhi8089@cluster0.yexsq.mongodb.net/?retryWrites=true&w=majority",
        {
        useNewUrlParser:true,
        useUnifiedTopology:true,

        })
        console.log("Database is running")
    }

    catch(err){
        console.log(`error:${err}`);
        process.exit();


    }
}
module.exports=connnection