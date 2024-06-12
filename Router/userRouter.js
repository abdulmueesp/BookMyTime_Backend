const express =require("express")
const router= express.Router()
const authController =require("../Controller/userController/authentication")

router.post("/signup",authController.signupPOST)



module.exports=router