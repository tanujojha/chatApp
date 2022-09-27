const multer = require('multer');
const router = require('express').Router();

function uploadProfile(){
  const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, "public/profile")
    },
    filename: (req, file, cb) =>{
      cb(null, req.body.name)
    }
  });

  const filter = (req, file, cb)=>{
    const extn = req.file.mimetype.split("/")[1]
    if(extn === "png" || extn === "jpg" || extn === "jpeg"){
      cb(null, true)
    }else{
      cb(new Error("Not a image File!!!"), false)
    }
  }

  const upload = multer({storage: storage, fileFilter: filter});
  return upload;
}

function test(){
  var a = 30;
  var b = 20;
  var c = a + b;
  return c
}

function up(){
  const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, "public/profile")
    },
    filename: (req, file, cb) =>{
      cb(null, req.body.name)
    }
  });

  const filter = (req, file, cb)=>{
    const extn = req.file.mimetype.split("/")[1];
    if(extn === "png" || extn === "jpg" || extn === "jpeg"){
      cb(null, true)
    }else{
      cb(new Error("Not a image File!!!"), false)
    }
  }

  return {storage, filter}
}


module.exports = {uploadProfile, test, up};

// router.post(/upload)
