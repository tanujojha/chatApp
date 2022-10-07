const multer = require('multer');


//uploadProfile is a function which handels the uploading of the profile pic of user
// multer.diskStorage has an object as a parameter which has 2 objects: destination, filename
//both objs have access to req, file and a callback cb


function uploadProfile(){       //function to upload file

//creating storage for multer
  const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, "public/profile")      // null is for errors, and we are defining a /public/profile folder on server to store profile image
    },
    filename: (req, file, cb) =>{
      const name = req.body.name.split("_")[1]    //getting the name from req.body.name which gives us a name which is Date.now()_mask.jpg (eg: 1982813921819_mask.jpg). So we plit it on "_" and grab the name part.
      cb(null, name);                             //setting error as null and setting filename/imagename as name
    }
  });

//filter for the multer to filter up the files and upload only images
  const filter = (req, file, cb)=>{
    const extn = file.mimetype.split("/")[1]    //from the file we get its extension as extn
    if(extn === "png" || extn === "jpg" || extn === "jpeg"){    //checking for extensions match
      cb(null, true)    //if all ok callback will have error as null and return true
    }else{
      cb(new Error("Not an image File!!!"), false)    //if err we generate new error and return false
    }
  }

  const upload = multer({storage: storage, fileFilter: filter});  //calling multer with the options
  return upload;    
}




module.exports = {uploadProfile};

// router.post(/upload)
