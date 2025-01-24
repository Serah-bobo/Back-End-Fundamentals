import express from "express"
import dotenv from "dotenv"
import { connect } from "http2"
const mongoose=require("mongoose")
const app=express()
const port=5000
const mongoURI=process.env.MONGO_URI

app.get("/", (req,res)=>{
  res.send("hello world")
})
app.listen(port, ()=>{
  console.log(`server is running at http://localhost:${port}`)
})

mongoose.connect()