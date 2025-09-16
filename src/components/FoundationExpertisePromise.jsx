import FlagIcon from "@mui/icons-material/Flag";
import AnimateElement from "./AnimateElement";
import { isMobileDevice } from "../utils/utility";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const FoundationExpertisePromise = () => {
  return (
    <div className="foundationExpertisePromise">
      <div className="clubTwoOfThree">
        {/* <div className="foundation">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={isMobileDevice() ? 0.3 : 0.6}
          >
            <div className="lableWithIcon">
              <AccountBalanceIcon></AccountBalanceIcon>{" "}
              <span>Our Foundation</span>
            </div>
            <div className="lableWithIconDescription">
              Our company's success is rooted in the vision of our founder, Mr.
              Ganesh Kundlik Patil. With over 30 years of experience, he has
              tirelessly worked to build a company known for its integrity,
              dedication, and service excellence. His leadership inspires our
              team to go above and beyond, ensuring we exceed client
              expectations every time.
            </div>
          </AnimateElement>
        </div> */}
        <div className="expertise card">
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={isMobileDevice() ? 0.3 : 0.6}
          >
            <div className="lableWithIcon">
              <MilitaryTechIcon></MilitaryTechIcon> <span>Our Expertise</span>
            </div>
            <div className="lableWithIconDescription">
              We protect a diverse range of clients across Maharashtra,
              including industries like pharma, finance, IT, retail,
              hospitality, and education. We pride ourselves on our ability to
              provide customized vigilance that meets the unique needs of each
              sector. Our team’s combined expertise, fueled by ongoing training,
              ensures we remain agile and innovative in an ever-changing
              landscape.
            </div>
          </AnimateElement>
        </div>
      </div>
      <div className="promise card">
        <AnimateElement
          animationClass={"transitionBtmToTop"}
          propThreshold={0.2}
        >
          <div className="lableWithIcon">
            <HandshakeIcon></HandshakeIcon> <span>Our Promise</span>
          </div>
          <div className="lableWithIconDescription">
            We are dedicated to building enduring relationships based on trust
            and exceptional service. When you choose SSS, you’re not just
            getting a service—you’re gaining a partner committed to your safety
            and peace of mind. Experience the difference of a customer-first
            approach; experience the SSS difference.
          </div>
        </AnimateElement>
      </div>
    </div>
  );
};

export default FoundationExpertisePromise;
