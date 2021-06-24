import React, { useState, useRef } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import Burger from '../Burger';
import FocusLock from 'react-focus-lock';


const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
      <div>
      <div>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>

     <StyledMenu open={open} aria-hidden={!isHidden}>
      {/* <div className="menuItem"><Link to='/'><u>Home</u></Link></div>
      <div className="menuItem"><Link to='/playlist'><u>Collaborative Playlist</u></Link></div>
      <div className="menuItem"><Link to='/info'><u>Info</u></Link></div> */}
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Countdown!
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Collaborative Playlist
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Information
        </a>
    </StyledMenu>
    </div>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;