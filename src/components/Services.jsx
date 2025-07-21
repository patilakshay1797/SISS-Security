import ServicesList from "./ServicesList";
import HomeImgContainer from "./HomeImgContainer";
import { ContactUsLinkHighlight } from "./ContactUsLinkHighlight";
import aboutUsHomeImg from "../assets/images/about_us_home.png";

const Services = () => {
  const servicesLoadingImages = [aboutUsHomeImg];
  return (
    <main>
      <HomeImgContainer
        loadingImages={servicesLoadingImages}
        isHomePage="false"
        pageName="Services"
      ></HomeImgContainer>
      <ServicesList></ServicesList>
      <ContactUsLinkHighlight></ContactUsLinkHighlight>
    </main>
  );
};

export default Services;
