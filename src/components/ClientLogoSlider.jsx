import React, { useEffect, useRef } from "react";
import "../assets/css/clientLogoSlider.scss";
import clientLogo1 from "../assets/images/Upscaled_LOGO.png";

const logos = [clientLogo1, clientLogo1, clientLogo1, clientLogo1];

const ClientLogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const animateSlider = () => {
      if (window.innerWidth >= 768) {
        animation = slider.animate(
          [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
          {
            duration: 10000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      } else {
        animation = slider.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-50%)" }],
          {
            duration: 10000,
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
          {logos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
