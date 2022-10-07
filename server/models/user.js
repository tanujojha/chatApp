const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

  userName: {
    type: String,
    required: true,
    min: 3,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    min: 6,
    unique: true
  },

  profilePic:{
    type: String,
  }
  // date: {
  //       type: String,
  //       default: Date.now(),
  //   }


},

  {timestamps: true}
);



const User = mongoose.model("User", userSchema)

module.exports = User;

//or
// module.exports = mongoose.model("User", userSchema);
