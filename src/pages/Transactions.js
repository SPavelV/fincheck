import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataList: getRightAmountData(getTransactionData(props.dataTransaction, this.props.typeTransaction), 14),
        }
        this.triggerLoading = React.createRef();
    }

    static propTypes = {
        typeTransaction: PropTypes.string.isRequired,
        dataTransaction: PropTypes.array.isRequired
    }

    static defaultPorps = {
        typeTransaction: 'income',
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


    loadData() {
        const newItems =  getRightAmountData(getTransactionData(this.props.dataTransaction, this.props.typeTransaction), 5, this.state.dataList.length);
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
        const dataType = getTransactionData(dataTransaction, this.props.typeTransaction);
        const lastMonthItems = getRightAmountData(dataType, 31);
        
        return(

            <Inner>

                <MainHeader/>
                <InnerTransactions>
                    <ChartInner>
                        <PieChart
                            transactionType={this.props.typeTransaction}
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
                </InnerTransactions>
            </Inner>
        )
    }
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions
  })
  

export default connect(mapStateToProps)(lazyLoading(Transactions));
