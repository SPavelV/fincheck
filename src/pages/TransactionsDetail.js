import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecondHeader from '../components/SecondHeader';
import lazyLoading from '../decorators/lazyLoading';

import TransactionDetailList from '../components/TransactionDetailList';

import {
  PageInner,
  SectionInnerTransparent,
  mediaMinWidthDesktop

} from '../common-styles';

const Inner = styled.div`
  display: block;
`;

const InnerTransactionList = styled(PageInner)`
      @media(min-width: ${mediaMinWidthDesktop}) {
       flex: 0 1 50%;
    }
`;

function TransactionsDetail({idTransaction='some id',typeTransaction='income', dataTransaction, addPrealoader}){
  if(!Array.isArray(dataTransaction) || dataTransaction.length === 0) {
    return (
      <Inner>
        <SecondHeader transactionName={"no data"} />
      </Inner>
    )
  };

  return (
    <Inner>
      <SecondHeader transactionName={dataTransaction[0].name} />
      <InnerTransactionList >
        <TransactionDetailList dataItems={dataTransaction} />
        {/* {addPrealoader()} */}
      </InnerTransactionList>
    </Inner>
  )
  
}

const mapStateToProps = state => ({
  dataTransaction: state.detailTransaction
})



export default connect(mapStateToProps)(TransactionsDetail);