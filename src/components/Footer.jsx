import companyLogo from "../assets/images/Upscaled_LOGO.png";
import { HashLink as Link } from "react-router-hash-link";
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
import { companyEmailId, companyName } from "../utils/constants";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

const Footer = ({ activePage, setPage }) => {
  const { myFunction } = useContext(ProviderMethodContext);
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
                Sambhaji nagar, Pune, Kolhapur, Nashik, Nagpur and many more
                cities. our customers are our priority and we are always ready
                to help you.
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
              <div className="list" onClick={() => myFunction("services")}>
                <div className="firstList">
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Security Guards
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Industrial Security
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Female Security Guard
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Bank Security
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Bouncer & Bodyguard
                    </Link>
                  </div>
                </div>
                <div className="secondList">
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Security Training
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Building Security
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#securityServicesListHeading">
                      Corporate Security
                    </Link>
                  </div>
                  <div className="service">
                    <Link to="/services#houseKeepingHeading">
                      Housekeeping Services
                    </Link>
                  </div>
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
                  <div>
                    Flat No. 01, Plot No. 37, Anuradha Apartment, Swapnnagari,
                    Garkheda Parisar Chh. Sambhaji Nagar (Aurangabad),
                    Maharashtra - 431005.
                  </div>
                </div>
                <div className="address">
                  <LocationOnIcon></LocationOnIcon>
                  <div>
                    Flat No. 05, Plot No. 15,16,17, Krishna Heritage, Rajyog
                    Colony, Walekar Wadi, Chinchwad, Pune - 411033.
                  </div>
                </div>
                <div className="address">
                  <LocationOnIcon></LocationOnIcon>
                  <div>
                    Flat No. 05, Narayan Vihar, B Wing, Rajendra Nagar (Bhosale
                    Nagar), Near Bird School, Kolhapur, 416013.
                  </div>
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
                  <a href={"mailto:" + companyEmailId}>{companyEmailId}</a>
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
                <div
                  className={activePage == "home" ? "activePage" : ""}
                  onClick={() => setPage("home")}
                >
                  <Link to="/">Home</Link>
                </div>
                <div
                  className={activePage == "aboutus" ? "activePage" : ""}
                  onClick={() => setPage("aboutus")}
                >
                  <Link to="/aboutus">About Us</Link>
                </div>
                <div
                  className={activePage == "services" ? "activePage" : ""}
                  onClick={() => setPage("services")}
                >
                  <Link to="/services">Services</Link>
                </div>
                <div
                  className={activePage == "contactus" ? "activePage" : ""}
                  onClick={() => setPage("contactus")}
                >
                  <Link to="/contactus">Contact Us</Link>
                </div>
              </div>
            </AnimateElement>
          </div>
          {/* )} */}
        </div>
      </footer>
      <div className="disclaimer">
        Copyright © {year} {companyName}
      </div>
    </>
  );
};

export default Footer;
