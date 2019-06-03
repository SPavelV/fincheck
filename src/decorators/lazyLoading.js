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
        loading: false
    }
    this.triggerLoading = React.createRef();
    this.addPrealoader = this.addPrealoader.bind(this);
  }

  static propTypes = {
    typeTransaction: PropTypes.string.isRequired
  }

    
  loadData() {
    // console.log( this.props.dataTransaction);
    // this.props.createDataTransactionDetail({
    //   category: this.props.dataTransaction[0].catyegory,
    //   name: this.props.dataTransaction[0].name
    // })
    // console.log( this.props.dataTransaction);
    // this.props.createDataTransactionDetail({
    //   category: this.props.dataTransaction[0].catyegory,
    //   name: this.props.dataTransaction[0].name
    // })
  }

  observerEvent(){
    console.log('---observer:',);
    this.props.observeCallback()
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
              this.observerEvent();
          }
      })
    }, config)

    observer.observe(this.triggerLoading.current);
  }

  componentDidMount() {
    // if(!Array.isArray(this.state.dataList) || this.state.dataList.length === 0) return;
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

    // if(!Array.isArray(this.state.dataList) || this.state.dataList.length === 0) {
    //   console.log('---data is not array or arr.length = 0')
    //   return <OriginalComponent {...this.props}/>;
    // } 

    return <OriginalComponent {...this.props} 
      addPrealoader={this.addPrealoader}
      />
  }
}