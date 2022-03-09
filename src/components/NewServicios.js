import React, { useRef, useState } from "react";
import "./newServicio.css";
const NewServicios = () => {
  const [div, newdiv] = useState(true);
  const refi = useRef();
  const createMarkup = () => {
    if (div === true) {
      return {
        __html: ` <div class=" color-text-service">
                    <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
                    <div class="icono">Ver Proyectos</div>
                  </div>`,
      };
    } else {
      return {
        __html: `<div onMouseOver={RegresarDiv} class="servicio-reves">
          <div class="contenido-revez">
              <p>
                Planificación y ejecución de proyectos con tubería HDPE y geomembrana...
              <p/>
             <div/>
           <div class="icono">
           Ver Proyectos
            <div/>
           <div>
           `,
      };
    }
  };
  return (
    <div className="servicios-div">
      <div className="grid-servicios">
        <div className="servicio servicio1 servicio-left">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio2 servicio-right">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio3 servicio-left">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio4 servicio-right">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio5 servicio-left">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio6 servicio-right">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio7 servicio-left">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>
        <div className="servicio servicio8 servicio-right">
          <div class=" color-text-service contenido-superior">
            <h4 class="servicio-title">MECANIZADO DE PIEZAS</h4>
            <div class="icono">Ver Proyectos</div>
          </div>
          <div class="contenido-revez">
            <p>
              Planificación y ejecución de proyectos con tubería HDPE y
              geomembrana...
            </p>
            <div class="icono icono-servicio-revez">Ver Proyectos</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewServicios;
