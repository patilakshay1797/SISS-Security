import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../assets/css/homeImgContainer.scss";
import AnimateElement from "./AnimateElement";
import { companyName } from "../utils/constants";
import { ProviderMethodContext } from "../MyFunction";
import { useContext, useEffect, useState } from "react";

const HomeImgContainer = (props) => {
  const { myFunction } = useContext(ProviderMethodContext);
  const [homeImgIndex, setHomeImgIndex] = useState(0);

  useEffect(() => {
    const intervalValue = setInterval(() => {
      setHomeImgIndex((prev) => {
        if (props.loadingImages && props.loadingImages.length > 1) {
          return prev === props.loadingImages.length - 1 ? 0 : prev + 1;
        } else {
          return 0;
        }
      });
    }, 4000);

    return () => {
      clearInterval(intervalValue);
    };
  }, [homeImgIndex]);

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
          key={homeImgIndex}
          src={
            props?.loadingImages?.[homeImgIndex]
              ? props?.loadingImages?.[homeImgIndex]
              : ""
          }
        ></img>
      </div>
      {props.isHomePage === "false" ? (
        <div className="homeLandPageContent notHomePage">
          <h1 className="pageName xxxlargeFont">{props.pageName}</h1>
          <div className="link">
            <Link to="/">Home / {props.pageName}</Link>
          </div>
        </div>
      ) : (
        <div className="homeLandPageContent">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <h1 className="headingTag delayedDisplay">
              Welcome to {companyName}
            </h1>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={100}>
            <h1 className="headingTagLine">Your Safety Is Our Mission.</h1>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={200}>
            <h1 className="largeFont headingInfo delayedDisplay">
              Protecting people and property with discipline, vigilance, and
              professionalism.
            </h1>
            <h1 className="largeFont headingInfo delayedDisplay">
              Reliable security tailored to your environment and needs.
            </h1>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"} propDelay={300}>
            <div className="servicesButton delayedDisplay">
              <Link to="/services" onClick={() => myFunction("services")}>
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
