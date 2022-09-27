import './chat.css';
import UserNameDiv from './subComponents/userNameDiv/userNameDiv';
import someContext from '../../context/context';
import {useContext, useEffect} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';


function Chat(){

  const context = useContext(someContext);
  const {getAllUsers, users, user} = context;

  useEffect(()=>{
    getAllUsers();

  }, [])

  return(
    <div className= "outer container-fluid " style = {{border: "2px solid white"}}>

      <div className = "toppanediv" style = {{border: "2px solid blue"}}>
        <img className = "applogo" src = "assets/arhub-logo.png" alt = "logo image"/>
        <img className = "userProfileImg" src = "persons/6.jpeg" alt = "user Profile Image"/>
      </div>

      <div className= "inner row" style = {{border: "2px solid red"}}>

        <div className = "leftpane col-2" style = {{border: "2px solid green"}}>
          {users.map((item)=>{return <UserNameDiv key = {user.id} user = {item}/>})}
        </div>

        <div className = "rightpane col" style = {{border: "2px solid yellow"}}>

            <div className = "buddy-functionDiv " style = {{border: "2px solid blue"}}>
              <div className = "buddydiv d-flex" style = {{border: "2px solid white"}}>
                <img className = "buddyimg" src = "persons/1.jpeg" alt = "profile pic"/>
                <h5 className = "buddyname"> {user.userName}</h5>
              </div>
              <div className = "functiondiv d-flex" style = {{border: "2px solid green"}}>
                <AttachFileIcon/>
                <AttachFileIcon/>
              </div>
            </div>

            <div className = "messagediv" style = {{border: "2px solid white"}}>

              <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
                <p> whats up man </p>
              </div>
              <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
                <p> fuck you  </p>
              </div>
              <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
                <p> what the hell </p>
              </div>
              <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
                <p> nothing fuck you  </p>
              </div>

              <div className = "formdiv, continer" style = {{border: "2px solid green"}}>
                <form className= "form-group" style = {{border: "2px solid red"}}>
                  <input className= "form-control" type = "text" name = "message" />
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>

            </div>

        </div>

      </div>

    </div>
  )

}

export default Chat;
