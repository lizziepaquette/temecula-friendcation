import './App.css';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import temeculaMainPhoto from './photos/temecula-main-view.svg';
import funnyBwBackground from './photos/temecula-main-view-bw.svg';
import { Burger, Menu } from './components';
import React, { useState, useRef } from 'react';

import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import FocusLock from 'react-focus-lock';

function App() {
  const temeculaTripStart = new Date('2021-08-13T16:00:00');
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
    <PageWrapper className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </PageWrapper>
          <iframe src="https://open.spotify.com/embed/playlist/1mPkhlYZZEatTrN5t1AmPD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

      </>
    </ThemeProvider>
  );
}

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

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

export default App;
