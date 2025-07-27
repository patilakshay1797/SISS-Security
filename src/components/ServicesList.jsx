import { HashLink as Link } from "react-router-hash-link";
import "../assets/css/servicesList.scss";
import securityService from "../assets/images/istockphoto-1227467445-612x612.jpg";
import houseKeeping from "../assets/images/houseKeeping.png";
import AnimateElement from "./AnimateElement";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

const ServicesList = () => {
  const { myFunction } = useContext(ProviderMethodContext);

  return (
    <div className="homeServices">
      <AnimateElement animationClass={"transitionBtmToTop"}>
        <div className="ourServicesHeading">
          <div>Our Services</div>
          <div>We keep your places Safe and Clean</div>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quod hic iusto repellat perspiciatis quos eius amet
                  vero, recusandae aperiam, error possimus commodi ea,
                  praesentium magni omnis provident. Aliquid, mollitia.
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quod hic iusto repellat perspiciatis quos eius amet
                  vero, recusandae aperiam, error possimus commodi ea,
                  praesentium magni omnis provident. Aliquid, mollitia.
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
