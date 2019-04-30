import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewListItem from './PreviewListItem';
import {
  greenColorArr,
  redColorArr,
  greenDarkColor,
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
    background-color: ${greenDarkColor};
  }
`;

export default function PreviewList({data}){
  return (
    <Inner>
      <Item>
        <PreviewListItem 
          title="Зарплата"
          color={greenColorArr[0]}
          cardNumber={'0000111122223333'}
          sum={1555999000}
        />
      </Item>
      <Item>
        <PreviewListItem 
          title="Зарплата"
          color={greenColorArr[0]}
          cardNumber={'0000111122223333'}
          sum={1555999000}
        />
      </Item>
      <Item>
        <PreviewListItem 
          title="Зарплата"
          color={greenColorArr[0]}
          cardNumber={'0000111122223333'}
          sum={1555999000}
        />
      </Item>
    </Inner>
  )
}

