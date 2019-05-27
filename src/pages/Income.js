import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData,sortByDate} from '../common-functions';
import PieChart from '../components/PieChart';
import PreviewList from '../components/preview-card/PreviewList';
import TotalSum from '../components/TotalSum';


import {
    PageInner,
    SectionInnerTransparent,
    mediaMinWidthDesktop

} from '../common-styles';

const Inner = styled(SectionInnerTransparent)`
     @media(min-width: ${mediaMinWidthDesktop}) {
         display: flex;
         flex-flow: row nowrap;
         align-items: center;
         justify-content: space-between;
     }
`;

const InnerTransactionList = styled(PageInner)`
      @media(min-width: ${mediaMinWidthDesktop}) {
       flex: 0 1 50%;
    }
`;

const ChartInner = styled.section`
    position: relative;
    display: block;
    margin-bottom: 20px;

    @media(min-width: ${mediaMinWidthDesktop}) {
        flex: 0 1 50%;
        margin-bottom: 0;
    }
`;

const TotulSumInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        const {dataTransaction} = this.props;
        const dataIncome = getTransactionData(dataTransaction, 'income');

        
        return(
            <Inner>
                <ChartInner>
                    <PieChart
                        transactionType={'income'}
                        chartData={dataIncome}
                    />
                    <TotulSumInner>
                        <TotalSum valuesArr={dataIncome}/>
                    </TotulSumInner>
                </ChartInner>
                <InnerTransactionList>
                    <PreviewList dataItems={sortByDate(dataIncome)} />
                </InnerTransactionList>
            </Inner>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  

export default connect(mapStateToProps)(Income);
