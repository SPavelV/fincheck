import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainNavLink from './MainNavLink'

const dataMenu = [
  {
    id: 'nav1',
    href: '#',
    text: 'Доходы',
    title: 'Доходы',
    iconSrc: null,
    iconTitle: 'Иконка доходов'
  },
  {
    id: 'nav2',
    href: '#',
    text: 'Расходы',
    title: 'Расходы',
    iconSrc: null,
    iconTitle: 'Иконка расходов'
  },
  {
    id: 'nav3',
    href: '#',
    text: 'Инвестиции',
    title: 'Инвестиции',
    iconSrc: null,
    iconTitle: 'Иконка инвестиций'
  },
  {
    id: 'nav4',
    href: '#',
    text: 'Статистика',
    title: 'Статистика',
    iconSrc: null,
    iconTitle: 'Иконка статистика'
  }
];


const MainNav = () =>
  <nav className="main-nav">
    {dataMenu.map(menuItem => <MainNavLink key = {menuItem.id} {...menuItem}/>)}
  </nav>;

export default MainNav;
