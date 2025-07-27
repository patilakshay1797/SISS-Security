import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../assets/css/homeImgContainer.scss";
import AnimateElement from "./AnimateElement";
import { companyName } from "../utils/constants";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

const HomeImgContainer = (props) => {
  const { myFunction } = useContext(ProviderMethodContext);
  return (
    <div
      className={
        props.isHomePage === "true"
          ? "homeImgContainer homePageImageContainer"
          : "homeImgContainer otherPageImgContainer"
      }
    >
      <div className="landingImg">
        <img
          src={props?.loadingImages?.[0] ? props?.loadingImages?.[0] : ""}
        ></img>
      </div>
      {props.isHomePage === "false" ? (
        <div className="homeLandPageContent notHomePage">
          <div className="pageName xxxlargeFont">{props.pageName}</div>
          <div className="link">
            <Link to="/">Home / {props.pageName}</Link>
          </div>
        </div>
      ) : (
        <div className="homeLandPageContent">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="headingTag delayedDisplay">
              Welcome to {companyName}
            </div>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={100}>
            <div className="headingTagLine">Your Safety Is Our Mission.</div>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={200}>
            <div className="largeFont headingInfo delayedDisplay">
              Protecting people and property with discipline, vigilance, and
              professionalism.
            </div>
            <div className="largeFont headingInfo delayedDisplay">
              Reliable security tailored to your environment and needs.
            </div>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={300}>
            <div className="servicesButton delayedDisplay">
              <Link to="/services">
                {/* onClick={myFunction("services")} */}
                <Button variant="contained">Our Services</Button>
              </Link>
            </div>
          </AnimateElement>
        </div>
      )}
    </div>
  );
};

export default HomeImgContainer;
