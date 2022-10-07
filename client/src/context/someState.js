import SomeContext from "./context";
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

//props is used here to access all the children components
const SomeState = (props) =>{

  const [clickedUser, setClickedUser] = useState({}); // stores user that is click on to chat
  const [users, setUsers] = useState([])    //stores all fetched users

  const navigate = useNavigate();

//GET CHAT
//getChat function sends a get request to /chat route
//if all ok it sets the Users to all fetched users
//if err it navigates to /login
  const getChat = async ()=>{

    //options for CORS to pass cookies
    const option = {
      withCredentials : true    //this is used to pass cookies with CORS support
    }

      await axios.get(`${process.env.REACT_APP_BASE_URL}/chat`, option)
      .then((res)=>{
        console.log(res);
        setUsers(res.data.users)      //setting all fetched users

      })
      .catch((error)=>{
        console.log(error);
        navigate('/login')
      })

  }


  return (
    <SomeContext.Provider value = {{getChat, clickedUser, setClickedUser, users}}>
    {props.children}
    </SomeContext.Provider>
  )
}

export default SomeState;
