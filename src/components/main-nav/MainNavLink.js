import PropTypes from 'prop-types';
import React, { Component } from 'react';

const MainNavLink = ({href, text, title, iconSrc, iconTitle}) =>
  <a className="main-nav__link" href={href} title={title}>
    {text}
    <img className="main-nav__icon" src={iconSrc} alt={iconTitle}/>
  </a>;

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
