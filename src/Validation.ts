import { Schema } from "mongoose";


export const validateContact =new Schema ({
  name:{
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  }
})
  