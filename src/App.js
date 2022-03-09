import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Barra from "./components/Barra";
import Servicios from "./components/NewServicios";
import Conocenos from "./components/Conocenos";
import Trabajos from "./components/Trabajos";
import Clientes from "./components/Clientes";
import Footer from "./components/Footer";
import Notfount from "./Pages/NotFountPage";
import PageNosotros from "./Pages/PageNosotros";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef();

  useEffect(() => {
    // traabajos
    gsap.from(".trabajo-container_trabajos", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      rotation: 10,
      scrollTrigger: {
        trigger: ".trabajo-container_trabajos ",
      },
      y: -100,
      x:100
    });


    // trabajos

    // conocenos
    gsap.from(".div-conocenos ", {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".div-conocenos ",
      },
      y: -100,
    });
    gsap.from(".conocenos-info ", {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".conocenos-info ",
      },
      x: 100,
    });
    

    // conocenos

    gsap.from(".nav-bar ", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".nav-bar ",
      },
      y: -100,
    });

    gsap.from(".menu ", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".menu ",
      },
      x: 100,
    });
    gsap.from(".slogan ", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".menu ",
      },
      x: 100,
    });
    gsap.from(".subSlogan ", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".subSlogan ",
      },
      x: -100,
    });

    gsap.from(".servicio-left", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".servicio-left",
      },
      x: -100,
    });
    gsap.from(".servicio-right", {
      opacity: 0,
      duration: 1,

      stagger: 0.5,
      scrollTrigger: {
        trigger: ".servicio-right",
      },
      x: 100,
    });
    gsap.to(".servicio-reves ", {
      opacity: 0,
      duration: 10,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".servicio-reves ",
      },
      y: -100,
    });
    gsap.from(".servicio-title", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".servicio1",
      },
      y: -100,
    });
    const titles = document.querySelectorAll(".titles-container");
    gsap.from(titles, {
      opacity: 0,
      duration: 3,
      x: 50,
    });
  }, []);
  console.log(ref.className);

  return (
    <div id="App" ref={ref}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfount />} />
          <Route
            path="/"
            element={
              <div>
                <Barra />
                <Servicios />
                <Conocenos />
                <Trabajos />
                <Clientes />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Nosotros"
            element={
              <div>
                <PageNosotros />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
