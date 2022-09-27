import "./userNameDiv.css"
import someContext from '../../../../context/context';
import {useContext} from 'react';

function UserNameDiv(props){

  const context = useContext(someContext);
  const {setUser} = context;

  function handelClick(){
    setUser(props.user)
    console.log(props.user.userName);
  }

  return (
    <div onClick = {handelClick} className = "usernamediv container-fluid">
      <img src = "persons/1.jpeg" alt = "profile pic"/>
      <span> {props.user.userName} </span>
    </div>
  )
}

export default UserNameDiv;
