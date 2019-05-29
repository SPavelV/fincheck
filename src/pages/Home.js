import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTransaction} from '../actions';
import {Link} from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import Alert from '../components/Alert';
import PreviewCard from '../components/preview-card/PreviewCard';
import AddTransaction from '../components/AddTransaction';
import {getTransactionData} from '../common-functions';
import styled from 'styled-components';


import {
    maxWidth,
    mediaMinWidthDesktop,
    mediaMinWidthDesktopLarge,
  } from '../common-styles';

const InnerCards = styled.div`
  @media(min-width: ${mediaMinWidthDesktop}) {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  }

  @media(min-width: ${mediaMinWidthDesktopLarge}) {
  justify-content: space-between;
  max-width: ${maxWidth};
  margin: 0 auto;
  }
`;

const Inner = styled.div`
   position: relative;
`;


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const {dataTransaction} = this.props;
        const dataIncome = getTransactionData(dataTransaction, 'income');
        const dataCosts = getTransactionData(dataTransaction, 'costs');

        return (
          <Inner>
              <MainHeader/>
              <InnerCards>
              <Alert/>
              <PreviewCard 
                sectionTitle="Доходы" 
                dataItems={dataIncome}/>
              <PreviewCard 
                sectionTitle="Расходы"
                dataItems={dataCosts}/>
              <AddTransaction/>
            </InnerCards> 
          </Inner>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  
const mapDispatchToProps = {addTransaction}

export default connect(mapStateToProps,mapDispatchToProps)(Home);