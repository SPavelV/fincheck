import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData,getDataToChart} from '../common-functions'
import PieChart from '../components/PieChart';
import PreviewList from '../components/preview-card/PreviewList'

import {
    PageInner,
    SectionInnerTransparent

} from '../common-styles';

const Inner = styled(PageInner)`

`;

const ChartInner = styled.section`
    display: block;
    margin-bottom: 20px;
`;

export class Costs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        const {dataTransaction} = this.props;
        const dataIncome = getTransactionData(dataTransaction, 'costs');

        return(
            <SectionInnerTransparent>
                <ChartInner>
                    <PieChart
                            transactionType={dataIncome[0].category}
                            chartData={getDataToChart(dataIncome, undefined, 'pie')}
                        />
                </ChartInner>
                <Inner>
                    <PreviewList dataItems={dataIncome} />
                </Inner>
            </SectionInnerTransparent>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  

export default connect(mapStateToProps)(Costs);
