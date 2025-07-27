import { useInView } from "react-intersection-observer";
import "../assets/css/SecurityServicesList.scss";
import testImg from "../assets/images/about_us_home.png";
import { HashLink as Link } from "react-router-hash-link";

const services = [
  {
    title: "Security Services for Shopping Mall",
    description:
      "Secure and enhance visitor experience in shopping malls with vigilant services.",
    image: testImg,
  },
  {
    title: "Security Services for College",
    description:
      "Protect students, faculty, and infrastructure in educational institutions.",
    image: testImg,
  },
  {
    title: "Security Services for Banks",
    description:
      "Ensure anti-theft and safe environments in financial institutions.",
    image: testImg,
  },
  {
    title: "Security Services for Commercials",
    description:
      "Maintain a secure commercial atmosphere for your customers and staff.",
    image: testImg,
  },
  {
    title: "Security Services for Hospitals",
    description:
      "Ensure safe and calm surroundings in healthcare environments.",
    image: testImg,
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
    image: testImg,
  },
  {
    title: "Security Services for Offices",
    description:
      "Secure corporate offices with professional and disciplined guards.",
    image: testImg,
  },
];

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className={`service-card card ${inView ? "visible" : ""}`}>
      <img src={service.image} alt={service.title} />
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to="/contactus#contactUsForm" className="cta">
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
