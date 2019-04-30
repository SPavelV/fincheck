import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import roubleIcon from '../../assets/images/icons/rouble.svg'
import {separateValue} from '../../common-functions.js'

import {
  greenColor,
  greenDarkColor,
  blackColor,
  robotoFont,
  eczarFont,
  grayColor
} from '../../common-styles';

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
`;

const Col = styled.div`
  font-family: ${robotoFont};


`;

const Title = styled.div`
  color: ${blackColor};
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 2px;
`;

const NumberCard = styled.div`
  color: ${grayColor};
  font-size: 12px;
  line-height: 16px;
`;

const Sum = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 16px;
  line-height: 16px;
  color:  ${greenColor};
  font-family: ${eczarFont};

  svg {
    display: block;
    margin-right: 5px;
    fill: ${greenColor};
    width: 9px;
    height: 11px;
  }
`;

export default function({title="title", color=greenColor, cardNumber=null, sum=0}){
  return (
    <Inner>
      <Col>
        <Title>{title}</Title>
        <NumberCard>{cardNumber}</NumberCard>
      </Col>
    
      <Sum>
        <ReactSVG
          evalScripts="always"
          src = {roubleIcon}
          wrapper="div"
        />
        <span>
          {separateValue(sum)}
        </span>
      </Sum>
    
    </Inner>
  )
}