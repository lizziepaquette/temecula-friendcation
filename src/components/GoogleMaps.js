import React from "react"
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

const SpotifyIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
`;

const GoogleMaps = ({ google }) => (
 <div className="container">
    Hello World
<Map google={google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  <Marker
    name={'Your position'}
    // src="https://maps.google.com/maps?q=41480%20Valencia%20Way,%20Temecula,%20CA%2092592,%20USA&t=k&z=13&ie=UTF8&iwloc=&output=embed"
    position={{lat: 37.762391, lng: -122.439192}}
    icon={{
      url: "/path/to/custom_icon.png",
      anchor: new google.maps.Point(32,32),
      scaledSize: new google.maps.Size(64,64)
    }}
     />
</Map>
    </div>
    // <div class="mapouter">
    //     <div class="gmap_canvas">
    //     <iframe
    //         width="600"
    //         height="500"
    //         id="gmap_canvas"
    //         src="https://maps.google.com/maps?q=41480%20Valencia%20Way,%20Temecula,%20CA%2092592,%20USA&t=k&z=13&ie=UTF8&iwloc=&output=embed"
    //         frameborder="0"
    //         scrolling="no"
    //         marginheight="0"
    //         marginwidth="0">
    //     </iframe>
    //     {/* <a href="https://123movies-a.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
    //     <a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
    //     </div>
    // </div>
)


export default GoogleApiWrapper({
 apiKey: ('AIzaSyDQlPtxzFon2R_q3h5VMpKazXRaX1CkysI') //('AIzaSyDGCDuQTpCRc-wCB_3XjV49xnw3QRjz2-4' )
})(GoogleMaps);
