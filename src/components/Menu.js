import { slide as Reveal } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState } from 'react'
import GithubIcon from '../photos/mark-github.svg'

const styles = {
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
    height: '100%',
    width: '100%'
  },
  bmMenu: {
    opacity: '0.7',
    background: 'black',
    padding: '2.5em 0.5em 0.5em',
    fontSize: '2.15em',
    lineHeight: '3.6em',
    overflow: 'none',
    fontWeight: '500',
    textTransform: 'uppercase',
    // letter-spacing: 3px;
    fontFamily: 'Montserrat, sans-serif'
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

const StyledGHIcon = styled.div`
  position: fixed;
  left: 50vw;
  top: 97vh;
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
  filter: invert(100%);
  opacity: 50%;
  > a {
    cursor: pointer;
    &:hover {
      opacity: 50%;
    }
  }
`

const LinkTitle = styled.u`
  text-decoration: none;
  color: ${props => props.hoverOnLink ? 'grey' : 'white'};
  line-height: 40px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  ${LinkTitle} {
    margin-left: 15px;
  }
`

const MenuLink = ({ linkTitle, linkDestination, onLinkClick }) => {
  const [hoverOnLink, setHoverOnLink] = useState(false)

  return (
    <StyledLink to={ linkDestination } onClick={ onLinkClick } >
      <span aria-hidden="true">&nbsp;</span>
      <LinkTitle hoverOnLink={ hoverOnLink } onMouseOver={ () => setHoverOnLink(true) } onMouseOut={ () => setHoverOnLink(false) }>
        { linkTitle }
      </LinkTitle>
    </StyledLink>
  )
}

const Menu = ({ pageWrapId, outerContainerId }
) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const menuItems = [
    {
      linkTitle: 'Home',
      linkDestination: '/'
    },
    {
      linkTitle: 'Collaborative Playlist',
      linkDestination: '/playlist'
    },
    {
      linkTitle: 'Information',
      linkDestination: '/info'
    },
    {
      linkTitle: 'Travel Logistics',
      linkDestination: '/logistics'
    },
  ]

  const smallScreenObj = window.matchMedia('(max-width: 375px)')
  const largeScreenObj = window.matchMedia('(min-width: 975px)')
  const updatedStyles = {
    ...styles,
    bmMenuWrap: {
      ...styles.bmMenuWrap,
      width: largeScreenObj.matches ? '425px' : styles.bmMenuWrap.width
    },
    bmMenu: {
      ...styles.bmMenu,
      fontSize: smallScreenObj.matches ? '1.75em' : styles.bmMenu.fontSize
    }
  }

  return (
    <div>
      <Reveal
          isOpen={isOpen}
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
          styles={ updatedStyles }
          onStateChange={ state => setIsOpen(state.isOpen) } >
        { menuItems.map(item => <MenuLink key={item.linkTitle} onLinkClick={closeMenu} { ...item } />) }
      </Reveal>
      <StyledGHIcon>
        <a href="#/jobs">
          <img src={GithubIcon} alt="Github Icon" />
        </a>
      </StyledGHIcon>
    </div>
  )
}

export default Menu
