// const express = require("express")
import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"


dotenv.config()

const app = express()

const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
   connectDB
        console.log(`server listen at port ${PORT}`);
}); // Added missing closing parenthesis