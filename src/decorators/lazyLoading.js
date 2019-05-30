import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getTransactionData,sortByDate,getRightAmountData} from '../common-functions';


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

export default(OriginalComponent) => class WrappedComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        dataList: getRightAmountData(getTransactionData(props.dataTransaction, this.props.typeTransaction), 14),
    }
    this.triggerLoading = React.createRef();
    this.addPrealoader = this.addPrealoader.bind(this);
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

  addPrealoader(){
    return (
      <div>
        <TriggerLoading ref={this.triggerLoading}/>
        {this.state.loading ? <LoadingData>Загрузка данных</LoadingData> : ''}
      </div>
    )
  
  }


  render() {
    
    return <OriginalComponent {...this.props} 
      dataList={sortByDate(this.state.dataList)}
      addPrealoader={this.addPrealoader}
      />
  }
}