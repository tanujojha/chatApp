import {useEffect} from 'react';
import $ from 'jquery';
import "./vidbg.css"
import Login from '.././login/login.js';

function Vidbg(){

  useEffect(()=>{
    $(function(){
      $(".video").trigger("play")
    })
  },[])

  return (
    <section className = "main">
      <div className = "videocontainer">
        <video className = "video" autoplay muted loop>
          <source src ="background-images/tree-vid.mp4" type = "video/mp4" />
        </video>
      </div>
    
    </section>
  )
}

export default Vidbg;
