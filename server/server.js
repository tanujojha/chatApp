const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./db');
const userRoute = require('./user');
const authRoute = require("./auth");


connectDB()

const app = express()
app.use(cors())
const server = http.createServer(app)



app.use("/auth", authRoute);
app.use("/user", userRoute);


server.listen("5000", ()=>{
  console.log("server started on 5000");
})

// app.listen("5000", ()=>{
//   console.log("server started");
// })
