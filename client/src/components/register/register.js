import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "./register.css";
import axios from "axios";
import Cookies from "js-cookie";


function Register(){

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const [file, setFile] = useState(null);     //stores file uploaded from file input

  const navigate = useNavigate();


  //we use single handelChange for all input
  //then we check for files
  //here we set credentials 2 times
  function handelChange(e){

    //checks for files in event target
    if(e.target.files){
      setFile(e.target.files[0])  //set file to the file selected
      //setting credentials with profilePic as key and value will be name of file to be seved in DB
      //the name of file will be Date.now() + _ + file name eg: 2938743298423_mask.jpg
      //but due to security it AUTOMATICALLY converts it to C:\fakepath\mask.jpg
      setCredentials({...credentials, profilePic: Date.now() + "_" + e.target.files[0].name})

      // console.log(e.target.files[0].name);

    }

    //setting actual credentials
    let name = e.target.name;
    let value = e.target.value;
    setCredentials({...credentials, [name]: value})


  }

  //here we post to /register 2 times
  //first we post for file so uploadProfile function in multer middleware can upload it
  //second we post for credentials upload in DB

  async function handelSubmit(e){
    e.preventDefault();
    // console.log(credentials);

    //checking for file
    if(file){
      const data = new FormData();  //creating new form data
      const fileName = Date.now() + "_" + file.name;  //defining a new file name

      data.append("name", fileName);  //appending filename in form data
      data.append("file", file)       //appending file in form data
      // console.log(credentials);

      //posting the file form data to /register
      try{
        await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data)
        .then((res)=>{
          console.log(res);
          // alert("coool")
        });
      }catch(err){
        console.log(err);
        alert("something happened")
      }
    }

    //posting the credentials to /register
    try{
      //options for CORS to pass cookies
      const option = {
        withCredentials: true
      }
      await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, credentials, option)
      .then((res)=>{
        console.log(res);
        navigate("/login")
      });
    }catch(err){
      console.log(err);
    }

  };


  return(

        <main className="form-signin">
            <form id = "regiform" onSubmit = {handelSubmit} enctype="multipart/form-data">
              <h1 className="h3 mb-3 fw-bold">Hello {credentials.userName} 😀</h1>

              <div className="form-floating">
                <input onChange = {handelChange}  name="userName" type="text" className="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">User Name</label>
              </div>

              <div className="form-floating">
                <input onChange = {handelChange}  name="email" type="email" className="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating mt-1">
                <input onChange = {handelChange} name="password" type="password" className="form-control" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button className="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-floating mt-1">
                <input onChange = {handelChange} name="profilePic" type="file" className="form-control" id = "floatingFile" accept="image/*"/>
              </div>

              <div className = "signinbtn d-flex justify-content-center">
                <button value = "signinbtn" name="signinbtn" className="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>
              </div>
            </form>

              <div className="mt-3 mb-3 d-flex justify-content-center">
                  <a className="gotologin" href="/login"> Go to Login</a>
              </div>
          </main>

  )
}

export default Register;
