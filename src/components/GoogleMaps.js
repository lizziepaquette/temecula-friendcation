import React from 'react';
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const GoogleMaps = ({ google }) => {
  // const onMouseoverMarker = (props, marker, e) => {
  //   console.log("onMouseOver(): ", props);
  //   alert("hello luna: ");
  // };

  return <div className="container">
      <Map google={google}
          initialCenter={{lat: 33.5168599, lng: -117.0297209}}
          style={{width: '50%', height: '50%', position: 'relative'}}
          className={'map'}
          zoom={10}>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'The House'}
          position={{lat: 33.5168599, lng: -117.0297209}}>
          {/* // onMouseover={onMouseoverMarker}> */}
            <InfoWindow
              visible={true}
              // style={styles.infoWindow}
              >
                <div className="info-window">
                  <p>Click on the map or drag the marker to select location where the incident occurred</p>
                </div>
            </InfoWindow>
        </Marker>
      </Map>
    </div>
}


export default GoogleApiWrapper({
 apiKey: ('AIzaSyDQlPtxzFon2R_q3h5VMpKazXRaX1CkysI')
})(GoogleMaps);
