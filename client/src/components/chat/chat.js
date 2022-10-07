import './chat.css';
import UserNameDiv from './subComponents/userNameDiv/userNameDiv';
import someContext from '../../context/context';
import {useContext, useEffect} from 'react';
import MainRightPaneDiv from "./subComponents/mainRightPaneDiv/mainRightPaneDiv"
import OptionRightPaneDiv from "./subComponents/optionRightPaneDiv/optionRightPaneDiv"

function Chat(){

  const context = useContext(someContext);
  const {users, clickedUser, getChat} = context;


//we call getChat here so that the page renders only after checking for login auth through cookie
//we use useEffect to only call it once otherwise it keeps on calling(infinite)
  useEffect(()=>{
    getChat();  //calling getChat
  },[])


  return(
    <div className= "outer container-fluid " style = {{border: "2px solid white"}}>

      <div className = "toppanediv" style = {{border: "2px solid blue"}}>
        <img className = "applogo" src = "assets/arhub-logo.png" alt = "logo image"/>
        <img className = "userProfileImg" src = "persons/6.jpeg" alt = "user Profile Image"/>
      </div>

      <div className= "inner row" style = {{border: "2px solid red"}}>

        <div className = "leftpane col-2" style = {{border: "2px solid green"}}>
          {/*mapping each user from users*/}
          {users.map((item)=>{return <UserNameDiv key = {item._id} user = {item}/>})}
        </div>

        {/*checking for clicks on any user to chat
        at first it renders the optionRightPaneDiv but when any click is detected on any user in the left column
        then it sets the main right div*/}
        {clickedUser.status == true ? <MainRightPaneDiv/> : <OptionRightPaneDiv/>}

      </div>

    </div>
  )

}

export default Chat;
