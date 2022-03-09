import React from "react";
import "./conocenos.css";
import vector from "../img/Component15.png";

import ReactPlayer from "react-player";
const Conocenos = () => {
  return (
    <div className="div-conocenos ">
      <div className="titles-container  title-conocenos">
        {/* <p>Conocenos</p> */}
      </div>
      <div className="color-conocenos">
      <div className="conocenos-info">
        <div className="logo-conocenos">
          <img src={vector} alt="" />
        </div>
        <div className="vision-mision_conocenos">
          <div className="vision">
            <div className="fa-solid fa-paper-plane"></div>
            <div className="text-vision text-mi-vi">
              <h6 className="title-text_vision">Mision</h6>
              <p className="text-principal_vision text_principal__mi-vi">
                Brindar soluciones integrales de ingeniería, diseño, fabricación
                y montaje a nuestros clientes,realizando proyectos
                electromecanicos ,electricidad industrial,termufusion HDPE,bajo
                un enfoque de calidad
              </p>
            </div>
          </div>
          <div className="mision">
            <i className="fa-solid fa-star"></i>
            <div className="text-mision text-mi-vi">
              <h6 className="title-text_mision">Vision</h6>
              <p className="text-principal_mision text_principal__mi-vi">
                Brindar soluciones integrales de ingeniería, diseño, fabricación
                y montaje a nuestros clientes,realizando proyectos
                electromecanicos ,electricidad industrial,termufusion HDPE,bajo
                un enfoque de calidad
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="video-conocenos-flex" >
        <ReactPlayer className="video-conocenos "
          url={require('../video/video.mp4')}
          width="80%"
          height="100%"
          controls
          muted
          playing
        />
        
      </div>
    </div>
  );
};

export default Conocenos;
