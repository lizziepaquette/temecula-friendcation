import './App.css';
import Playlist from './components/Playlist'
import MyCountdown from './components/MyCountdown'
import AirbnbPreview from './components/AirbnbPreview'
import GoogleMaps from './components/GoogleMaps'
import YoutubeVid from './components/YoutubeVid'
import Info from './components/Info'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu'


function App() {
  return (
    <div id="outer-container">
    <HashRouter>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
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
          path='/info'
          component={Info}
        />
        <Route
          exact
          path='/youtube'
          component={YoutubeVid}
        />
      </Switch>
        </main>
    </HashRouter>
    </div>

  );
}

export default App;
