const signupmodel=require("../../Model/User/SignupData")

module.exports={

    signupPOST:async(req,res)=>{
        try{
        console.log("backend");
            console.log(req.body);
            const newdata= new signupmodel(req.body)
            await newdata.save();
            console.log("finished");
        }catch(error){
           console.log(`signup error is ${error}`);
        }
    }

}