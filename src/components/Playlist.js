import React from 'react'
import styled from 'styled-components'
import NightSky from '../photos/NightSky.mp4'

const SpotifyIframe = styled.iframe`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 15%;
    // height:100vh;
    // width: 100vh;
    position: fixed;
    top: 200px;
    width: 70%;
    height 55%;
`

const MyVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`

const CursiveTxt = styled.h1`
    color: white;
    font-family: 'League Script', cursive;
    font-size: 250%;
    // letter-spacing: 2px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 150px;
    margin-right: 10%;
    margin-left: 15%;
    position: fixed;
    top: 100px;
    width: 70%;
    height 70%;
`

const NightSkyBackground = () => (
    <MyVideo className='videoTag' autoPlay loop muted>
      <source src={NightSky} type='video/mp4' />
  </MyVideo>
)

const PageWrapper = styled.div``

const Playlist = () => (
  <PageWrapper>
    <NightSkyBackground/>
    <CursiveTxt>
      Collaborative Playlist
    </CursiveTxt>

    <SpotifyIframe
      title="Collaborative Playlist"
      src="https://open.spotify.com/embed/playlist/1mPkhlYZZEatTrN5t1AmPD"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </SpotifyIframe>
  </PageWrapper>
)

export default Playlist
