require("dotenv").config();
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('./middlewares/fetchUser');
const {uploadProfile} = require('./middlewares/multer');
const User = require('./models/user');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
// router.use(cookieParser())


//register
//uploadProfile().single is a multer method to upload single file
router.post("/register", uploadProfile().single("file"), async(req, res)=>{

  if(req.file){     //checking for a file in incomming req on /auth/register
    console.log("file uploaded successfully");
    return res.status(200).send("file uploaded succesfully")
  }

  try {

    const emailExixts = await User.findOne({email: req.body.email});    //checking for email in DB
    const userNameExists = await User.findOne({userName: req.body.userName}); //checking for userName in DB

    //if any of them is true throw error
    if(emailExixts || userNameExists){
      return res.status(400).send("Enter different email or user name")
    }
    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create user
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      profilePic: req.body.profilePic
    });

    //save user
    const user = await newUser.save();

    //generate payload for jwt
    const payload = {
      id: user.id,
      name: user.userName
    };

    //sign with jwt and respond
    const authToken = jwt.sign(payload, process.env.jwtSecret,{expiresIn: "1h"})

    //creating cookie with res.cookie and passing options
    //later pass maxAge too as option
    res.cookie("jwtToken", authToken, {sameSite: "lax", secure: true, httpOnly: true});
    console.log("Registered succesfully");
    return res.status(200).send({user, message: "registered succesfully"});

  } catch (e) {
    res.status(500).json(e)
    console.log(e);
  }

});


//login
router.post("/login", async (req, res)=>{

  try {

    //find user with email
    const user = await User.findOne({email: req.body.email});
    if(!user){
      return res.status(400).send("no such user exists")
    }

    //validate password with brypt
    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if(!validatePassword){
      return  res.status(400).send("wrong password");
    };

    //generate payload for jwt
    const payload = {
      id: user.id,
      name: user.userName
    };

    //sign with jwt and respond
    const authToken = jwt.sign(payload, process.env.jwtSecret );  //{expiresIn: "1h"}

    //creating cookie with res.cookie and passing options
    //later pass maxAge too as option
    res.cookie("jwtToken", authToken, {sameSite: "lax", secure: true, httpOnly: true});
    return res.status(200).json({user, message: "logged in successfully"})

  } catch (e) {
    res.status(500).json(e)
    console.log(e);
  }

});

//FOR TESTING PURPOSE

//get a user
router.get("/getuser", fetchUser, async (req,res)=>{

  try {

    //getting a user id from req.user sent from the fetchUser middleware
    const userId = req.user.id

    //finding user in DB from user id
    const user = await User.findById(userId).select({"password":0, "__v":0})
    console.log("user" + user);
    return res.json(user)
    // return res.json(user)

  } catch (e) {
    console.log(e);
    return res.status(400).json({catchError:e})
  }
});



module.exports = router;
