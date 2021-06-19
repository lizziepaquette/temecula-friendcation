import './App.css';
import { Router } from "@reach/router"
import Playlist from './Playlist'
import MyCountdown from './MyCountdown'

function App() {
  return (
    <Router>
      <MyCountdown path="/" />
      <Playlist  path={process.env.PUBLIC_URL + '/playlist'} />
    </Router>

  );
}

export default App;
