import React from "react";
import styled from 'styled-components';


const SMonth = styled.div`
  padding: 70px 25px;
  width: 91%;
  background-color: rgba(98, 129, 141, 0.2);
  text-align: center;
`;

const SMonthUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const SMonthLi = styled.li`
  list-style-type: none;

  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SWeekday = styled.ul`
  margin: 0;
  padding: 10px 0;
  background-color: rgba(221, 221, 221, 0.2);
`;

const SWeekdays = styled.li`
  display: inline-block;
  width: 13.6%;
  color: white;
  text-align: center;
`;

const SDay = styled.ul`
  padding: 10px 0;
  background-color: rgba(238, 238, 238, 0.2);
  margin: 0;
`;

const SDays = styled.li`
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  height: 30px;
  text-align: center;
  margin-bottom: 5px;
  color: white;
  font-size:12px;
`;

const SDayActive = styled.span`
  padding: 8px;
  background: rgba(220, 134, 110, 1);
  color: white !important
`;

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

const RawCalendar = () => (
    <div>
<SMonth class="month">
  <SMonthUl>
    <SMonthLi>
      August
      <span style= {{ fontSize: '18px' }} >2021</span>
    </SMonthLi>
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
);

export default RawCalendar;