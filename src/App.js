import './App.css';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import temeculaMainPhoto from './photos/temecula-main-view.svg';
import funnyBwBackground from './photos/temecula-main-view-bw.svg';

const CountdownHeader = styled.h1`
  font-size: 12vw;
  margin: 0px;
`;

const CountdownClockWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url("${ props => props.bgImg }");
  background-size: contain;
  box-sizing: border-box;
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

function App() {
  const temeculaTripStart = new Date('2021-08-13T16:00:00');

  return (
    <PageWrapper className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

export default App;
