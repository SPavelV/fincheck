import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecondHeader from '../components/SecondHeader';

const Inner = styled.div`
  display: block;
`;

export default function TransactionsDetail({
  dataTransaction=['no-data'],
  nameTransaction = 'transaction empty', 
  category='category empty'}){

  return (
    <Inner>
      <SecondHeader nameTransaction={nameTransaction} />
      <div>Transaction Detail list</div>
      <div>Transaction category: {category}</div>
      <div>Transaction name: {nameTransaction}</div>
    </Inner>
  )

}

TransactionsDetail.propTypes = {
  dataTransaction: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  nameTransaction: PropTypes.string.isRequired
}