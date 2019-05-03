import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import roubleIcon from '../../assets/images/icons/rouble.svg'
import angle from '../../assets/images/icons/angle.svg'
import {separateValue, hidePartNumberCreditCard} from '../../common-functions.js'

import {
  greenColor,
  blackColor,
  robotoFont,
  eczarFont,
  grayColor,
  redColor
} from '../../common-styles';

const Inner = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  text-decoration: none;
`;

const Col = styled.div`
  font-family: ${robotoFont};
  flex: 0 1 60%;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;

`;

const Title = styled.div`
  color: ${blackColor};
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Note = styled.div`
  color: ${grayColor};
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Sum = styled.div`
  display: flex;
  align-items: baseline;
  flex: 0 1 40%;
  justify-content: flex-end;
  font-family: ${eczarFont};
  font-size: 16px;
  line-height: 16px;
  color:  ${props => props.category === 'income' ? greenColor : redColor};
  text-overflow: ellipsis;
  overflow: hidden;

  .rouble-icon {
    display: block;
    margin-right: 5px;
    width: 9px;
    height: 11px;
    fill: ${props => props.category === 'income' ? greenColor : redColor};
  }

  .arrow-icon {
    display: block;
    margin-left: 5px;
    fill: ${blackColor};
    width: 9px;
    height: 12px;
  }
`;

const SumText = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function PreviewListItem({
    title="title", 
    cardNumber='some card number',
    note = 'some note',
    sum=0, 
    category='income'}){

  const noteText = category === 'income' ? hidePartNumberCreditCard(cardNumber) : note;

  return (
    <Inner href="#">
      <Col>
        <Title>{title}</Title>
        <Note>{noteText}</Note>
      </Col>
    
      <Sum category={category}>
        <ReactSVG
          evalScripts="always"
          src = {roubleIcon}
          wrapper="div"
          svgClassName="rouble-icon"
        />
        <SumText>
          {separateValue(sum)}
        </SumText>

        <ReactSVG
          evalScripts="always"
          src = {angle}
          wrapper="div"
          svgClassName="arrow-icon"
        />
      </Sum>
    
    </Inner>
  )
}

PreviewListItem.propTypes = {
  title: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}