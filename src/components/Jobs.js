import React from "react"
import scriptLoader from "react-async-script-loader";
import RepoCard from "react-repo-card";
import Clouds from '../photos/clouds.mp4';
import styled from 'styled-components';


const MyVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const CloudsBackground = () => (
    <MyVideo className='videoTag' autoPlay loop muted>
      <source src={Clouds} type='video/mp4' />
  </MyVideo>
);

const CardDiv = styled.div`
    position: relative;
    // display: flex;
    // justify-content: center;
    // text-align: center;
    // margin-top: 0%;
    // margin-bottom: 150px;
    // margin-right: 10%;
    // margin-left: 15%;
    // position: fixed;
    // top: 200px;
    // width: 70%;
    // height 70%;
`;

const Title = styled.div`
    color: blue;
    position: fixed;
    top: 100px;
    text-align: center;
    justify-content: center;
`;

const InfoSection = ({ title, content }) => {
    return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
    );
}

const InfoWrapper = styled.div`
    color: white;
    padding: 100px 5% 5% 35px;
    // background-image: url(${CloudsBackground});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: 500;
    text-transform: uppercase;
    // letter-spacing: 3px;
    font-family: 'Montserrat', sans-serif;

    // @media only screen and (max-width: 600px) {
    //     padding: 1% 25px 1% 100px;
    // }
`;

//https://github.com/lepture/github-cards
const Jobs = () => {
    const infoSectionProps = [
            {
                title: "Title",
                content: <Title> Meet the team</Title>
            },
            {
                title: "Lizzie Paquette",
                content: <CardDiv className="github-card" data-github="lizziepaquette" data-width="400" data-height="200" data-theme="medium"></CardDiv>
            },
            {
                title: "Jack Ricci",
                content:  <CardDiv className="github-card" data-github="justjack555" data-width="400" data-height="" data-theme="medium"></CardDiv>
            },
            {
                title: "Jennifer Cummings",
                content: <CardDiv className="github-card" data-github="jenncummings" data-width="400" data-height="" data-theme="medium"></CardDiv>
            },
            {
                title: "Repo",
                content: <CardDiv style={{ width: "405px" }}><RepoCard username="lizziepaquette" repository="temecula-friendcation" /></CardDiv>
            }
        ];
        return (
            <div>
            <CloudsBackground/>
            <InfoWrapper>
                { infoSectionProps.map(sec => <InfoSection { ...sec } /> ) }
            </InfoWrapper>
            </div>
        );
}


    // <div>
    //     <CloudsBackground/>
    //     <Title> Meet the team</Title>
    //     <CardDiv className="github-card" data-github="justjack555" data-width="400" data-height="" data-theme="default"></CardDiv>
    //     <CardDiv className="github-card" data-github="jenncummings" data-width="400" data-height="" data-theme="default"></CardDiv>
    //     <CardDiv className="github-card" data-github="lizziepaquette/temecula-friendcation" data-width="400" data-height="" data-theme="default"></CardDiv>
    // <CardDiv style={{ width: "405px" }}>
    //   <RepoCard username="lizziepaquette" repository="homeRepo" />
    // </CardDiv>

    // </div>

export default scriptLoader(["//cdn.jsdelivr.net/github-cards/latest/widget.js"]) (Jobs);