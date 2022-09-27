import "./selection.css";


function Selection(){

  return (
    <div className = "selectionContainer container-fluid">
      <div className = "headingContainer d-flex justify-content-center">
        <h1 className = "welcome"> Welcome Amigos </h1>
      </div>
      <div className = "btnContainer d-flex justify-content-center">
        <a href = "/register"><button type = "button" className = "btn btn-lg">Register</button></a>
        <a href = "/login"><button type = "button" className = "btn btn-lg">Login</button></a>
      </div>
    </div>
  )
}


export default Selection;
