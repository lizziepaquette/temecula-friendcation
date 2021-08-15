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
    padding: 70px 5% 5% 35px;
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
`

const Schedule = () => {
  const infoSectionProps = [
    {
      title: 'Friday',
      content: <div> Arrive and rest </div>
    },
    {
      title: 'Saturday',
      content: <div>
        <div> Costco Run 9am </div>
        <div> Rage all day </div>
        </div>
    },
    {
      title: 'Sunday',
      content: <div>
        <div> Choose your adventure 12-5pm</div>
        <div> Horse winery tour at 6pm </div>
        <div> Wine + fire + maybe old town (Blackbird, Coin Op, Stampede, 1909) </div>
    </div>
    },
    {
      title: 'Monday',
      content: <div>
            <div> Nature Hike leaving 7am - 2pm </div>
            <div> Games too </div>
            <div> Take a mental trip after 4pm </div>
        </div>
    },
        {
      title: 'Tuesday',
      content: <div>
            <div> Choose your own adventure 10-5pm </div>
            <div> Pachanga Casino Open 24 hours (Optional)</div>
            <div> Disco Rave (at home) 6pm </div>
            <div> Jenn Berkeley Public Library Talk: Popping the science bubble 5:15pm - 7:30pm </div>
          </div>
    },
        {
      title: 'Wednesday',
      content: <div>
          <div> Alejandro and Angie hot air balloon 5am </div>
          <div> Games + Wineries w/ reservations (Bottaia +  Fazeli + others) </div>
          <div> Rage again </div>
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