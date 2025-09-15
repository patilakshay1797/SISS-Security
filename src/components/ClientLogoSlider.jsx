import { useEffect, useRef } from "react";
import "../assets/css/clientLogoSlider.scss";
import acoem from "../assets/images/clientLogos/acoem.png";
import aptPack from "../assets/images/clientLogos/apt_packaging.png";
import axis from "../assets/images/clientLogos/axis.jpg";
import bgshirke from "../assets/images/clientLogos/BGShirke.png";
import delux from "../assets/images/clientLogos/delux.jpg";
import emco from "../assets/images/clientLogos/EMCO.avif";
import envea from "../assets/images/clientLogos/envea.png";
import hitech from "../assets/images/clientLogos/Hi_Tech.jpg";
import hindustan from "../assets/images/clientLogos/hindustan_unilever.webp";
import isc from "../assets/images/clientLogos/isc.jpg";
import krinshindan from "../assets/images/clientLogos/Krishindan.jpg";
import lamifabs from "../assets/images/clientLogos/lamifabs.png";
import meadows from "../assets/images/clientLogos/meadows.gif";
import milan from "../assets/images/clientLogos/milan.avif";
import mset from "../assets/images/clientLogos/mset.png";
import ncml from "../assets/images/clientLogos/ncml.jpg";
import nslSugars from "../assets/images/clientLogos/NSL_sugars.jpg";
import nslTextile from "../assets/images/clientLogos/nsl_textile.gif";
import orient from "../assets/images/clientLogos/orient.png";
import randen from "../assets/images/clientLogos/randen.webp";
import renuka from "../assets/images/clientLogos/renuka.png";
import sidhi from "../assets/images/clientLogos/sidhi.jpg";
import som from "../assets/images/clientLogos/som.jpg";
import starAgri from "../assets/images/clientLogos/starAgri.jpg";
import supreme from "../assets/images/clientLogos/supreme.png";
import ultratech from "../assets/images/clientLogos/ultratech_cement.png";

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
