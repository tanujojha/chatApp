import Login from "../login/login.js"
import "./bgslideshow.css"
import {useEffect} from "react"
import $ from "jquery"
// import './App.css';





function BgSlideShow() {

  useEffect(()=>{
    $('#carousel').attr({
      "data-bs-interval": "6000",
      "data-bs-pause": "false"
    })
  },[])

  return (


    <div className="bgslideshow">

      <div id="carousel" className="carousel slide carousel-fade " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="background-images/arthur_poulin.jpg" className="d-block imgvh " alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="background-images/viktor_bystrov.jpg" className="d-block imgvh " alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="background-images/dalton_smith.jpg" className="d-block imgvh " alt="..."/>
          </div>
          <div className="carousel-item ">
            <img src="background-images/perfect.jpeg" className="d-block imgvh " alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="background-images/naini.jpg" className="d-block imgvh " alt="..."/>
          </div>
          <Login/>
        </div>
      </div>

    </div>


  );
}

export default BgSlideShow;

// <div id="carousel" className="carousel slide carousel-fade " data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="background-images/arthur_poulin.jpg" className="d-block imgvh w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="background-images/viktor_bystrov.jpg" className="d-block imgvh w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="background-images/dalton_smith.jpg" className="d-block imgvh w-100" alt="..."/>
//     </div>
//     <div className="carousel-item ">
//       <img src="background-images/perfect.jpeg" className="d-block imgvh w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="background-images/naini.jpg" className="d-block imgvh w-100" alt="..."/>
//     </div>
//   </div>
// </div>



// <Carousel fade = {100} interval={1000} pause = {false} indicators = {false} controls = {false}>
// <Carousel.Item>
//   <img
//     className="imgvh w-100"
//     src="background-images/arthur_poulin.jpg"
//     alt="First slide"
//   />
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="imgvh w-100"
//     src="background-images/dalton_smith.jpg"
//     alt="Second slide"
//   />
//
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="imgvh w-100"
//     src="background-images/viktor_bystrov.jpg"
//     alt="Third slide"
//   />
//
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="imgvh w-100 h-100"
//     src="background-images/perfect.jpeg"
//     alt="Fourth slide"
//   />
//
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="imgvh w-100"
//     src="background-images/naini.jpg"
//     alt="Fifth slide"
//   />
//
// </Carousel.Item>
// </Carousel>
