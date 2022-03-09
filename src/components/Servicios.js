import React,{useEffect,useRef}from "react";
import './servicios.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
function Servicios() {

  // const ref=useRef(null)
  // ;
  
  //   useEffect(()=>{
  //     gsap.from(".img-servicios",{
  //       opacity:0,
  //       duration:1,
  //       y:50,
  //       stagger:0.3,
  //       scrollTrigger:".container-servicios",
  //       x:50,
  //     })
  //     const titles=document.querySelectorAll('.titles-container')
  //     gsap.from(titles,{
  //       opacity:0,
  //       duration:3,
  //       x:50,
  //     })

  //   },[])
  //   useEffect(()=>{
  //     gsap.to("#prueba", {
  //       x: 100,
  //       duration: 2,
  //       ease: "bounce",
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: "#prueba"
  //       }
  //     });
  //   })
  
  return (

      <div className="servicios-div"  id="prueba">
        <div className="title-servicios titles-container">
          <p>Nuestros Servicios</p>
        </div>
        <div className="container-servicios " >
          <div alt="" className="img-servicios img-serv-one" >
            <div className="img-services-black reverce-service">
              <h4 className="text-img-services">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-two " >
            <div className="img-services-black ">
              <h4 className="text-img-services">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-three">
            <div className="img-services-black reverce-service">
              <h4 className="text-img-services ">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-four">
            <div className="img-services-black ">
              <h4 className="text-img-services ">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-five">
            <div className="img-services-black reverce-service ">
              <h4 className="text-img-services ">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-six">
            <div className="img-services-black">
              <h4 className="text-img-services">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-seven">
            <div className="img-services-black reverce-service">
              <h4 className="text-img-services">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div alt="" className="img-servicios img-serv-eight">
            <div className="img-services-black">
              <h4 className="text-img-services ">TERMOFUCTORES HDFPT</h4>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Servicios;
