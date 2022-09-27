require("dotenv").config();
const router = require('express').Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('./middlewares/fetchUser');
const {uploadProfile, test, up} = require('./middlewares/multer');
const User = require('./models/user');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


//register
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "public/profile")
  },
  filename: (req, file, cb) =>{
    cb(null, req.body.name)
  }
});

const filter = (req, file, cb)=>{
  const extn = file.mimetype.split("/")[1];
  if(extn === "png" || extn === "jpg" || extn === "jpeg"){
    cb(null, true)
  }else{
    cb(new Error("Not a image File!!!"), false)
  }
}
const upload = multer({storage: storage, fileFilter: filter});

router.post("/upload", upload.single("file"), async(req, res)=>{
  console.log(req.file);
  try{
    return res.status(200).send("file uploaded succesfully")
  } catch(err){
    console.log(err);
  }

})

router.post("/register", async(req, res)=>{
  // console.log(up().filter);
  console.log(req.file);
  // console.log(test());
  try {

    const emailExixts = await User.findOne({email: req.body.email});
    const userNameExists = await User.findOne({userName: req.body.userName});
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
      password: hashedPassword
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
    return res.status(200).send({user, message: "registered succesfully", authToken: authToken});

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

    //validate password
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
    const authToken = jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1h"})
    return res.status(200).json({user, message: "logged in successfully", authToken: authToken})

  } catch (e) {
    res.status(500).json(e)
    console.log(e);
  }

});

//get a user
router.get("/getuser", fetchUser, async (req,res)=>{

  try {

    const userId = req.user.id
    // const user = await User.findById(userId).select("-password")
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
