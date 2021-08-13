import React from 'react'
import Sunset from '../photos/retro.jpg'
import styled from 'styled-components'


const InfoSection = ({ title, content }) => {
  return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
  )
}

const InfoWrapper = styled.div`
    color: white;
    height: 100vh;
    width: 100vw;
    padding: 100px 5% 5% 35px;
    background-image: url(${Sunset});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;

    // @media only screen and (max-width: 600px) {
    //     padding: 1% 25px 1% 100px;
    // }
`

const Schedule = () => {
  const infoSectionProps = [
    {
      title: 'Friday',
      content: <div> Arrive and rest </div>
    },
    {
      title: 'Saturday',
      content: <div> Rage all day </div>
    },
    {
      title: 'Sunday',
      content: <div> <div> Recover </div> Horse winery tour at 6pm </div>
    },
    {
      title: 'Monday',
      content: <div> Winery Crawl starting at 10am</div>
    },
        {
      title: 'Tuesday',
      content: <div> Pachanga Casino </div>
    },
        {
      title: 'Wednesday',
      content: <div>
            <div> Rage again </div> Jenn Berkeley Public Library Talk: Popping the science bubble at 5:15pm
        </div>
    },
        {
      title: 'Thursday',
      content: <div>Ch‌e‌c‌k‌ o‌u‌t‌ by 1‌1‌:‌0‌0‌ ‌A‌M‌</div>
    }
  ]
  return (
        <InfoWrapper>
            { infoSectionProps.map(sec => <InfoSection { ...sec } />) }
        </InfoWrapper>
  )
}

export default Schedule