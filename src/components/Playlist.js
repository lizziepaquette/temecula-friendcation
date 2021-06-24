import React from "react"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

const SpotifyIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
`;

const Playlist = () => (
  <PageWrapper className="App">>
    <h1>
      <Link to="/info">Collaborative Playlist</Link>
    </h1>
    <SpotifyIframe
      title="Collaborative Playlist"
      src="https://open.spotify.com/embed/playlist/1mPkhlYZZEatTrN5t1AmPD"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </SpotifyIframe>
  </PageWrapper>
)

export default Playlist;
