import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../assets/css/EmailJSForm.scss";
import ContactUsForm from "./ContactUsForm";
import AnimateElement from "./AnimateElement";

export const EmailJSForm = () => {
  return (
    <div id="contactUsForm" className="homeContactUsContainer">
      <ContactUsForm></ContactUsForm>
      <AnimateElement animationClass={"transitionBtmToTop"}>
        <div className="socialMediaContainer">
          <div className="connectUsText">Connect with us</div>
          <div className="socialMediaIcons">
            <LinkedInIcon fontSize="large"></LinkedInIcon>
            <InstagramIcon fontSize="large"></InstagramIcon>
            <XIcon fontSize="large"></XIcon>
            <FacebookIcon fontSize="large"></FacebookIcon>
          </div>
        </div>
      </AnimateElement>
    </div>
  );
};
