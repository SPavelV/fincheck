import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData} from '../common-functions'
import PreviewList from '../components/preview-card/PreviewList'

import {
    PageInner,
    SectionInnerTransparent

} from '../common-styles';

const Inner = styled(PageInner)`

`;

const CircleChart = styled.section`
    display: block;
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
            <SectionInnerTransparent>
                <CircleChart>Circle Chart</CircleChart>
                <Inner>
                    <div className="income">Доходы</div>
                    <PreviewList dataItems={dataIncome} />
                </Inner>
            </SectionInnerTransparent>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  

export default connect(mapStateToProps)(Income);
