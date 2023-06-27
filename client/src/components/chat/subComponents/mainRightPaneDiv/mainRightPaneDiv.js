import "./mainRightPaneDiv.css"
import someContext from '../../../../context/context';
import {useContext} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';


function MainRightPaneDiv(){

  const context = useContext(someContext);
  const {clickedUser} = context;    



  return (
    <div className = "rightpane col" style = {{border: "2px solid yellow"}}>

        <div className = "buddy-functionDiv " style = {{border: "2px solid blue"}}>
          <div className = "buddydiv d-flex" style = {{border: "2px solid white"}}>
            <img className = "buddyimg" src = {process.env.REACT_APP_IMAGE_URL + clickedUser.profilePic} alt = "profile pic"/>
            <h5 className = "buddyname"> {clickedUser.userName}</h5>
          </div>
          <div className = "functiondiv d-flex" style = {{border: "2px solid green"}}>
            <AttachFileIcon/>
            <AttachFileIcon/>
          </div>
        </div>

        <div className = "messagediv" style = {{border: "2px solid white"}}>

          <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
            <p>Hello Tom</p>
          </div>
          <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
            <p>Hello Dick</p>
          </div>
          <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
            <p>What's up</p>
          </div>
          <div className = "textdiv container-fluid" style = {{border: "2px solid red"}}>
            <p>Coding</p>
          </div>

          <div className = "formdiv, continer" style = {{border: "2px solid green"}}>
            <form className= "form-group" style = {{border: "2px solid red"}}>
              <input className= "form-control" type = "text" name = "message" />
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>

    </div>
  )
}

export default MainRightPaneDiv;
