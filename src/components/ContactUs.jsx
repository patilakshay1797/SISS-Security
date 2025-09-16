import { EmailJSForm } from "./EmailJSForm";
import { MapLocation } from "./MapLocation";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import "../assets/css/contactUs.scss";
import HomeImgContainer from "./HomeImgContainer";
import aboutUsHomeImg from "../assets/images/about_us_home.png";
import AnimateElement from "./AnimateElement";
import { companyEmailId } from "../utils/constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  const aboutUsLoadingImages = [aboutUsHomeImg];
  return (
    <main>
      <HomeImgContainer
        loadingImages={aboutUsLoadingImages}
        isHomePage="false"
        pageName="Contact Us"
      ></HomeImgContainer>
      <div className="contactsContainerForm">
        <div className="contactUsWaysContainer">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="reachUsWrapper">
              <div className="icon">
                <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                <div className="reachToUs">Reach Us by Phone</div>
              </div>

              <div className="phoneNo">+91 8888888888</div>
            </div>
          </AnimateElement>
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="reachUsWrapper">
              <div className="icon">
                <EmailIcon></EmailIcon>
                <div className="reachToUs">Write to us @</div>
              </div>

              <div className="phoneNo email">
                <a href={"mailto:" + companyEmailId}>{companyEmailId}</a>
              </div>
            </div>
          </AnimateElement>
        </div>
        <div className="reachUsWrapper addresses">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <div className="icon">
              <MapIcon></MapIcon>
              <div className="reachToUs">Meet Us at</div>
            </div>
            <div className="alladdresses">
              <div className="phoneNo smallLargeFont card">
                <LocationOnIcon></LocationOnIcon>
                <span>
                  Flat No. 01, Plot No. 37, Anuradha Apartment, Swapnnagari,
                  Garkheda Parisar Chh. Sambhaji Nagar (Aurangabad), Maharashtra
                  - 431005.
                </span>
              </div>
              <div className="phoneNo smallLargeFont card">
                <LocationOnIcon></LocationOnIcon>
                <span>
                  Flat No. 05, Plot No. 15,16,17, Krishna Heritage, Rajyog
                  Colony, Walekar Wadi, Chinchwad, Pune - 411033.
                </span>
              </div>
              <div className="phoneNo smallLargeFont card">
                <LocationOnIcon></LocationOnIcon>
                <span>
                  Flat No. 05, Narayan Vihar, B Wing, Rajendra Nagar (Bhosale
                  Nagar), Near Bird School, Kolhapur, 416013.
                </span>
              </div>
            </div>
          </AnimateElement>
        </div>
        <EmailJSForm></EmailJSForm>
      </div>
      <MapLocation></MapLocation>
    </main>
  );
};

export default ContactUs;
