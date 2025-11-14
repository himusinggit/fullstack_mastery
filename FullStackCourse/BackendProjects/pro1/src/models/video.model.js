import mongoose,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const videoSchema=new Schema({
    title:{
        type:String,
        required:[true || "error no title"],
        trim:true,
        index:true
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true,
    },
    despcription:{
        type:String,
        required:[true || "error no despcription"],
        trim:true,
    },
    owner:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    views:{
        type:Number,
        default:0
    },
    Likes:{
        type:Number,
        default:0
    },
    duration:{
        type:Number,
        default:0
    },
    isPublic:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

videoSchema.plugin(mongooseAggregatePaginate);
export const Video=mongoose.model("Video",videoSchema);