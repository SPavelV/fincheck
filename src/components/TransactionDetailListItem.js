import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {separateValue,formatDate} from '../common-functions.js';

import {
  greenColor,
  blackColor,
  robotoFont,
  eczarFont,
  grayColor,
  redColor
} from '../common-styles';

const InnerLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  text-decoration: none;
  min-height: 35px;
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

function TransactionDetailListItem({
    name="some name",
    sum=0, 
    id='some id',
    category='income',
    date='some date'}){

  const link = '/' + category + '-list/' + id;

  return (
    <InnerLink to={link}>
      <Col>
        <Title>{name}</Title>
        <Note>{formatDate(date)}</Note>
      </Col>
    
      <Sum category={category}>
        <SumText>
          {separateValue(sum)}
        </SumText>

      </Sum>
    
    </InnerLink>
  )
}

TransactionDetailListItem.propTypes = {
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  date:  PropTypes.string.isRequired
}



export default TransactionDetailListItem;