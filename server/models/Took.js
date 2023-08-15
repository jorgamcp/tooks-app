import mongoose from "mongoose";


const tookSchema = new mongoose.Schema(
    {
        display_name:{
            type:String,
            required:true,
            trim:true
        },
        account_id:{
            type:String,
            required:true
        },
        content_took:{
            type:String,
            required:true
        },
        counterRetooks:{
            type:Number,
            required:true,
            default:0
        },
        counterLikes:{
            type:Number,
            required:true,
            default:0
        }

    });


    export default mongoose.model('tooks',tookSchema); // ES6 