import homeLandingImage from "../assets/images/resized_security_guards_image-min.png";
import "../assets/css/home.scss";
import homeInfoImg from "../assets/images/Security-services-for-parking.jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Input } from "@mui/material";
import { EmailJSForm } from "./EmailJSForm";
import { MapLocation } from "./MapLocation";
import ServicesList from "./ServicesList";
import HomeImgContainer from "./HomeImgContainer";
import MissionVissionCore from "./MissionVissionCore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AnimateElement from "./AnimateElement";
import WhyUs from "./WhyUs";
import CounterComp from "./CounterComp";
import ClientLogoSlider from "./ClientLogoSlider";

const Home = () => {
  const homeLoadingImages = [homeLandingImage];
  return (
    <main>
      <HomeImgContainer
        loadingImages={homeLoadingImages}
        isHomePage="true"
      ></HomeImgContainer>
      <div className="homeInfoContainer">
        <div className="homeInfoImgContainer">
          <img src={homeInfoImg}></img>
        </div>
        <div className="homeInfoDetailContainer">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.3}
            propDelay={300}
          >
            <h1 className="homeDediacatedText">
              Dedicated to safety, committed to vigilance.
            </h1>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.4}
          >
            <h3 className="homeDediacatedInfoText">
              Delivering reliable protection and clean environments requires
              trained staff, proactive protocols, ongoing oversight, and a
              commitment to excellence. By following industry best practices and
              strict standards, we ensure safety and cleanliness you can trust
              every day.
            </h3>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.4}
          >
            <div className="homeInfoCheckList">
              <div className="checkListPoint">
                <CheckCircleOutlineIcon fontSize="large"></CheckCircleOutlineIcon>
                <span className="pointText">Comprehensive Services</span>
              </div>
              <div className="checkListPoint">
                <CheckCircleOutlineIcon fontSize="large"></CheckCircleOutlineIcon>
                <span className="pointText">Advanced Technology</span>
              </div>
              <div className="checkListPoint">
                <CheckCircleOutlineIcon fontSize="large"></CheckCircleOutlineIcon>
                <span className="pointText">Transparent Communication</span>
              </div>
            </div>
          </AnimateElement>
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.4}
          >
            <div className="homeContactUs">
              <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
              <div className="phoneNumber">
                <span className="connectText">Connect with us</span>
                <span className="number">+91 8983571126</span>
              </div>
            </div>
          </AnimateElement>
        </div>
      </div>
      <ServicesList></ServicesList>
      <div className="homeCertificationsContainer">
        <div className="certificateLabel">
          <AnimateElement animationClass={"transitionBtmToTop"}>
            <WorkspacePremiumIcon></WorkspacePremiumIcon>
            <span>CERTIFICATIONS</span>
          </AnimateElement>
        </div>
        <div className="certificates">
          <div className="certificateList">
            <ul>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={200}
              >
                <li>
                  Registered Under Maharashtra Private Security Agency
                  Regulation Act 2005 (PASARA).
                </li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={400}
              >
                <li>ISO 9001: 2015 Certified Company.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={600}
              >
                <li>Registered Under MSME (Udyog Aadhaar).</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={800}
              >
                <li>Registered Under CIN.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={1000}
              >
                <li>Registered Shop Act & Establishments.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={1200}
              >
                <li>Registered Under GST.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionLeftToRight"}
                propDelay={1400}
              >
                <li>Registered Under PAN.</li>
              </AnimateElement>
            </ul>
          </div>
          <div className="certificateList">
            <ul>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={200}
              >
                <li>Registered Under Employees Provident Fund Organisation.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={400}
              >
                <li>Registered Under Maharashtra Professional Tax.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={600}
              >
                <li>Registered Under Employees State Insurance Corporation.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={800}
              >
                <li>Registered Under Ministry of Corporate Affairs.</li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={1000}
              >
                <li>
                  Registered Under e-Governance Infrastructure Limited. (NSDL)
                </li>
              </AnimateElement>
              <AnimateElement
                animationClass={"transitionRightToLeft"}
                propDelay={1200}
              >
                <li>Registered Under Maharashtra Labour Welfare Board.</li>
              </AnimateElement>
            </ul>
          </div>
        </div>
      </div>
      {/* <MissionVissionCore></MissionVissionCore> */}
      <WhyUs></WhyUs>
      <ClientLogoSlider></ClientLogoSlider>
      <CounterComp></CounterComp>
      <EmailJSForm></EmailJSForm>
      <MapLocation></MapLocation>
    </main>
  );
};

export default Home;
