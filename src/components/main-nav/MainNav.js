import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainNavLink from './MainNavLink'

import bag from '../../assets/images/icons/bag.svg';
import chart from '../../assets/images/icons/chart.svg';
import minus from '../../assets/images/icons/minus.svg';
import params from '../../assets/images/icons/params.svg';
import plus from '../../assets/images/icons/plus.svg';

const dataMenu = [
  {
    id: 'nav1',
    href: '/income',
    text: 'Доходы',
    title: 'Доходы',
    iconSrc: plus,
    iconTitle: 'Иконка доходов'
  },
  {
    id: 'nav2',
    href: '/costs',
    text: 'Расходы',
    title: 'Расходы',
    iconSrc: minus,
    iconTitle: 'Иконка расходов'
  },
  { 
    id: 'nav3',
    href: '#', 
    text: 'Инвестиции',
    title: 'Инвестиции',
    iconSrc: bag,
    iconTitle: 'Иконка инвестиций'
  },
  {
    id: 'nav4',
    href: '#',
    text: 'Статистика',
    title: 'Статистика',
    iconSrc: chart,
    iconTitle: 'Иконка статистика'
  },
  {
    id: 'nav5',
    href: '#',
    text: 'Настройка',
    title: 'Настройка',
    iconSrc: params,
    iconTitle: 'Иконка настройка'
  }
];


const MainNav = () =>
  <nav className="main-nav">
    {dataMenu.map(menuItem => <MainNavLink key = {menuItem.id} {...menuItem}/>)}
  </nav>;

export default MainNav;
