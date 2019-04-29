import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import roubleIcon from '../../assets/images/icons/rouble.svg'

import {balckColor,eczarFont} from '../../common-styles';

const Summ = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 0;
  color: ${balckColor};
  font-family: ${eczarFont};
  font-size: 33px;
  line-height: 33px;
`;


function separateValue(value) {
  return ('' + value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export default function TotalSumm({value=1000000}) {
  return <Summ>
    <ReactSVG
     evalScripts="always"
     src = {roubleIcon}
     svgStyle={{ width: 22 }}
     wrapper="span"
     />

    {separateValue(value)}
  </Summ>
}

TotalSumm.propTypes = {
  value: PropTypes.number.isRequired
}