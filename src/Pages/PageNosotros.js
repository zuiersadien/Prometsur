import React from 'react'
import { NavLink } from 'react-router-dom'
import "./PageNosotros.css"
const PageNosotros = () => {
  return (
    <div>


<nav className="nav-bar" id="nav">
        <div className="logo">
          <img src="" alt="" />
          <p>Prometsur S&Y S.A.C</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/" className="link-barra">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Nosotros"  className="link-barra">Nosotros</NavLink>
          </li>
          <li>
            <NavLink  to="/Servicios" className="link-barra">servicios</NavLink>
          </li>
          <li>
            <NavLink to="/Clientes"  className="link-barra">clientes</NavLink>
          </li>
          <li>
            <NavLink  to="/Contacto" className="link-barra">contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageNosotros