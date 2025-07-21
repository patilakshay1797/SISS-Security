import "../assets/css/MissionVissionCore.scss";
import FlagIcon from "@mui/icons-material/Flag";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedIcon from "@mui/icons-material/Verified";
import AnimateElement from "./AnimateElement";
import { isMobileDevice } from "../utils/utility";

const MissionVissionCore = () => {
  return (
    <div className="homeMissionVissionCoreContainer">
      <AnimateElement
        animationClass={"transitionBtmToTop"}
        propThreshold={isMobileDevice() ? 0.3 : 0.6}
      >
        <div className="missionVissionWrapper">
          <div className="missionWrapper">
            <div className="forBeforeCSS">
              <div className="missionText bold">
                <FlagIcon></FlagIcon> <span>OUR MISSION</span>
              </div>
              <div className="mission">
                To deliver dependable and high-quality security and housekeeping
                services that ensure safety, hygiene, and client satisfaction
                through professionalism, integrity, and a customer-centric
                approach.
              </div>
            </div>
          </div>
          <div className="vissionWrapper">
            <div className="forBeforeCSS">
              <div className="vissionText bold">
                <TrackChangesIcon></TrackChangesIcon> <span>OUR VISSION</span>
              </div>
              <div className="vission">
                To become a leading provider of integrated facility management
                solutions by setting new standards in security and housekeeping
                through innovation, continuous training, and unwavering
                commitment to excellence.
              </div>
            </div>
          </div>
        </div>
      </AnimateElement>
      <div className="coreValuesWrapper">
        <AnimateElement animationClass={"transitionBtmToTop"}>
          <div className="coreText bold">
            <VerifiedIcon></VerifiedIcon>
            <span>CORE VALUES</span>
          </div>
        </AnimateElement>
        <div className="coreValues">
          <div className="responsiveDesign">
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={600}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Integrity</div>
              </div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propDelay={300}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Professionalism</div>
              </div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionLeftToRight"}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Excellence</div>
              </div>
            </AnimateElement>
          </div>
          <div className="responsiveDesign">
            <AnimateElement
              animationClass={"transitionRightToLeft"}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Teamwork</div>
              </div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionRightToLeft"}
              propDelay={300}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Customer Focus </div>
              </div>
            </AnimateElement>
            <AnimateElement
              animationClass={"transitionRightToLeft"}
              propDelay={600}
              propRootMargin={isMobileDevice() ? "-50px" : "-100px"}
            >
              <div className="integrity">
                <div className="dot"></div>
                <div className="value">Innovation</div>
              </div>
            </AnimateElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVissionCore;
