import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData,sortByDate,getRightAmountData} from '../common-functions';
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
         @media(min-width: ${mediaMinWidthDesktop}) {
             align-items: flex-start;
         }
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

const TriggerLoading = styled.div`
    opacity: 0;
    height: 1px;
    width: 1px;
    position: absolute;
`;

const LoadingData = styled.div`
    font-size: 25px;
    text-align: center;
    
`;

export class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataList: getRightAmountData(props.dataTransaction, 14),
        }
        this.triggerLoading = React.createRef();
    }

    loadData() {
        const newItems =  getRightAmountData(this.props.dataTransaction, 5, this.state.dataList.length);
        if (newItems.length === 0) return;
    
        this.setState((state, props) => {
            return {
                dataList: [...state.dataList, ...newItems],
                loading: true
            }
        },  () => this.setState({loading: false}) )
    }

    addObserver() {
        const config = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
    
      const observer  = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                this.loadData();
            }
        })
      }, config)

      observer.observe(this.triggerLoading.current);
    }

    componentDidMount() {
        this.addObserver();
    }

    render() {

        const {dataTransaction} = this.props;
        const lastMonthItems = getRightAmountData(dataTransaction, 31);
        
        return(
            <Inner>
                <ChartInner>
                    <PieChart
                        transactionType={'income'}
                        chartData={lastMonthItems}
                    />
                    <TotulSumInner>
                        <TotalSum valuesArr={lastMonthItems}/>
                    </TotulSumInner>
                </ChartInner>
                <InnerTransactionList >
                    <PreviewList dataItems={sortByDate(this.state.dataList)} />
                    <TriggerLoading ref={this.triggerLoading}/>
                    {this.state.loading ? <LoadingData>Загрузка данных</LoadingData> : ''}
                </InnerTransactionList>
            </Inner>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: getTransactionData(state.transactions, 'income')
  })
  

export default connect(mapStateToProps)(Income);
