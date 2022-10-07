require("dotenv").config();
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('./middlewares/fetchUser');
const User = require('./models/user');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
// router.use(cookieParser())


//get route on /chat

router.get("/", fetchUser, async (req, res)=>{    //calls fetchUser and authenticates user
  // console.log(req.cookies);

  try{
    const users = await User.find();    //fetches all users from DB and sends all users in response
    if(!users){
      console.log("no users, some shit happened");
      return res.status(400).send("no users, some shit happened")
    }
    console.log("chat route hitting and all users fetched succesfully")
    res.status(200).send({users, message: "chat route hitting, users fetched succesfully"})
  }catch(e){
    console.log(e);
  }
})



module.exports = router;
