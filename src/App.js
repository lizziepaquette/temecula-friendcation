import './App.css';
import Playlist from './Playlist'
import MyCountdown from './MyCountdown'
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
    </HashRouter>
  );
}

export default App;
