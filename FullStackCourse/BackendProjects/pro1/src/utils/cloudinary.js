import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

class cloudinaryServiceClass{
    async upload(localFilePath){
        try{
            if(!localFilePath) return;
            const response=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"});
            console.log("file uploaded success!");
            return response;
        }
        catch(error){
            fs.unlinkSync(localFilePath); // remove file from local uploads folder
            console.log("file uploading err "+error);
        }
    }
}
const cloudinaryService=new cloudinaryServiceClass();
export default cloudinaryService;
