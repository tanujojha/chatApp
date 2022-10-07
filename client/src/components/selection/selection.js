import "./selection.css";
import {useNavigate} from "react-router-dom"

function Selection(){

  const navigate = useNavigate();
  
  return (
    <div className = "selectionContainer container-fluid">
      <div className = "headingContainer d-flex justify-content-center">
        <h1 className = "welcome"> Welcome Amigos </h1>
      </div>
      <div className = "btnContainer d-flex justify-content-center">
        <button onClick = {()=>{navigate("/register")}} type = "button" className = "btn btn-lg">Register</button>
        <button onClick = {()=>{navigate("/login")}} type = "button" className = "btn btn-lg">Login</button>
      </div>
    </div>
  )
}


export default Selection;
