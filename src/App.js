import './App.css';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import temeculaMainPhoto from './photos/temecula-main-view.svg';
import funnyBwBackground from './photos/temecula-main-view-bw.svg';

function App() {
  const temeculaTripStart = new Date('2021-08-13T16:00:00');

  return (
    <div className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </div>
  );
}

const CountdownHeader = styled.h1`
  font-size: 144px;
  margin-top: 0px;
`;

const CountdownClockWrapper = styled.div`
  height: 1630px;
  padding-top: 100px;
  color: white;
  background-image: url("${temeculaMainPhoto}");
`;

const CompletedWrapper = styled.div`
  background-image: url("${funnyBwBackground}");
`;

const CountdownClock = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <CompletedWrapper><h2>I really hope it was fun.</h2></CompletedWrapper>;
  }

  return (
    <CountdownClockWrapper>
      <CountdownHeader>
        {days} Days <br/>
        {hours} Hours <br/>
        {minutes} Minutes <br />
        {seconds} Seconds
      </CountdownHeader>
    </CountdownClockWrapper>
  );
}

export default App;
