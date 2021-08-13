import React from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import temeculaMainPhoto from '../photos/temecula-main-view.svg'
import funnyBwBackground from '../photos/temecula-main-view-bw.svg'

const CountdownHeader = styled.h1`
  font-size: 14vmin;
  margin: 0px;
  font-weight: 550;
  text-transform: uppercase;
  // letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
`

const CountdownClockWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url("${props => props.bgImg}");
  background-size: cover;
  box-sizing: border-box;
  background-position: 30% 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20vh;
`

const CountdownClock = ({ days, hours, minutes, seconds, completed }) => {

  const now = new Date()
  const tripOver = new Date("2021-08-19T23:00:00Z")
  const tripIsOver = now.getTime() > tripOver.getTime()

  if (completed && ! tripIsOver) {
    return (
    <div>
      <iframe
        style={{ width: '100%', height: '100vh', marginRight: '10px'}}
        src="https://www.youtube.com/embed/t1MuOLT5UmI?controls=0&amp;start=34&amp;autoplay=1&amp;mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true">
      </iframe>
    </div>
    )
  }
  else if (tripIsOver){
    return (
      <CountdownClockWrapper bgImg={ funnyBwBackground } >
        <CountdownHeader>I really hope it was fun.</CountdownHeader>
      </CountdownClockWrapper>
    )
  }

  return (
    <div>
    <CountdownClockWrapper bgImg={ temeculaMainPhoto } >
      <div>
      <CountdownHeader>
        {days} Days <br/>
        {hours} Hours <br/>
        {minutes} Minutes <br />
        {seconds} Seconds
      </CountdownHeader>
      </div>
    </CountdownClockWrapper>
    </div>
  )
}

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`

const MyCountdown = () => {
  const temeculaTripStart = new Date('2021-08-13T16:00:00')

  return <PageWrapper className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </PageWrapper>
}

export default MyCountdown
