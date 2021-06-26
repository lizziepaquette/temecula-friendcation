import React from "react"
import styled from 'styled-components';
import NightSky from '../photos/NightSky.mp4';

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
    display: flex;
    justify-content: center;
    // background: #386085;

`;

const SpotifyIframe = styled.iframe`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 5%;
    margin-left: 15%;
    // height:100vh;
    // width: 100vh;
    position: fixed;
    bottom: 5%;
    width: 70%;
    height 70%;
`;


const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const NightSkyBackground = () => (
      <MyVideo className='videoTag' autoPlay loop muted>
      <source src={NightSky} type='video/mp4' />
  </MyVideo>
);

const Playlist = () => (
  // <PageWrapper className="App">
<div>
  // TODO: make this white and show up and script
  <h1 style = {{color: 'white', position: 'fixed', right: '0', bottom: '0'}} >
    Collaborative Playlist
  </h1>
 <NightSkyBackground/>
  <SpotifyIframe
    title="Collaborative Playlist"
    src="https://open.spotify.com/embed/playlist/1mPkhlYZZEatTrN5t1AmPD"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media">
  </SpotifyIframe>
</div>
  // </PageWrapper>
)

export default Playlist;
