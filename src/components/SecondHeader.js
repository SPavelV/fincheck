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
  gutterDesktop,
  mediaMinWidthDesktop,
  maxWidth
} from '../common-styles';

const Inner = styled.header`
  position: relative;
  margin: 0 auto;
  padding: ${gutterMobile} 0;
  max-width: ${maxWidth};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${robotoFont};
  
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

function SecondHeader({transactionName='some-title',history}) {

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

        <Title>{transactionName}</Title>
        <Search/>
      </Inner>
  )
}

export default  withRouter(SecondHeader);