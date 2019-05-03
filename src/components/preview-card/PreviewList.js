import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewListItem from './PreviewListItem';
import {getCurrentColor} from '../../common-functions.js';

import {
  borderColor
} from '../../common-styles';

const Inner = styled.ul`
  margin-bottom: 15px;
  padding:0;
  margin: 0;
`;

const Item = styled.li`
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding-left: 17px;
  padding-bottom: 7px;
  border-bottom: 1px solid ${borderColor};

  & + & {
    margin-top: 10px;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 7px;
    height: 30px;
    width: 3px;
    background-color: ${props => props.markerColor};
  }
`;

const defaultProps = [
  {
    id: 'some id',
    category: 'income',
    name: 'some name string',
    cardNumber: 'some cardNumber string',
    sum: 'some sum number',
    currency: 'rub',
    link: '',
    date: '2019-06-09T15:03:23.000Z'
  }
]

export default function PreviewList({dataItems = defaultProps}){

  const getItems = () => {

    const getColor = getCurrentColor(dataItems[0].category);
    return dataItems.map(element => {
      return  <Item key={element.id} markerColor={getColor()}>
                <PreviewListItem 
                  title={element.name}
                  cardNumber={element.cardNumber}
                  sum={element.sum}
                  category={element.category}
                  note={element.note}
                />
              </Item>
    });
  };

  return (
    <Inner>
      {getItems()}
    </Inner>
  )
}

PreviewList.propTypes = {
  dataItems: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      category:  PropTypes.string.isRequired,
      name:  PropTypes.string.isRequired,
      cardNumber:  PropTypes.string.isRequired,
      sum:  PropTypes.number.isRequired,
      currency:  PropTypes.string.isRequired,
      link:  PropTypes.string.isRequired,
      date:  PropTypes.string.isRequired
    }
  ))
}
