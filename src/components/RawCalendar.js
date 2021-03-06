import React from 'react'
import styled from 'styled-components'

const SMALL_SCREEN_BREAKPOINT = 550

const SMonth = styled.div`
  padding: 70px 25px;
  background-color: rgba(98, 129, 141, 0.2);
  text-align: center;
`

const SMonthUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    display: block;

    > li {
      margin-bottom: 15px;
    }
  }
`

const SMonthLi = styled.li`
  list-style-type: none;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 0 15px;
`

const EventLi = styled.li`
  list-style-type: none;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

const CalLi = styled.li`
  list-style-type: none;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

const SWeekday = styled.ul`
  margin: 0;
  padding: 10px 0;
  background-color: rgba(221, 221, 221, 0.2);
`

const SWeekdays = styled.li`
  display: inline-block;
  width: 13.6%;
  color: white;
  text-align: center;
`

const SDay = styled.ul`
  padding: 10px 0;
  background-color: rgba(238, 238, 238, 0.2);
  margin: 0;
`

const SDays = styled.li`
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  height: 30px;
  text-align: center;
  margin-bottom: 5px;
  color: white;
  font-size:12px;
`

const SDayActive = styled.span`
  padding: 8px;
  background: rgba(220, 134, 110, 1);
  color: white !important
`

// /* Add media queries for smaller screens */
// @media screen and (max-width:720px) {
//   .weekdays li, .days li {width: 13.1%;}
// }

// @media screen and (max-width: 420px) {
//   .weekdays li, .days li {width: 12.5%;}
//   .days li .active {padding: 2px;}
// }

// @media screen and (max-width: 290px) {
//   .weekdays li, .days li {width: 12.2%;}
// }

// Google Calendar link
// https://calendar.google.com/calendar/u/0?cid=ZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ

// Add to your calendar
// https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MGQ1NzhoMWJ0cGswN2I2OTk1Nm83dmQyZ28gZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZw&amp;tmsrc=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com

const RawCalendar = () => {
  return (
    <div>
      <SMonth class="month">
        <SMonthUl>
          <EventLi class="Event">
            <a href= "https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MGQ1NzhoMWJ0cGswN2I2OTk1Nm83dmQyZ28gZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZw&amp;tmsrc=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com">
              Add to your calendar
            </a>
          </EventLi>
          <SMonthLi>
            August
            <span style= {{ fontSize: '18px' }} >&nbsp;2021</span>
          </SMonthLi>
          <CalLi class="Cal">
            <a href= "https://calendar.google.com/calendar/u/0?cid=ZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
            See event calendar
            </a>
          </CalLi>
        </SMonthUl>
      </SMonth>

      <SWeekday class="weekdays">
        <SWeekdays>Su</SWeekdays>
        <SWeekdays>Mo</SWeekdays>
        <SWeekdays>Tu</SWeekdays>
        <SWeekdays>We</SWeekdays>
        <SWeekdays>Th</SWeekdays>
        <SWeekdays>Fr</SWeekdays>
        <SWeekdays>Sa</SWeekdays>
      </SWeekday>

      <SDay class="days">
        <SDays>1</SDays>
        <SDays>2</SDays>
        <SDays>3</SDays>
        <SDays>4</SDays>
        <SDays>5</SDays>
        <SDays>6</SDays>
        <SDays>7</SDays>
        <SDays>8</SDays>
        <SDays>9</SDays>
        <SDays>10</SDays>
        <SDays>11</SDays>
        <SDays>12</SDays>
        <SDays><SDayActive class="active">13</SDayActive></SDays>
        <SDays><SDayActive class="active">14</SDayActive></SDays>
        <SDays><SDayActive class="active">15</SDayActive></SDays>
        <SDays><SDayActive class="active">16</SDayActive></SDays>
        <SDays><SDayActive class="active">17</SDayActive></SDays>
        <SDays><SDayActive class="active">18</SDayActive></SDays>
        <SDays><SDayActive class="active">19</SDayActive></SDays>
        <SDays>20</SDays>
        <SDays>21</SDays>
        <SDays>22</SDays>
        <SDays>23</SDays>
        <SDays>24</SDays>
        <SDays>25</SDays>
        <SDays>26</SDays>
        <SDays>27</SDays>
        <SDays>28</SDays>
        <SDays>29</SDays>
        <SDays>30</SDays>
        <SDays>31</SDays>
      </SDay>
      </div>
  )
}

export default RawCalendar
