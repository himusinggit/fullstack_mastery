import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema=new Schema({
    userName:{
        type:String,
        required:[true || "error no userName"],
        unique:[true,"error userName must be unique"],
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true || "error no email"],
        unique:[true,"error email must be unique"],
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:[true || "error no fullName"],
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:[true || "error no password"],
    },
    avatar:{
        type:String, //cloudinary url
        required:true,
        default:""
    },
    coverImage:{
        type:String, //cloudinary url
        default:""
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    refreshToken:{
        type:String,
        default:""
    }
},{timestamps:true});
userSchema.pre('save',async function(next){
    if(!userSchema.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id:this._id,
        userName:this.userName,
        fullName:this.fullName,
        email:this.email
    }),process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_DURATION};
}
export const User=mongoose.model("User",userSchema);