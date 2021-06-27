import React from "react"
import AirbnbPreview from './AirbnbPreview'
import GoogleMaps from './GoogleMaps'
import RawCalendar from './RawCalendar'
import YoutubeVid from './YoutubeVid'
import Sunset from '../photos/sunset.jpeg';
import Clouds from '../photos/clouds.mp4';
import styled from 'styled-components';
import GCalendar from './GCalendar';


const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const CloudsBackground = () => (
    <MyVideo className='videoTag' autoPlay loop muted>
      <source src={Clouds} type='video/mp4' />
  </MyVideo>
);

const WhereSection = () => {
    return (
        <>
            <div>41480 Valencia Way, Temecula, CA 92592</div>
            <GoogleMaps google = {"google"} />
        </>
    );
}

const InfoSection = ({ title, content }) => {
    return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
    );
}

const WhenSection = () => {
    return (
        <>
            <div>Friday ‌A‌u‌g‌u‌s‌t‌ ‌1‌3‌,‌ ‌2‌0‌2‌1‌ ‌C‌h‌e‌c‌k‌-‌i‌n‌ ‌i‌s‌ ‌4‌:‌0‌0‌ ‌P‌M‌ ‌-‌ ‌8‌:‌0‌0‌ ‌P‌M‌ </div>
            <div style={{ display: 'flex', alignItems: 'center' }}> Click on this button to add the event to your calendar: <GCalendar /> </div>
            <RawCalendar/>
            <div>Thursday ‌A‌u‌g‌u‌s‌t‌ ‌1‌9‌,‌ ‌2‌0‌2‌1‌ ‌Ch‌e‌c‌k‌o‌u‌t‌ ‌b‌y‌ ‌1‌1‌:‌0‌0‌ ‌A‌M‌</div>
        </>
    );
}

const InfoWrapper = styled.div`
    color: white;
    padding: 1% 100px;
    background-image: url(${Sunset});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (max-width: 600px) {
        padding: 1% 25px 1% 100px;
    }
`;

const Info = () => {
    const infoSectionProps = [
        {
            title: "When",
            content: <WhenSection />
        },
        {
            title: "Where",
            content: <WhereSection />
        },
        {
            title: "Virtual Tour",
            content: <YoutubeVid />
        },
        {
            title: "AirBnB Listing",
            content: <AirbnbPreview />
        }
    ];
    return (
        <InfoWrapper>
            { infoSectionProps.map(sec => <InfoSection { ...sec } /> ) }
        </InfoWrapper>
    );
}

export default Info;