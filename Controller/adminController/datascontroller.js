const usersignupdata=require("../../Model/User/SignupData")


module.exports={
      
    userlistGet:async(req,res)=>{
        console.log("userget");
       const userdata=await usersignupdata.find();
       res.status(200).json({userdata:userdata})
    },
    userslistDelete:async(req,res)=>{
        try{
           const {id}=req.params;
           await usersignupdata.findByIdAndDelete(id);
           res.status(200).json({ message: 'User deleted successfully' });
        }catch(error){
            console.log(`userdelete error is ${error}`);
        }
    }
        


}