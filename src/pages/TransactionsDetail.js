import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecondHeader from '../components/SecondHeader';
import lazyLoading from '../decorators/lazyLoading';

const Inner = styled.div`
  display: block;
`;

class TransactionsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: this.getCurrentTransaction(this.props.dataTransaction),
      detailData: this.getDetailDataTransactions(this.props.dataTransaction)
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
    const {idTransaction} = this.props;
    return (
      <Inner>
        <SecondHeader transactionName={this.state.transaction.name} />
        <div>Transaction Detail list</div>
        <div>Transaction category: {this.state.transaction.category}</div>
        <div>Transaction id: {idTransaction}</div>
      </Inner>
    )
  }

}


const mapStateToProps = state => ({
  dataTransaction: state.transactions
})


export default connect(mapStateToProps)(TransactionsDetail);