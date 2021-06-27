import React from 'react';
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const GoogleMaps = ({ google }) => {
  // const onMouseoverMarker = (props, marker, e) => {
  //   console.log("onMouseOver(): ", props);
  //   alert("hello luna: ");
  // };
  const containerStyle = {
    width: '100%',
    height: '400px',
    position: 'relative'
  };

  return (
    <Map google={google}
        initialCenter={{lat: 33.5168599, lng: -117.0297209}}
        containerStyle={containerStyle}
        className={'map'}
        zoom={10}>
      <Marker
        title={'Home!'}
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
  );
}


export default GoogleApiWrapper({
 apiKey: ('AIzaSyDQlPtxzFon2R_q3h5VMpKazXRaX1CkysI')
})(GoogleMaps);
