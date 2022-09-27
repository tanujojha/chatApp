import {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import "./login.css";
import someContext from "../../context/context"


const baseUrl = "http://localhost:5000";
const top = "Hello";

function Login(){

  const context = useContext(someContext);
  const {isLogged, setIsLogged} = context;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  async function handelChange(e){
    let name = e.target.name;
    let value = e.target.value
    await setCredentials({...credentials, [name]: value})
  };

  async function handelSubmit(e){
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, credentials)
    .then(async (res)=>{

        setIsLogged(true)
        navigate("/chat")

    })
    .catch((error)=>{
      // navigate("/login")         you can put it here but its as same as not putting it there
      alert("wrong credentials")
      console.log(error);
    })

  }


  return(

        <main className="form-signin">
            <form onSubmit = {handelSubmit}>
              <h1 className="h3 mb-3 fw-bold">{top}</h1>

              <div className="form-floating">
                <input onChange = {handelChange} name="email" type="email" className="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating ">
                <input onChange = {handelChange} name="password" type="password" className="form-control" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button className="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password</label>
              </div>

              <div className = "signinbtn d-flex justify-content-center">
                <button  value = "signinbtn" name="signinbtn" className="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>
              </div>
            </form>

              <div className="mt-3 mb-3 d-flex justify-content-center">
                  <a className="fpa" href="/forgotpassword">Forgot Password?</a>
              </div>
          </main>

  )
}

export default Login;
