import { slide as Reveal } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import Sunset from '../photos/sunset.jpeg';
import temeculaMainPhoto from '../photos/temecula-main-view.svg';


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'white'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    backgroundImage: `url(${Sunset})`,
    // background: '#C38F62',
    padding: '2.5em 0.5em 0.5em',
    fontSize: '2.15em',
    lineHeight: '3.6em',
  },
  bmMorphShape: {
    fill: '#C38F62'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = ({pageWrapId, outerContainerId}
) => {
    return (
        <Reveal pageWrapId={pageWrapId} outerContainerId={outerContainerId} styles={ styles } >
        <div className="menuItem">
            <Link to='/'>
                <span aria-hidden="true">💁🏻‍♂️</span>
                <u>Home</u>
            </Link></div>
            <div className="menuItem">
                <Link to='/playlist'>
                <span aria-hidden="true">💁🏻‍♂️</span>
                <u>Collaborative Playlist</u>
                </Link>
            </div>
            <div className="menuItem">
                <Link to='/info'>
                <span aria-hidden="true">💁🏻‍♂️</span>
                <u>Information</u>
                </Link>
            </div>
      </Reveal>
    )
};

export default Menu;