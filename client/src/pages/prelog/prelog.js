import {BrowserRouter,Routes,Route, Redirect} from "react-router-dom";
import Vidbg from '../../components/vidbg/vidbg.js';
import Selection from "../../components/selection/selection.js"
import Register from "../../components/register/register.js"
import Login from "../../components/login/login.js"
import "./prelog.css"
import Chat from "../../components/chat/chat.js"


function Prelog(){



  return (
    <>
    <Vidbg/>
    <Routes>
      <Route exact path = "/" element = {<Selection/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/chat" element = {<Chat/>}/>

    </Routes>
    </>
  )
}


export default Prelog;

// line 24 {isLogged ?<Chat/> : <Login/>}
// line 18  <Vidbg/>
