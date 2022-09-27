const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/chatAppDB"

async function dbconnection(){
await mongoose.connect(uri, ()=>{
  console.log("connected to chatAppDB");
})};

module.exports = dbconnection;
