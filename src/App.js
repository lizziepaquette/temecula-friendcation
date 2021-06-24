import './App.css';
import React, { useState, useRef } from 'react';
import Playlist from './components/Playlist'
import MyCountdown from './components/MyCountdown'
import AirbnbPreview from './components/AirbnbPreview'
import GoogleMaps from './components/GoogleMaps'
import GCalendar from './components/GCalendar'
import Info from './components/Info'
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';


function App() {
  return (
      <div>
        Sup
   <HashRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={MyCountdown}
        />
        <Route
          exact
          path='/playlist'
          component={Playlist}
        />
        <Route
          exact
          path='/airbnb-preview'
          component={AirbnbPreview}
        />
        <Route
          exact
          path='/google-maps'
          component={GoogleMaps}
        />
        <Route
          exact
          path='/calendar'
          component={GCalendar}
        />
        <Route
          exact
          path='/info'
          component={Info}
        />
        <Route
          exact
          path='/menu'
          component={Menu}
        />
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
