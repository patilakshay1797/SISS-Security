import companyLogo from "../assets/images/Upscaled_LOGO.png";
import { Link } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "../assets/css/footer.scss";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import AnimateElement from "./AnimateElement";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { isMobileDevice } from "../utils/utility";

const Footer = () => {
  const thisDate = new Date();
  const year = thisDate.getFullYear();
  return (
    <>
      <footer>
        <div className="logoImgContainer">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <img src={companyLogo}></img>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="companyName">
              <div className="presence">Our presence all over Maharashtra</div>{" "}
              <div className="allPlaces">
                Sambhaji nagar, Pune, Sangli, Beed and many more cities. our
                customers are our priority and we are always ready to help you.
              </div>
            </div>
          </AnimateElement>
        </div>
        <div className="footerContent">
          {/* Services list */}
          <div className="ourServices">
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={100}
            >
              <div className="footerHeading">OUR SERVICES</div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={200}
            >
              <div className="list">
                <div className="firstList">
                  <div className="service">Security Guards</div>
                  <div className="service">Industrial Security</div>
                  <div className="service">Female Security Guard</div>
                  <div className="service">Bank Security</div>
                  <div className="service">Bouncer & Bodyguard</div>
                </div>
                <div className="secondList">
                  <div className="service">Security Training</div>
                  <div className="service">Building Security</div>
                  <div className="service">Corporate Security</div>
                  <div className="service">Housekeeping Services</div>
                </div>
              </div>
            </AnimateElement>
          </div>

          {/* office addresses */}
          <div className="officeAddresses">
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={100}
            >
              <div className="footerHeading">OFFICE ADDRESSES</div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={200}
            >
              <div className="list">
                <div className="address">
                  <LocationOnIcon></LocationOnIcon>
                  <div>Plot no 15, Sambhaji nagar, Maharashtra</div>
                </div>
                <div className="address">
                  <LocationOnIcon></LocationOnIcon>
                  <div>Plot no 15, Rajyog Colony, Primpri Chinchwad, Pune </div>
                </div>
              </div>
            </AnimateElement>
          </div>

          {/* contact details */}
          <div className="contactDetails">
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={500}
            >
              <div className="footerHeading">CONTACT DETAILS</div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={600}
            >
              <div className="list">
                <div className="info">
                  <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                  <span>+91 8888888888</span>
                </div>
                <div className="info">
                  <EmailIcon></EmailIcon>
                  <a href="mailto:sisssecurity@gmail.com">
                    sisssecurity@gmail.com
                  </a>
                </div>
                {/* <div className="info">
                <MapIcon></MapIcon>
                <span>Pimpri chinchwad, Pune</span>
              </div> */}
                <div className="info socialMediaIcons">
                  <LinkedInIcon fontSize="large"></LinkedInIcon>
                  <InstagramIcon fontSize="large"></InstagramIcon>
                  <XIcon fontSize="large"></XIcon>
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </div>
              </div>
            </AnimateElement>
          </div>

          {/* Quick links visible only if it is a mobile device */}
          {/* {isMobileDevice() && ( */}
          <div className="companyLinks">
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={300}
            >
              <div className="footerHeading">QUICK LINKS</div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={400}
            >
              <div className="list">
                <div className="home">
                  <Link to="/">Home</Link>
                </div>
                <div className="aboutUs">
                  <Link to="/aboutus">About Us</Link>
                </div>
                <div className="services">
                  <Link to="/services">Services</Link>
                </div>
                <div className="contactUs">
                  <Link to="/contactus">Contact Us</Link>
                </div>
              </div>
            </AnimateElement>
          </div>
          {/* )} */}
        </div>
      </footer>
      <div className="disclaimer">Copyright © {year} SISS Security</div>
    </>
  );
};

export default Footer;
