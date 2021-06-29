import React from "react"
import AirbnbPreview from './AirbnbPreview'
import RawCalendar from './RawCalendar'
import YoutubeVid from './YoutubeVid'
import Sunset from '../photos/sunset.jpeg';
import Clouds from '../photos/clouds.mp4';
import styled from 'styled-components';
import RawMaps from './RawMaps';

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

const WhereSectionWrapper = styled.div`
    > div {
        margin-bottom: 10px
    }
`;

const WhereSection = () => {
    return (
        <WhereSectionWrapper>
            <RawMaps/>
        </WhereSectionWrapper>
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

const WhenSectionWrapper = styled.div`
    > div {
        margin-bottom: 10px;
    }
`;

const WhenSection = () => {
    return (
        <WhenSectionWrapper>
            <div><strong>C‌h‌e‌c‌k‌-‌i‌n‌: </strong>‌Friday ‌A‌u‌g‌u‌s‌t‌ ‌1‌3‌,‌ ‌2‌0‌2‌1‌ from ‌4‌:‌0‌0‌ ‌P‌M‌ ‌-‌ ‌8‌:‌0‌0‌ ‌P‌M‌ </div>
            <div><strong>Ch‌e‌c‌k‌-o‌u‌t‌: </strong>Thursday ‌A‌u‌g‌u‌s‌t‌ ‌1‌9‌,‌ ‌2‌0‌2‌1‌ ‌b‌y‌ ‌1‌1‌:‌0‌0‌ ‌A‌M‌</div>
            <RawCalendar/>
        </WhenSectionWrapper>
    );
}

const InfoWrapper = styled.div`
    color: white;
    padding: 100px 5% 5% 35px;
    background-image: url(${Sunset});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: 500;
    text-transform: uppercase;
    // letter-spacing: 3px;
    font-family: 'Montserrat', sans-serif;

    // @media only screen and (max-width: 600px) {
    //     padding: 1% 25px 1% 100px;
    // }
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