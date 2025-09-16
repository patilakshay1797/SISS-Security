import {
  APIProvider,
  AdvancedMarker,
  Pin,
  InfoWindow,
  ControlPosition,
  MapControl,
} from "@vis.gl/react-google-maps";
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

        <APIProvider
          apiKey="AIzaSyAvkLNGc8uNE020gAMWgH8bMdZA5W-nEPo"
          libraries={["geometry", "places"]}
        >
          {/* Your map components and other content */}
          <div className="gmpMapContainer">
            <Map
              defaultZoom={17}
              defaultCenter={{
                lat: 19.863586156485855,
                lng: 75.35275584287302,
              }}
              defaultHeading="Test Heading"
              gestureHandling="cooperative"
              mapId="DEMO_MAP_ID"
              mapTypeId={"hybrid"}
              disableDefaultUI={false}
              options={{
                mapTypeControl: false, // hides Map / Satellite toggle
                streetViewControl: false, // (optional) hide street view
                fullscreenControlOptions: {
                  position: ControlPosition.BOTTOM_LEFT, // ✅ move bottom-left
                },
              }}
            >
              <AdvancedMarker
                key="sambjakiNagar"
                position={{
                  lat: 19.863586156485855,
                  lng: 75.35275584287302,
                }}
              >
                <Pin />
              </AdvancedMarker>
            </Map>
            <div className="displayOverMap">
              <h6>Anuradha Apartment</h6>
              <p>
                Flat No. 01, Plot No. 37, Anuradha Apartment, Swapnnagari,
                Garkheda Parisar, Chh. Sambhaji Nagar (Aurangabad), Maharashtra
                - 431005.
              </p>
            </div>
          </div>
        </APIProvider>
        <APIProvider apiKey="AIzaSyAvkLNGc8uNE020gAMWgH8bMdZA5W-nEPo">
          {/* Your map components and other content */}
          <div className="gmpMapContainer">
            <Map
              defaultZoom={16}
              defaultCenter={{
                lat: 18.642966615022036,
                lng: 73.76115066115332,
              }} // Example coordinates
              gestureHandling="cooperative"
              mapId="DEMO_MAP_ID"
              mapTypeId={"hybrid"}
              disableDefaultUI={false}
              options={{
                mapTypeControl: false, // hides Map / Satellite toggle
                streetViewControl: false, // (optional) hide street view
                fullscreenControlOptions: {
                  position: ControlPosition.BOTTOM_LEFT, // move bottom-left
                },
              }}
            >
              <AdvancedMarker
                key="ravetPune"
                position={{
                  lat: 18.642966615022036,
                  lng: 73.76115066115332,
                }}
              >
                <Pin />
              </AdvancedMarker>
            </Map>
            <div className="displayOverMap">
              <h6>Krishna Heritage</h6>
              <p>
                Flat No. 05, Plot No. 15,16,17, Krishna Heritage, Rajyog Colony,
                Walekar Wadi, Chinchwad, Pune - 411033.
              </p>
            </div>
          </div>
        </APIProvider>
        {/* </AnimateElement> */}
      </div>
    </div>
  );
};
