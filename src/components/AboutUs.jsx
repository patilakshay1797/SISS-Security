import MissionVissionCore from "./MissionVissionCore";
import HomeImgContainer from "./HomeImgContainer";
import aboutUsHomeImg from "../assets/images/about_us_home.png";
import homeInfoImg from "../assets/images/Security-services-for-parking.jpg";
import "../assets/css/AboutUs.scss";
import { ContactUsLinkHighlight } from "./ContactUsLinkHighlight";
import AnimateElement from "./AnimateElement";

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
            <div className="whoWeAre xxlargeFont bold">WHO WE ARE ?</div>
            <div className="aboutUsInfoMsgWrapper">
              <span className="xlargeFont">SISS</span> Security and Housekeeping
              Services is a trusted name in delivering reliable, efficient, and
              professional facility management solutions. We specialize in
              providing comprehensive security services and meticulous
              housekeeping solutions tailored to meet the diverse needs of
              residential, commercial, and industrial clients. Our team of
              trained professionals is committed to ensuring safety,
              cleanliness, and operational excellence in every environment we
              serve.
            </div>
          </AnimateElement>
        </div>
      </div>
      <MissionVissionCore></MissionVissionCore>
      <ContactUsLinkHighlight></ContactUsLinkHighlight>
    </main>
  );
};

export default AboutUs;
