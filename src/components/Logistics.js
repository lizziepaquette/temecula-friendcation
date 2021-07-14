import React from 'react'
import styled from 'styled-components'
import Road from '../photos/pacific-coast-highway.jpeg'

const LogisticsIframe = styled.iframe`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 85%;
    margin: 5%;
    margin-bottom: 20px;
    margin-top: 70px;
    width: 100%;
    opacity: 65%;
`

const PageStyle = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url("${Road}");
  background-size: cover;
  box-sizing: border-box;
  background-position: 30% 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20vh;
`;

// https://www.localwebstrategies.com/post/how-to-embed-editable-google-sheets-in-website
const Logistics = () => (
    <PageStyle>
    <LogisticsIframe
        src="https://docs.google.com/spreadsheets/d/1RRy8h4gIc215vqbMBt7nklGBLXJjXdjvYYRvJvioQmw/edit?usp=sharing?&amp;rm=minimal&amp;single=true&amp;headers=false&amp;widget=true&amp;">
    </LogisticsIframe>
    </PageStyle>
)

export default Logistics