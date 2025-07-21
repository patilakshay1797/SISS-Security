import { EmailJSForm } from "./EmailJSForm";
import { MapLocation } from "./MapLocation";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import "../assets/css/contactUs.scss";
import HomeImgContainer from "./HomeImgContainer";
import aboutUsHomeImg from "../assets/images/about_us_home.png";
import AnimateElement from "./AnimateElement";

const ContactUs = () => {
  const aboutUsLoadingImages = [aboutUsHomeImg];
  return (
    <main>
      <HomeImgContainer
        loadingImages={aboutUsLoadingImages}
        isHomePage="false"
        pageName="Contact Us"
      ></HomeImgContainer>
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
              <div className="reachToUs">write to us</div>
            </div>

            <div className="phoneNo email">
              <a href="mailto:sisssecurity@gmail.com">sisssecurity@gmail.com</a>
            </div>
          </div>
        </AnimateElement>
        <AnimateElement animationClass={"transitionBtmToTop"}>
          <div className="reachUsWrapper">
            <div className="icon">
              <MapIcon></MapIcon>
              <div className="reachToUs">Meet Us at</div>
            </div>

            <div className="phoneNo">Pimpri Chinchwad, Pune</div>
          </div>
        </AnimateElement>
      </div>
      <EmailJSForm></EmailJSForm>
      <MapLocation></MapLocation>
    </main>
  );
};

export default ContactUs;
