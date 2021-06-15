import './App.css';
import styled from 'styled-components';
import Countdown from 'react-countdown';

function App() {
  const temeculaTripStart = new Date('2021-08-13T16:00:00');

  return (
    <div className="App">
      <Countdown 
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
      <header className="App-header">
        TIME IS TICKING
      </header>
    </div>
  );
}

const CountdownHeader = styled.h1`
  font-size: 144px;
  margin-top: 0px;
`;

const CountdownClockWrapper = styled.div`
  padding-top: 48px;
  color: white;
`;

const CountdownClock = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <h2>I really hope it was fun.</h2>;
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
