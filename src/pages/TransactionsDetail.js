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

class TransactionsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: this.getCurrentTransaction(this.props.dataTransaction),
      detailData: this.props.dataTransaction
    }
  }

  static propTypes = {
    dataTransaction: PropTypes.array.isRequired,
    idTransaction: PropTypes.string.isRequired
  }

  static defaultPorps = {
    idTransaction: 'some id',
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
    ]
  }

  getCurrentTransaction(data) {
    return data.filter(element => element.id === this.props.idTransaction)[0];
  }

  getDetailDataTransactions(data) { 
    const currTransaction = data.filter(element => element.id === this.props.idTransaction)[0];
    return data.filter(element => currTransaction.category === element.category && currTransaction.name === element.name);
  }


  render() {
    const {idTransaction,dataList,addPrealoader} = this.props;

    return (
      <Inner>
        <SecondHeader transactionName={this.state.transaction.name} />
        <div>Transaction Detail list</div>
        <div>Transaction category: {this.state.transaction.category}</div>
        <div>Transaction id: {idTransaction}</div>


        <InnerTransactionList >
          <PreviewList dataItems={dataList} />
          {addPrealoader()}
        </InnerTransactionList>
      </Inner>
    )
  }

}


const mapStateToProps = state => ({
  dataTransaction: state.transactions
})


export default connect(mapStateToProps)(lazyLoading(TransactionsDetail));