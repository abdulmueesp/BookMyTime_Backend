const express =require("express")
const router =express.Router()
const authenticationb=require("../Controller/ownercontroller/authenticationb")

router.post("/ownersignup",authenticationb.signupPOST)

module.exports=router