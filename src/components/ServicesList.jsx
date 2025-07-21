import { Link } from "react-router-dom";
import "../assets/css/servicesList.scss";
import securityService from "../assets/images/istockphoto-1227467445-612x612.jpg";
import houseKeeping from "../assets/images/houseKeeping.png";
import AnimateElement from "./AnimateElement";

const ServicesList = () => {
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
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="securityImg">
              <div className="displayOnHover">Security Services</div>
              <img src={securityService}></img>
            </div>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="70px"
          >
            <div className="securityInfo card">
              <div className="xlargeFont">Security Services</div>
              <div className="info normalFont">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam quod hic iusto repellat perspiciatis quos eius amet
                vero, recusandae aperiam, error possimus commodi ea, praesentium
                magni omnis provident. Aliquid, mollitia.
              </div>
            </div>
          </AnimateElement>
        </div>
        <div className="housekeepingService">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="houseKeepingImg">
              <div className="displayOnHover">Housekeeping Services</div>
              <img src={houseKeeping}></img>
            </div>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propRootMargin="70px"
          >
            <div className="houseKeepingInfo card">
              <div className="xlargeFont">Housekeeping Services</div>
              <div className="info normalFont">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam quod hic iusto repellat perspiciatis quos eius amet
                vero, recusandae aperiam, error possimus commodi ea, praesentium
                magni omnis provident. Aliquid, mollitia.
              </div>
            </div>
          </AnimateElement>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
