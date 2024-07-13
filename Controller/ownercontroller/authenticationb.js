 const transporter=require("../../Middleware/nodemailer")

module.exports={
    signupPOST:async(req,res)=>{
        console.log("business post");
        console.log(req.body);
        
        // node mailer 
        let mailOptions = {
            from: 'bookmytime.com@gmail.com',
            to: req.body.email, // The email to which you want to send
            subject: 'Signup Successful',
            text: `Hello ${req.body.name},\n\nThank you for signing up!\n\nYour details:\nName: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\n\nBest regards,\nYour Company`
        };
         transporter.sendMail(mailOptions,(error)=>{
            if (error) {
                console.log(error);
            } else {
                console.log("Signup successful and email sent");
            }
         })

         
    }
}