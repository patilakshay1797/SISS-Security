import MissionVissionCore from "./MissionVissionCore";
import HomeImgContainer from "./HomeImgContainer";
import aboutUsHomeImg from "../assets/images/about_us_home.webp";
import homeInfoImg from "../assets/images/Security-services-for-parking.jpg";
import "../assets/css/AboutUs.scss";
import { ContactUsLinkHighlight } from "./ContactUsLinkHighlight";
import AnimateElement from "./AnimateElement";
import FoundationExpertisePromise from "./FoundationExpertisePromise";
import { isMobileDevice } from "../utils/utility";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const AboutUs = () => {
  const aboutUsLoadingImages = [aboutUsHomeImg];
  return (
    <main>
      <HomeImgContainer
        loadingImages={aboutUsLoadingImages}
        isHomePage="false"
        pageName="About Us"
      ></HomeImgContainer>
      <div className="aboutUsInfoConatiner">
        <div className="aboutUsInfoImgContainer">
          <img src={homeInfoImg}></img>
        </div>
        <div className="aboutUsInfoText">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.2}
          >
            <div className="centerDivContent">
              <div className="whoWeAre xxxlargeFont bold">Swamini Security</div>
              <div className="whoWeAre xlargeFont bold">
                Your Trusted Partner
              </div>
            </div>
            <div className="aboutUsInfoMsgWrapper">
              <span className="xlargeFont">
                <strong></strong>
              </span>
              {/* Security and Housekeeping Services is a trusted name in delivering
              reliable, efficient, and professional facility management
              solutions. We specialize in providing comprehensive security
              services and meticulous housekeeping solutions tailored to meet
              the diverse needs of residential, commercial, and industrial
              clients. Our team of trained professionals is committed to
              ensuring safety, cleanliness, and operational excellence in every
              environment we serve. */}
              <div>
                For over 13 years, Swamini Security Services Pvt. Ltd. (SSS) has
                been the trusted name in security. We are a Government of
                Maharashtra-approved and ISO 9001-2015 certified company,
                committed to delivering complete security, training, and
                housekeeping solutions.
              </div>
              <div className="ourFoundation">
                <div className="foundation">
                  <AnimateElement
                    animationClass={"transitionBtmToTop"}
                    propThreshold={isMobileDevice() ? 0.3 : 0.6}
                  >
                    <div className="lableWithIcon">
                      <AccountBalanceIcon></AccountBalanceIcon>{" "}
                      <span>Our Foundation</span>
                    </div>
                    <div className="lableWithIconDescription">
                      Our company's success is rooted in the vision of our
                      founder, Mr. Ganesh Kundlik Patil. With over 30 years of
                      experience, he has tirelessly worked to build a company
                      known for its integrity, dedication, and service
                      excellence. His leadership inspires our team to go above
                      and beyond, ensuring we exceed client expectations every
                      time.
                    </div>
                  </AnimateElement>
                </div>
              </div>
            </div>
          </AnimateElement>
        </div>
      </div>
      <FoundationExpertisePromise></FoundationExpertisePromise>
      <MissionVissionCore></MissionVissionCore>
      <ContactUsLinkHighlight></ContactUsLinkHighlight>
    </main>
  );
};

export default AboutUs;
