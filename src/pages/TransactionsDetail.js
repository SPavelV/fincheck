import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  pageInner,
  sectionInnerTransparent,
  mediaMinWidthDesktop
} from '../common-styles';

const Inner = styled.div`
  display: block;
`;

export default class TransactionsDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static propTypes = {
    dataTransaction: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    nameTransaction: PropTypes.string.isRequired
  }

  static dafaultProps ={
    dataTransaction: [
      {
        id: "no data",
        category: "no data",
        name: "no data",
        cardNumber: "no data",
        sum: 0,
        currency: "no data",
        link: "no data",
        date: "no data", 
        note: "no data"
      }
    ],
    type: 'type empty',
    nameTransaction: 'transaction empty'
  }

  render() {
    return (
      <Inner>
        <div>Transaction Detail list</div>
        <div>Transaction category: {this.props.category}</div>
        <div>Transaction name: {this.props.nameTransaction}</div>
      </Inner>
    )
  }
}