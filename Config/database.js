  const mongoose=require("mongoose")

  const Dbconnection=async()=>{
       try{
             await mongoose.connect('mongodb://localhost:27017/Booking')
             console.log("mongodb connected");
       }catch(error){
        console.log(`connection failed${error}`);
       }
  }

  module.exports=Dbconnection