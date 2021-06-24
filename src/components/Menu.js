import { slide as BurgerMenu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <BurgerMenu>
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
      </BurgerMenu>
    )
};

export default Menu;