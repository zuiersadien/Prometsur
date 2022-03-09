import React from "react";
import "./Footer.css";
import logo from "../img/logo-version2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-secciones">
        <h6>Nuestra empresa</h6>
        <div className="miniminibarra">
          <div >
            <p>Inicio</p>
            <p>Nosotros</p>
          </div>
          <div>
            <p>Clientes</p>
            <p>Nuestros Proyectos</p>
            <p>Contactos</p>
          </div>
        </div>
      </div>
      <div className="footer-contactos">
        <h6>Contactenos</h6>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
