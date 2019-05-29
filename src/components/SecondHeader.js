import React from 'react';
import ReactSVG from 'react-svg';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import Search from '../components/Search';

import arrowLeft from '../assets/images/icons/arrow-left.svg';

import {
  grayColor,
  linkHoverColor,
  robotoFont,
  gutterMobile,
  mediaMinWidthDesktop,
  gutterDesktop
} from '../common-styles';

const Inner = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${robotoFont};
  padding: ${gutterMobile} 0;

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop} 0;
  }

  svg {
    fill: ${grayColor};
    width: 38px;
    height: 38px;
    padding: 10px;

    &:hover,
    &:active {
      fill:${linkHoverColor};
   }
  }
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

function SecondHeader({nameTransaction='some-title',history}) {

  const goBack = () => {
    history.goBack();
  }
  
  return( 
      <Inner>
        <ReactSVG 
          evalScripts="always"
          src = {arrowLeft}
          wrapper="span"
          onClick={goBack}
          />

        <Title>{nameTransaction}</Title>
        <Search/>
      </Inner>
  )
}

export default  withRouter(SecondHeader);