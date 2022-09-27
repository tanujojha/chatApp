import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useContext} from 'react';
import Vidbg from '../../components/vidbg/vidbg.js';
import Selection from "../../components/selection/selection.js"
import Register from "../../components/register/register.js"
import Login from "../../components/login/login.js"
import "./prelog.css"
import Chat from "../../components/chat/chat.js"
import someContext from '../../context/context';

function Prelog(){

const context = useContext(someContext);
const {isLogged} = context;

  return (
    <>
    <Vidbg/>
    <Routes>

      <Route path = "/" element = {<Selection/>}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "register" element = {<Register/>}/>
      <Route path = "chat" element = {<Chat/>}/>

    </Routes>
    </>
  )
}


export default Prelog;

// for dev {isLogged ?<Chat/> : <Login/>}
// line 18  <Vidbg/>
