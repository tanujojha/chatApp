require("dotenv").config();
const router = require('express').Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('./middlewares/fetchUser');
const {uploadProfile} = require('./middlewares/multer');
const User = require('./models/user');


router.get("/chat", fetchUser, async (req, res)=>{
  console.log(req.headers.authtoken);
})

module.exports = router;
