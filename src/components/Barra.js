import React, { useEffect, useState, useRef } from "react";
import "./Barra.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-version2.png";
function Barra() {
  const [isContainerActive, setIsContainerActive] = useState("");

  const divRef = useRef();

  useEffect(() => {
    const scrolll = () => {
      const scorlldiv = divRef.current;
      const { y } = scorlldiv.getBoundingClientRect();
      console.log(y);
      const isContainerActive = y <= 0 ? "container" : "";
      setIsContainerActive(isContainerActive);
    };
    window.addEventListener("scroll", scrolll);
    return () => {
      window.removeEventListener("scroll", scrolll);
    };
  });

  return (
    <div className="header">
      <nav ref={divRef} className={`nav-bar ${isContainerActive}`} id="nav">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Prometsur S&Y S.A.C</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/" className="link-barra">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Nosotros" className="link-barra">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/Servicios" className="link-barra">
              servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/Clientes" className="link-barra">
              clientes
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className="link-barra">
              contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className="slogan"> PARTE DEL DESARROLLO INTEGRAL DE TU EMPRESA</h1>
        <h2 className="subSlogan">
         Ingieneria y mantenimeinto Electro Industrial
        </h2>
      </div>
      <i class="fa-brands fa-facebook-messenger"></i>
      <i class="fa-brands fa-whatsapp"></i>
    </div>
  );
}

export default Barra;
