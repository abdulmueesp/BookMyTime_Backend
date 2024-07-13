const nodemailer=require("nodemailer")
require('dotenv').config();

const transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.email_user,
        pass:process.env.password_user
      }
})

module.exports=transporter