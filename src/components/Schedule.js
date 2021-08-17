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

const Bdiv = styled.div`

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
            <div> Rotisserie chicken by Costco 6pm </div>
        </div>
    },
    {
      title: 'Sunday',
      content: <div>
            <div> Choose your adventure 12pm - 4:30pm</div>
            <div> Fazeli&apos;s Winery 4:30pm - 5:45pm </div>
            <div> Horse winery tour at 6pm </div>
            <div> Steaktips, corn, and salad by Chef Kate 8pm </div>
        </div>
    },
    {
      title: 'Monday',
      content: <div>
            <div> Nature Hike leaving 8am - 2pm </div>
            <div> Tiki Happy Hour 4pm - 6pm </div>
            <div> Chilequiles by Chef Alejandro and Chef Angie 8pm </div>
            <div> Bon fire 9pm - 11pm </div>
        </div>
    },
        {
      title: 'Tuesday',
      content: <div>
            <Bdiv> Pechanga Casino 11am - 1pm (Optional) </Bdiv>
            <Bdiv> Pool it dude 1pm - 4:30pm </Bdiv>
            <Bdiv> Dunch Kofta and Pasta Bolognese by Chef Ayah and Chef Auguste 3:30pm </Bdiv>
            <Bdiv> Jenn&apos;s &quot;Berkeley Public Library Talk: Popping the Science Bubble&quot; viewing party + rave outfit and face styling 5pm - 6pm</Bdiv>
            <Bdiv> Disco Rave (at home) 6:30pm - 1am </Bdiv>
          </div>
    },
        {
      title: 'Wednesday',
      content: <div>
          <div > Alejandro and Angie hot air balloon 5am </div>
          <div> Temeculympics 11am - 4pm </div>
          <div> All day grill buffet by Chef &apos;Grill Daddy&apos; Bernard </div>
          <div> Karaoke Celebration 7pm </div>
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