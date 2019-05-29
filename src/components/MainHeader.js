import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import logo from '../assets/images/icons/logo.svg';
import logoSmall from '../assets/images/icons/purse.svg';
import MainNav from './main-nav/MainNav';

import {
  maxWidth,
  mediaMinWidthDesktop,
  gutterDesktop,
  gutterMobile
} from '../common-styles';


const Inner = styled.header`
  padding: ${gutterMobile};
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  background: url(${logoSmall}) no-repeat center;
  width: 19px;
  height: 19px;

  @media(min-width: 768px) {
    background: url(${logo}) no-repeat center;
    width: 100px;
  }
`

export default function Header() {
  return (
    <Inner className="app__header">
      <Link to = "/">
        <HeaderLogo  className="app__logo"/>
      </Link>
      <MainNav />
    </Inner>
  )
}