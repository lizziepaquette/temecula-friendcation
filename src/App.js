import './App.css';
import Playlist from './components/Playlist'
import MyCountdown from './components/MyCountdown'
import AirbnbPreview from './components/AirbnbPreview'
import GoogleMaps from './components/GoogleMaps'
import Info from './components/Info'
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
