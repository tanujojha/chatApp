import SomeContext from "./context";
import {useState} from "react";
import axios from "axios"

const SomeState = (props) =>{
  const [isLogged, setIsLogged] = useState(false);

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({})

  const getAllUsers = async ()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}/user/getallusers`)
    .then((res)=>{
      setUsers(res.data)
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  // const get


  return (
    <SomeContext.Provider value = {{isLogged, setIsLogged, getAllUsers, users, user, setUser}}>
    {props.children}
    </SomeContext.Provider>
  )
}

export default SomeState;
