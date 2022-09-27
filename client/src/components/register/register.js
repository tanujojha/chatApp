import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./register.css";
import axios from "axios";




function Register(){

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const [file, setFile] = useState(null);


  async function handelChange(e){

    if(e.target.files){
      setFile(e.target.files[0])
    }

    let name = e.target.name;
    let value = e.target.value;
    await setCredentials({...credentials, [name]: value})
    // console.log(credentials)
  }

  async function handelSubmit(e){
    e.preventDefault();

    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file)

      try {

        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, credentials)
        console.log(response)
        if(response){
          try{
            await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/upload`, data)
            .then((res)=>{
              console.log(res);
            });
          }catch(err){
            console.log(err);
          }

        }
        // return redirect("/chat")

      } catch (e) {
        console.log(e);
      }
    }


  }


  return(

        <main className="form-signin">
            <form onSubmit = {handelSubmit} enctype="multipart/form-data">
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
                <input onChange = {handelChange} name="profilepic" type="file" className="form-control" id = "floatingFile" accept="image/*"/>
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
