import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import roubleIcon from '../../assets/images/icons/rouble.svg'
import {separateValue} from '../../common-functions.js'
import {
  blackColor,
  eczarFont
} from '../../common-styles';

const Sum = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 0;
  color: ${blackColor};
  font-family: ${eczarFont};
  font-size: 33px;
  line-height: 33px;

  svg {
    fill: ${blackColor};
  }
`;

export default function TotalSum({value=1000000}) {
  return <Sum>
    <ReactSVG
     evalScripts="always"
     src = {roubleIcon}
     svgStyle={{ width: 22 }}
     wrapper="span"
     />

    {separateValue(value)}
  </Sum>
}

TotalSum.propTypes = {
  value: PropTypes.string.isRequired
}