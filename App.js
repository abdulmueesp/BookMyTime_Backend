const express=require("express")
const app=express();
const cors=require("cors")
const Dbconnection=require("./Config/database")
const port=4500;
Dbconnection().then(()=>{
    app.listen(port,()=>{
        console.log("server is starting");
    })
    }).catch((error)=>{
        console.error(error)
    });


//  routers 
const userRouter =require("./Router/userRouter")
const adminRouter =require("./Router/adminRouter")
const ownerRouter = require("./Router/ownerRouter")



const corsOptions={
    origin:"http://localhost:4000",
    maxAge:86400,
}


//   buffer format 
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors(corsOptions))
app.use("/",userRouter)
app.use("/admin",adminRouter)
app.use("/owner",ownerRouter)





