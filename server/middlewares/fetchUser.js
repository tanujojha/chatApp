require("dotenv").config()
const jwt = require('jsonwebtoken');


async function fetchUser(req, res, next){
  const token = req.headers.authtoken;
  if(!token){
    return res.status(401).send("no token found")
  }
  try{

    const payload = await jwt.verify(token, process.env.jwtSecret)
    if(!payload){
      return res.status(401).send("payload did not match")
    }
    req.user = payload
    next();
  }catch(e){

    console.log(e);
    return res.status(401).send("please authenticate using valid token")

  }
};

module.exports = fetchUser;
