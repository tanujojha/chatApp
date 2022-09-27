require("dotenv").config();
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('./middlewares/fetchUser');
const User = require('./models/user');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/getallusers", async (req, res)=>{
  try {

    const users = await User.find();
    if(!users){
      return res.status(400).send("some shit happened")
    }
    console.log("all users fetched successfully");
    return res.status(200).json(users)

  } catch (e) {
    return res.status(400).send(e)
    console.log(e);
  }
})


module.exports = router;


// line 12 router.get("/getallusers", fetchUser, async (req, res)=>{
// line 15 const users = await User.find({_id:{$ne:req.user.id}})
