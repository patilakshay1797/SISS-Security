import React, { useEffect, useRef } from "react";
import "../assets/css/HouseKeepingServicesList.scss";
import testImg from "../assets/images/about_us_home.webp";
import { HashLink as Link } from "react-router-hash-link";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";
import hosueKeepingMall from "../assets/images/Houskeeping_services_mall.webp";
import houseKeepBanks from "../assets/images/housekeeping_banks.jpg";
import houseKeepEducation from "../assets/images/colloege_housejpg.jpg";
import houseKeepCorporate from "../assets/images/corporate_housekeeping.jpg";
import houseKeepHospital from "../assets/images/hospital_hosuekeeping.jpg";
import houseKeepCorporate2 from "../assets/images/corporate_2_housekeep.jpg";

const services = [
  {
    title: "Housekeeping Services for Shopping Mall",
    description:
      "Ensure clean and welcoming environments in shopping malls with professional staff.",
    image: hosueKeepingMall,
  },
  {
    title:
      "Housekeeping Services for Schools, Colleges & Educational Institutes",
    description:
      "Maintain hygiene and safety in learning environments for students and faculty.",
    image: houseKeepEducation,
  },
  {
    title: "Housekeeping Services for Banks",
    description:
      "Deliver cleanliness and professionalism in financial institutions.",
    image: houseKeepBanks,
  },
  {
    title: "Housekeeping Services for Commercials",
    description:
      "Professional upkeep of commercial premises for customer satisfaction.",
    image: houseKeepCorporate,
  },
  {
    title: "Housekeeping Services for Hospitals",
    description: "Ensure sanitization and safety in healthcare environments.",
    image: houseKeepHospital,
  },
  {
    title: "Housekeeping Services for Corporate Sectors",
    description: "Offer organized and hygienic spaces for corporate offices.",
    image: houseKeepCorporate2,
  },
];

const HouseKeepingServicesList = () => {
  const observerRef = useRef([]);
  const { myFunction } = useContext(ProviderMethodContext);

  useEffect(() => {
    const options = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting) {
          card.classList.add("visible");
        }
      });
    }, options);

    observerRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observerRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="housekeepingServicesList" className="housekeeping-services">
      <div id="houseKeepingHeading">Housekeeping Services</div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card card"
            ref={(el) => (observerRef.current[index] = el)}
          >
            <img src={service.image} alt={service.title} />
            <div className="content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to="/contactus#contactUsForm"
                className="cta"
                onClick={() => myFunction("contactus")}
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseKeepingServicesList;
