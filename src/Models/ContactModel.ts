import { timeStamp } from "console";
import mongoose from "mongoose";
import { Schema,Document } from "mongoose";
//interface for the contact details
export interface contactDetails extends Document{
    name:string;
    email:string;
    phone:string;
}
//contact schema
const contactSchema:Schema=new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type: String,
        required:true,
        unique:true
    }
}, { timestamps: true })

const Contact=mongoose.model<contactDetails>('Contact', contactSchema)
export default Contact