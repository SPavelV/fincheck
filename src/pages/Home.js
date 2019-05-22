import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTransaction} from '../actions';
import Alert from '../components/Alert';
import PreviewCard from '../components/preview-card/PreviewCard';
import styled from 'styled-components';
import {getTransactionData} from '../common-functions';


import {
    maxWidth,
    gutterDesktop,
    gutterMobile,
    mediaMinWidthDesktop,
    mediaMinWidthDesktopLarge
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
             <InnerCards>
              <Alert/>
              <PreviewCard 
                sectionTitle="Доходы" 
                totalSum={5000000}
                dataItems={dataIncome}/>
              <PreviewCard 
                sectionTitle="Расходы"
                totalSum={200000}
                dataItems={dataCosts}/>
            </InnerCards> 
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  
const mapDispatchToProps = {addTransaction}

export default connect(mapStateToProps,mapDispatchToProps)(Home);