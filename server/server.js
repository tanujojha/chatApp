const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./db');
const userRoute = require('./user');
const authRoute = require("./auth");
const path = require('path');
const cookieParser = require('cookie-parser');

//DB connection
connectDB()

//CORS option
const corsOptions = {
    origin: true, //included origin as true for same origin
    credentials: true, //included credentials as true for cookies
};

const app = express()       //use express

//middlewares
app.use(cors(corsOptions))  // use cors with options as param
app.use(cookieParser())     //use cookie parser

//initializing http to use app as server
const server = http.createServer(app);

//ROUTES and MIDDLEWARES
app.use("/auth", authRoute);
app.use("/chat", userRoute);
app.use('/images', express.static(path.join(__dirname, 'public')))



//LISTNING/STARTING SERVER
server.listen("5000", ()=>{
  console.log("server started on 5000");
})

// app.listen("5000", ()=>{
//   console.log("server started");
// })
