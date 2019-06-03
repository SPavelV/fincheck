import React from 'react';
import {connect} from 'react-redux';
import {createDataTransactionDetail} from '../actions/'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData,sortByDate,getRightAmountData} from '../common-functions';
import lazyLoading from '../decorators/lazyLoading';


import MainHeader from '../components/MainHeader'
import PieChart from '../components/PieChart';
import PreviewList from '../components/preview-card/PreviewList';
import TotalSum from '../components/TotalSum';


import {
    PageInner,
    SectionInnerTransparent,
    mediaMinWidthDesktop

} from '../common-styles';

const Inner = styled.div`
   position: relative;
`;

const InnerTransactions = styled(SectionInnerTransparent)`
     @media(min-width: ${mediaMinWidthDesktop}) {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        align-items: flex-start;
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

function Transactions({typeTransaction,dataTransaction,dataList,addPrealoader,createDataTransactionDetail}) {
   
    const dataType = getTransactionData(dataTransaction, typeTransaction);
    const lastMonthItems = getRightAmountData(dataType, 31);

    return(
        <Inner>
            <MainHeader/>
            <InnerTransactions>
                <ChartInner>
                    <PieChart
                        transactionType={typeTransaction}
                        chartData={lastMonthItems}
                    />
                    <TotulSumInner>
                        <TotalSum valuesArr={lastMonthItems}/>
                    </TotulSumInner>
                </ChartInner>
                <InnerTransactionList >
                    <PreviewList 
                        dataItems={ getTransactionData(dataTransaction, typeTransaction)} 
                        createDataTransactionDetail={createDataTransactionDetail} />
                    {addPrealoader()}
                </InnerTransactionList>
            </InnerTransactions>
        </Inner>
    )
}

Transactions.propTypes = {
    typeTransaction: PropTypes.string.isRequired,
    dataTransaction: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })


export default connect(mapStateToProps,createDataTransactionDetail)(lazyLoading(Transactions));
