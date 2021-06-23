import styled from 'styled-components';
import Countdown from 'react-countdown';
import temeculaMainPhoto from '../photos/temecula-main-view.svg';
import funnyBwBackground from '../photos/temecula-main-view-bw.svg';


const CountdownHeader = styled.h1`
  font-size: 12vw;
  margin: 0px;

  @media screen and (max-width: 768px) {
    line-height: 200%
  }
`;


const CountdownClockWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url("${ props => props.bgImg }");
  background-size: cover;
  box-sizing: border-box;
  background-position: 30% 50%;
  background-repeat: no-repeat;
`;



const CountdownClock = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <CountdownClockWrapper bgImg={ funnyBwBackground } >
        <CountdownHeader>I really hope it was fun.</CountdownHeader>
      </CountdownClockWrapper>
    );
  }

  return (
    <CountdownClockWrapper bgImg={ temeculaMainPhoto } >
      <CountdownHeader>
        {days} Days <br/>
        {hours} Hours <br/>
        {minutes} Minutes <br />
        {seconds} Seconds
      </CountdownHeader>
    </CountdownClockWrapper>
  );
}

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

const MyCountdown = () => {
  const temeculaTripStart = new Date('2021-08-13T16:00:00');

   return <PageWrapper className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </PageWrapper>
}

export default MyCountdown;