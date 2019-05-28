import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import roubleIcon from '../assets/images/icons/rouble.svg'
import {separateValue,getArrValues,getSum} from '../common-functions';
import styled from 'styled-components';



import {
  grayColor,
  firstFont,
  secondFont,
  blackColor
} from '../common-styles'


const Inner = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: ${grayColor};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.25px;
  font-family: ${firstFont};
`;

const TotalValue = styled.div`
  display: flex;
  font-size: 26px;
  line-height: 22px;
  font-family: ${secondFont};
  color: ${blackColor};

  .rouble-icon {
    display: block;
    margin-right: 5px;
    width: 14px;
    height: 18px;
    fill: ${blackColor};
  }
`;

export default function TotalSum({valuesArr = [22]}) {
  return(
    <Inner>
      <Title>Всего</Title>
      <TotalValue>
        <ReactSVG 
          evalScripts="always"
          src = {roubleIcon}
          wrapper="span"
          svgClassName="rouble-icon"
          />
        { getSum(getArrValues(valuesArr,'sum'), separateValue) }
        </TotalValue>
    </Inner>
  )
   
}

TotalSum.propTypes = {
  valuesArr: PropTypes.array
}