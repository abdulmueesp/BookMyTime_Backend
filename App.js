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



const corsOptions={
    origin:"http://localhost:5173/",
    maxAge:86400,
}


//   buffer format 
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors(corsOptions))
app.use("/",userRouter)






