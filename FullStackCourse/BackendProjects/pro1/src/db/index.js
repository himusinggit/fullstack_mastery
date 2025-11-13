import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_Name}`);
       console.log(`Database connected successfully ${connectionInstance.connection.host}`); 
    } catch (error) {
        console.log(`error:${error}`);
        // process.exit(1);
    }
} 

export default connectDB;