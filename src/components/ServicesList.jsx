import { HashLink as Link } from "react-router-hash-link";
import "../assets/css/servicesList.scss";
// import securityService from "../assets/images/istockphoto-1227467445-612x612.jpg";
import securityService from "../assets/images/servicesHomeImg.jpeg";
import houseKeeping from "../assets/images/houseKeeping.webp";
import AnimateElement from "./AnimateElement";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

const ServicesList = () => {
  const { myFunction } = useContext(ProviderMethodContext);

  return (
    <div className="homeServices">
      <AnimateElement animationClass={"transitionBtmToTop"}>
        <div className="ourServicesHeading">
          <h1>Our Services</h1>
          <h3>We keep your places Safe and Clean</h3>
        </div>
      </AnimateElement>
      <div className="services">
        <div className="securityService">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="600px"
          >
            <div className="securityImg">
              <div className="displayOnHover">Security Services</div>
              <img src={securityService}></img>
            </div>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="600px"
          >
            <Link
              to="/services#securityServicesList"
              onClick={() => myFunction("services")}
            >
              <div className="securityInfo card">
                <div className="xlargeFont">Security Services</div>
                <div className="info normalFont">
                  Our trained security personnel ensure the safety and
                  protection of your premises, assets, and people. We offer
                  round-the-clock surveillance, access control, and prompt
                  response to emergencies, maintaining a secure and worry-free
                  environment for your business.
                </div>
              </div>
            </Link>
          </AnimateElement>
        </div>
        <div className="housekeepingService">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="600px"
          >
            <div className="houseKeepingImg">
              <div className="displayOnHover">Housekeeping Services</div>
              <img src={houseKeeping}></img>
            </div>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="600px"
          >
            <Link
              to="/services#housekeepingServicesList"
              onClick={() => myFunction("services")}
            >
              <div className="houseKeepingInfo card">
                <div className="xlargeFont">Housekeeping Services</div>
                <div className="info normalFont">
                  Our housekeeping team provides thorough cleaning and
                  maintenance services to keep your premises spotless and
                  hygienic. From offices to commercial spaces, we ensure a
                  clean, organized, and welcoming environment for employees,
                  visitors, and clients.
                </div>
              </div>
            </Link>
          </AnimateElement>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
