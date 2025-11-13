import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
const app = express();

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Some error occurred",error)
    });
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log("Failed to connect to database", error);
    process.exit(1);
});






// use it to understand better
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_Name}`)
//         console.log("Database is connected")
//         app.on("error",(error)=>{
//             console.log("Some error occurred",error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })

//     }catch(error){
//         console.log(error)
//     }
// })()