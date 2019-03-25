import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import RouterLink from '../router/Link';
import ReactSVG from 'react-svg';

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0;
  font-family: 'Roboto';
  font-weight: normal;
  text-decoration: none;
  color: #000;
  

  &:hover {
    color: #007D51;
    
    svg {
      fill: #007D51;
    }

  }

  &:active {
    color: #005D57;

    svg {
      fill: #005D57;
    }
  }

  @media(min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  svg {
      margin-right: 10px;
      fill: #7B7B7B;
    }

  & + & {
    margin-left: 0;

    @media(min-width: 768px) {
      margin-left: 20px;
    }
  }

  span {
    display: flex;
    
  }

`;



const MainNavLink = ({href, text, title, iconSrc, iconTitle}) =>
  <RouterLink to={href}>
    <NavLink className="main-nav__link" href={href} title={title}>
        <ReactSVG 
        evalScripts="always"
        src = {iconSrc}
        svgClassName="main-nav__icon"
        svgStyle={{ width: 15 }}
        wrapper="span"
        />
      {text}

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
