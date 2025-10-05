import { useEffect, useRef } from "react";
import "../assets/css/clientLogoSlider.scss";
import acoem from "../assets/images/clientLogos/acoem.webp";
import aptPack from "../assets/images/clientLogos/apt_packaging.webp";
import axis from "../assets/images/clientLogos/axis.webp";
import bgshirke from "../assets/images/clientLogos/BGShirke.webp";
import delux from "../assets/images/clientLogos/delux.webp";
import emco from "../assets/images/clientLogos/EMCO.avif";
import envea from "../assets/images/clientLogos/envea.webp";
import hitech from "../assets/images/clientLogos/Hi_Tech.webp";
import hindustan from "../assets/images/clientLogos/hindustan_unilever.webp";
import isc from "../assets/images/clientLogos/isc.webp";
import krinshindan from "../assets/images/clientLogos/Krishindan.webp";
import lamifabs from "../assets/images/clientLogos/lamifabs.webp";
import meadows from "../assets/images/clientLogos/meadows.gif";
import milan from "../assets/images/clientLogos/milan.avif";
import mset from "../assets/images/clientLogos/mset.webp";
import ncml from "../assets/images/clientLogos/ncml.webp";
import nslSugars from "../assets/images/clientLogos/NSL_sugars.webp";
import nslTextile from "../assets/images/clientLogos/nsl_textile.gif";
import orient from "../assets/images/clientLogos/orient.webp";
import randen from "../assets/images/clientLogos/randen.webp";
import renuka from "../assets/images/clientLogos/renuka.webp";
import sidhi from "../assets/images/clientLogos/sidhi.webp";
import som from "../assets/images/clientLogos/som.webp";
import starAgri from "../assets/images/clientLogos/starAgri.webp";
import supreme from "../assets/images/clientLogos/supreme.webp";
import ultratech from "../assets/images/clientLogos/ultratech_cement.webp";

const logos = [
  acoem,
  aptPack,
  axis,
  bgshirke,
  delux,
  emco,
  envea,
  hitech,
  hindustan,
  isc,
  krinshindan,
  lamifabs,
  meadows,
  milan,
  mset,
  ncml,
  nslSugars,
  nslTextile,
  orient,
  randen,
  renuka,
  sidhi,
  som,
  starAgri,
  supreme,
  ultratech,
  acoem,
  aptPack,
  axis,
  bgshirke,
  delux,
  emco,
  envea,
  hitech,
  hindustan,
  isc,
  krinshindan,
  lamifabs,
  meadows,
  milan,
  mset,
  ncml,
  nslSugars,
  nslTextile,
  orient,
  randen,
  renuka,
  sidhi,
  som,
  starAgri,
  supreme,
  ultratech,
  acoem,
  aptPack,
  axis,
  bgshirke,
  delux,
  emco,
  envea,
  hitech,
  hindustan,
  isc,
  krinshindan,
  lamifabs,
  meadows,
  milan,
  mset,
  ncml,
  nslSugars,
  nslTextile,
  orient,
  randen,
  renuka,
  sidhi,
  som,
  starAgri,
  supreme,
  ultratech,
];

const ClientLogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const animateSlider = () => {
      if (window.innerWidth >= 768) {
        animation = slider.animate(
          [
            { transform: "translateX(50%)" },
            { transform: "translateX(-400%)" },
          ],
          {
            duration: 50000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      } else {
        animation = slider.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-400%)" }],
          {
            duration: 400000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      }
    };

    animateSlider();
    window.addEventListener("resize", () => {
      animation?.cancel();
      animateSlider();
    });

    return () => {
      animation?.cancel();
      window.removeEventListener("resize", animateSlider);
    };
  }, []);

  return (
    <div className="client-logo-slider-container">
      <h2 className="client-slider-heading">Our Clients</h2>
      <div className="client-slider-wrapper">
        <div className="client-slider-track" ref={sliderRef}>
          {logos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
          {/* duplicate logos for seamless loop */}
          {/* {logos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
