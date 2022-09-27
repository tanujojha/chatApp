import {useContext} from "react";
import someContext from "../../context/context";
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import Vidbg from '../../components/vidbg/vidbg.js';
import Chat from "../../components/chat/chat.js"


// let logged = false;

function Postlog(){

  const context = useContext(someContext);
  const {isLogged} = context;

  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route path = "/chat" element = {isLogged ? <Chat/> : navigate("/login")}/>
      </Routes>

    </>
  )




}

export default Postlog;
