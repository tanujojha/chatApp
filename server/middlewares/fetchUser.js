require("dotenv").config()
const jwt = require('jsonwebtoken');


// fetchUser is a middleware that handels req, res
//it can be like it has access to req, res
//we can use that to check for cookie in incoming req to access the protected the routes
//the cookie contains jwt token
//the jwt token is used to verify the user
//then we call the next function to exicute the next function in order
//note: if we dont use this middleware then we will have to write the code from * marked inline comment till next() function(excluding) in every protected route to check for user

async function fetchUser(req, res, next){
  const token = req.cookies.jwtToken;         //getting the token from the cookie in req of any api call
  if(!token){
    console.log("no token in req.cookies.jwtToken");
    return res.status(401).send("no token found")
  }
  try{

    const payload = await jwt.verify(token, process.env.jwtSecret)      //verifying the payload
    if(!payload){
      return res.status(401).send("payload did not match")
    }
    // req.user = payload         //this is for checking user on the "/getuser" route
    next();
  }catch(e){

    console.log(e);
    return res.status(401).send("please authenticate using valid token")

  }
};

module.exports = fetchUser;
