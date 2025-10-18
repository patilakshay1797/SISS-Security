import { useInView } from "react-intersection-observer";
import "../assets/css/SecurityServicesList.scss";
import testImg from "../assets/images/about_us_home.webp";
import mallImg from "../assets/images/mall_security_services.webp";
import clgImg from "../assets/images/college_security_services.webp";
import bankImg from "../assets/images/bank_security_services.webp";
import comerImg from "../assets/images/commercial_security_services.webp";
import hospImg from "../assets/images/hospital_security_services.webp";
import socImg from "../assets/images/society_security_services.webp";
import offImg from "../assets/images/offices_security_services.webp";
import parkImg from "../assets/images/parking_security_services.webp";
import gateImg from "../assets/images/gateway_security_services.webp";
import corporateImg from "../assets/images/corporate1_security_services.webp";
import educationalImg from "../assets/images/educational_institute_security_services.webp";
import hotelsImg from "../assets/images/hotels_security_services.webp";
import manufacturingImg from "../assets/images/manufacturing_industries_security_services.webp";
import privateImg from "../assets/images/private_Property.webp";
import godownImg from "../assets/images/godown_store.webp";
import RestaurantImg from "../assets/images/RestaurantImg.webp";
import SecuritycumdriverImg from "../assets/images/Security_cum_driver.webp";
import { HashLink as Link } from "react-router-hash-link";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

const services = [
  {
    title: "Security Services for Shopping Mall",
    description:
      "Secure and enhance visitor experience in shopping malls with vigilant services.",
    image: mallImg,
  },
  {
    title: "Security Services for College",
    description:
      "Protect students, faculty, and infrastructure in educational institutions.",
    image: clgImg,
  },
  {
    title: "Security Services for Banks",
    description:
      "Ensure anti-theft and safe environments in financial institutions.",
    image: bankImg,
  },
  {
    title: "Security Services for Commercials",
    description:
      "Maintain a secure commercial atmosphere for your customers and staff.",
    image: comerImg,
  },
  {
    title: "Security Services for Hospitals",
    description:
      "Ensure safe and calm surroundings in healthcare environments.",
    image: hospImg,
  },
  //   {
  //     title: "Security Services for ",
  //     description: "Manage event security with trained and responsive personnel.",
  //     image: testImg,
  //   },
  {
    title: "Security Services for Housing Societies",
    description:
      "Provide peace of mind for residential communities and gated societies.",
    image: socImg,
  },
  {
    title: "Security Services for Offices",
    description:
      "Secure corporate offices with professional and disciplined guards.",
    image: offImg,
  },
  {
    title: "Security Services for Educational Institutes and Schools",
    description:
      "Ensure a safe and supportive learning environment for students and staff.",
    image: educationalImg,
  },
  {
    title: "Security Services for Manufacturing Companies and Factories",
    description:
      "Secure manufacturing facilities and prevent unauthorized access and loss.",
    image: manufacturingImg,
  },
  {
    title: "Security Services for Parking",
    description:
      "Monitor and secure parking areas to ensure safety of vehicles and personnel.",
    image: parkImg,
  },
  {
    title: "Security Services for Gateway",
    description:
      "Control access and monitor entry points with disciplined gateway security.",
    image: gateImg,
  },
  {
    title: "Security Services for Hotels and Guest House",
    description:
      "Ensure a safe and welcoming environment for hotel and guest house guests.",
    image: hotelsImg,
  },
  {
    title: "Security Services for Corporates sectors",
    description:
      "Provide professional security for corporate offices and business facilities.",
    image: corporateImg,
  },
  {
    title: "Security Services for Private Property",
    description:
      "Safeguard personal properties with reliable and trained security personnel.",
    image: privateImg,
  },
  {
    title: "Security Services for Godowns and Warehouses",
    description:
      "Protect warehouses and godowns from theft and unauthorized access.",
    image: godownImg,
  },
  {
    title: "Security Services for IT Companies",
    description:
      "Provide dedicated security for IT campuses and infrastructure.",
    image: offImg,
  },
  {
    title: "Security Services for Restaurants",
    description:
      "Maintain secure dining experiences for guests and staff in restaurants.",
    image: RestaurantImg,
  },
  // {
  //   title: "Bouncers Security Services",
  //   description:
  //     "Trained bouncers for crowd management and entry control at events and venues.",
  //   image: testImg,
  // },
  {
    title: "Security guard cum driver",
    description:
      "Multi-skilled guards for both security and transportation support.",
    image: SecuritycumdriverImg,
  },
  // {
  //   title: "Security Patrolling",
  //   description:
  //     "Regular patrols to deter threats and maintain safety across premises.",
  //   image: testImg,
  // },
  {
    title: "Unarmed Guards",
    description:
      "Professional, unarmed guards for observation, reporting, and access control.",
    image: corporateImg,
  },
  {
    title: "Security Gunman’s",
    description:
      "Licensed gunmen for high-risk premises and personal protection.",
    image: testImg,
  },
];

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { myFunction } = useContext(ProviderMethodContext);

  return (
    <div ref={ref} className={`service-card card ${inView ? "visible" : ""}`}>
      <img src={service.image} alt={service.title} />
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link
          to="/contactus#contactUsForm"
          className="cta"
          onClick={() => myFunction("contactus")}
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
};

const SecurityServicesList = () => {
  return (
    <section id="securityServicesList" className="security-services">
      <div id="securityServicesListHeading">Security Services</div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default SecurityServicesList;
