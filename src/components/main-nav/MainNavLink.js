import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import RouterLink from '../router/Link';
import ReactSVG from 'react-svg';

const NavLink = styled.a`
  font-size: 0
`

const MainNavLink = ({href, text, title, iconSrc, iconTitle}) =>
  <RouterLink to={href}>
    <NavLink className="main-nav__link" href={href} title={title}>
      {text}
      {/* <img className="main-nav__icon" src={iconSrc} alt={iconTitle}/> */}

      <ReactSVG 
        evalScripts="always"
        src = {iconSrc}
        svgClassName="main-nav__icon"
        svgStyle={{ width: 15 }}
        wrapper="span"
        />
    </NavLink>
  </RouterLink>;

MainNavLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  iconTitle: PropTypes.string.isRequired
};

MainNavLink.defaultProps = {
  href: '#',
  text: 'Пункт меню',
  title: 'Пункт меню',
  iconSrc: '',
  iconTitle: 'Иконка к пункут меню'
};

export default MainNavLink;
