import { APIProvider } from "@vis.gl/react-google-maps";
import { Map } from "@vis.gl/react-google-maps";
import MapIcon from "@mui/icons-material/Map";
import AnimateElement from "./AnimateElement";

export const MapLocation = () => {
  return (
    <div className="homeLocateUsMapContainer">
      <div className="locateUsText">
        <AnimateElement animationClass={"transitionBtmToTop"}>
          <MapIcon></MapIcon>
        </AnimateElement>
        <AnimateElement animationClass={"transitionBtmToTop"}>
          <span>LOCATE US ON MAP</span>
        </AnimateElement>
      </div>
      <div className="mapLocation">
        {/* <gmp-map
            center="18.5774784631509, 73.81273193865158"
            zoom="14"
            map-id="DEMO_MAP_ID"
            disable-default-ui="true"
            street-view-control="false"
          >
            <gmp-advanced-marker
              position="18.5774784631509, 73.81273193865158"
              title="Vastundyn Designs, Sai Sarth Residency, New Sangvi, Pune"
              gmpClickable="true"
            ></gmp-advanced-marker>
          </gmp-map> */}
        {/* <AnimateElement animationClass={"transitionBtmToTop"}> */}
        <APIProvider apiKey="AIzaSyAvkLNGc8uNE020gAMWgH8bMdZA5W-nEPo">
          {/* Your map components and other content */}
          <div className="gmpMapContainer">
            <Map
              defaultZoom={10}
              defaultCenter={{ lat: 34.0522, lng: -118.2437 }} // Example coordinates
              gestureHandling="greedy"
            />
          </div>
        </APIProvider>
        <APIProvider apiKey="AIzaSyAvkLNGc8uNE020gAMWgH8bMdZA5W-nEPo">
          {/* Your map components and other content */}
          <div className="gmpMapContainer">
            <Map
              defaultZoom={10}
              defaultCenter={{ lat: 34.0522, lng: -118.2437 }} // Example coordinates
              gestureHandling="greedy"
            />
          </div>
        </APIProvider>
        {/* </AnimateElement> */}
      </div>
    </div>
  );
};
