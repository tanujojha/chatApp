import "./userNameDiv.css"
import someContext from '../../../../context/context';
import {useContext} from 'react';

function UserNameDiv(props){

  const context = useContext(someContext);
  const {setClickedUser} = context;

  //setting picName by splitting it on "\"
  //we use \ for scape sequence
  // props.user.profilePic is equal to c:\fakepath\mask.jpg
  //after splitting picName is equal to mask.jpg
  const picName = props.user.profilePic.split("\\")[2]

  function handelClick(){
    // console.log(props.user.profilePic);
    setClickedUser({...props.user, profilePic: picName, status: true})

  }

  return (
    <div onClick = {handelClick} className = "usernamediv container-fluid">
      <img src = {process.env.REACT_APP_IMAGE_URL + picName} alt = "profile pic"/>
      <span> {props.user.userName} </span>
    </div>
  )
}

export default UserNameDiv;
