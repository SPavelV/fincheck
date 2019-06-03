import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createDataTransactionDetail} from './actions/'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import styled from 'styled-components';
import './assets/fonts/Eczar/stylesheet.css';
import './assets/fonts/Roboto/stylesheet.css';
import logo from './assets/images/icons/logo.svg';
import logoSmall from './assets/images/icons/purse.svg';

import Home from './pages/Home.js';
import Transactions from './pages/Transactions.js';
import TransactionsDetail from './pages/TransactionsDetail.js';

import {
  maxWidth,
  gutterDesktop,
  gutterMobile,
  mediaMinWidthDesktop
} from './common-styles';

const AppContainer = styled.div`
  padding-bottom: 75px;
  * {
    box-sizing: border-box;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false
    }
  }

  static propTypes = {
    children: PropTypes.node
  };

  componentDidCatch(err, info) {
    console.error(err);
    console.error(info);
    this.setState(() => ({
      error: err
    }));
  }


  render() {
    if(this.state.error) {
      return (
        <div className="app">
          {/* <ErrorMessage error={this.state.error}/> */}
        </div>
      );
    }

    return (
      <AppContainer className="app">
        <Router>
         
          <Route path="/" component={Home} exact/>
          <Route path="/income/" 
                 render={() => <Transactions typeTransaction = {"income"} observeCallback = {createDataTransactionDetail}/>} 
                 exact/>
          <Route path="/costs/" 
                 render={() => <Transactions typeTransaction = {"costs"} observeCallback = {createDataTransactionDetail}/>} 
                 exact/>
          <Route path="/income-list/:id"
                 render= { ({match}) => {
                   const {id} = match.params;
                   return <TransactionsDetail 
                    idTransaction ={id} 
                    typeTransaction={'income'}/>
                 } }
                 />
          <Route path="/costs-list/:id"
                render= { ({match}) => {
                  const {id} = match.params;
                  return <TransactionsDetail 
                    idTransaction ={id}  
                    typeTransaction={'costs'}/>
                } }
                />
        </Router>
        
      </AppContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDataTransactionDetail: (payload) => dispatch(createDataTransactionDetail(payload))
  }
}


export default connect(()=>({}), mapDispatchToProps)(App);