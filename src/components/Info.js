import React from "react"
import AirbnbPreview from './AirbnbPreview'
import GoogleMaps from './GoogleMaps'
import RawCalendar from './RawCalendar'
import YoutubeVid from './YoutubeVid'
import Sunset from '../photos/sunset.jpeg';
import Clouds from '../photos/clouds.mp4';
import styled from 'styled-components';


const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

// const myDiv = styled.div`
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   min-width: 100%;
//   min-height: 100%;
//   background-image: url("${ Sunset }");
//   `;

const AllStuff = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0%;
    margin-bottom: 12%;
    margin-right: 5%;
    margin-left: 15%;
    position: fixed;
    bottom: 5%;
    width: 70%;
    height 70%;
`;

const CloudsBackground = () => (
    <MyVideo className='videoTag' autoPlay loop muted>
      <source src={Clouds} type='video/mp4' />
  </MyVideo>
);

const Info = () => (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          backgroundImage: `url(${Sunset})`,
         }}>
         <CloudsBackground/>
        <AllStuff>
        <table>
             <tr>
              <td>
                <h1>When</h1>
                </td>
            </tr>
            <tr><td> Friday ‌A‌u‌g‌u‌s‌t‌ ‌1‌3‌,‌ ‌2‌0‌2‌1‌ ‌C‌h‌e‌c‌k‌-‌i‌n‌ ‌i‌s‌ ‌4‌:‌0‌0‌ ‌P‌M‌ ‌-‌ ‌8‌:‌0‌0‌ ‌P‌M‌
                <div> Click here to add the start to your calendar </div>
            </td></tr>
            <tr><td><RawCalendar/></td></tr>

            <tr><td>Thursday ‌A‌u‌g‌u‌s‌t‌ ‌1‌9‌,‌ ‌2‌0‌2‌1‌ ‌Ch‌e‌c‌k‌o‌u‌t‌ ‌b‌y‌ ‌1‌1‌:‌0‌0‌ ‌A‌M‌
                <div> Click here to add the end to your calendar </div>
            </td></tr>
            <tr>
                <h1>
                    Where
                </h1>
                41480 Valencia Way, Temecula, CA 92592
            </tr>
            <tr>
                <td><YoutubeVid /> </td>
            </tr>
            <tr>
                <td><AirbnbPreview /> </td>
            </tr>
            <tr>
                <td><GoogleMaps google = {"google"} /> </td>
            </tr>
            </table>
            </AllStuff>
    </div>
)

export default Info;