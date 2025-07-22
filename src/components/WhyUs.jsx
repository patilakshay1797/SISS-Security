import { Shield, Star, Group, Handshake } from "@mui/icons-material";
import "../assets/css/whyUs.scss";
import AnimateElement from "./AnimateElement";

const whyUsData = [
  {
    icon: <Shield fontSize="large" className="text-yellow-400" />,
    title: "Trusted & Experienced",
    description:
      "With over two decades of service, we ensure your safety with reliable personnel and proven strategies.",
  },
  {
    icon: <Star fontSize="large" className="text-yellow-400" />,
    title: "Certified Professionals",
    description:
      "Our team comprises licensed, trained, and uniformed security professionals to protect what matters.",
  },
  {
    icon: <Group fontSize="large" className="text-yellow-400" />,
    title: "24/7 Support",
    description:
      "Day or night, our support team is ready to respond promptly to any emergency or service request.",
  },
  {
    icon: <Handshake fontSize="large" className="text-yellow-400" />,
    title: "Client-First Approach",
    description:
      "We tailor security solutions for each client’s unique needs with dedicated account management.",
  },
];

const WhyUs = () => {
  return (
    <div className="whyUsContainer">
      <div className="whyUsContentWrapper">
        <h2 className="whyUsText">Why Choose SISS Security?</h2>
        <p className="whyUsDescription">
          Discover how Swamini Independent Security Services sets itself apart
          through dedication, professionalism, and exceptional service delivery.
        </p>

        <div className="whyUsGrid">
          {whyUsData.map((item, index) => (
            <AnimateElement
              animationClass={"transitionBtmToTop"}
              propThreshold={0.3}
              key={index}
            >
              <div key={index} className="iconTitleWrapper card">
                <div className="icon">{item.icon}</div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </AnimateElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
