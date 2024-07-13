const express = require("express")
const router =express.Router();
const datascontroller =require("../Controller/adminController/datascontroller")

router.get("/userlists",datascontroller.userlistGet)
router.delete("/userlists/:id",datascontroller.userslistDelete)


module.exports=router