import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecondHeader from '../components/SecondHeader';
import lazyLoading from '../decorators/lazyLoading';
import {getTransactionData,sortByDate,getRightAmountData} from '../common-functions';

import PreviewList from '../components/preview-card/PreviewList';

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

function TransactionsDetail({idTransaction='some id',typeTransaction='income', dataList, addPrealoader}){
  console.log(dataList)

    return (
      <Inner>
        <SecondHeader transactionName={dataList[0].name} />
        <div>Transaction Detail list</div>
        <div>Transaction category: {dataList[0].category}</div>
        <div>Transaction id: {idTransaction}</div>

        <InnerTransactionList >
          <PreviewList dataItems={dataList} />
          {addPrealoader()}
        </InnerTransactionList>
      </Inner>
    )
  
}

const mapStateToProps = state => ({
  dataTransaction: state.detailTransaction
})

export default connect(mapStateToProps)(lazyLoading(TransactionsDetail));