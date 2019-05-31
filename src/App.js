import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import styled from 'styled-components';
import './assets/fonts/Eczar/stylesheet.css';
import './assets/fonts/Roboto/stylesheet.css';
import logo from './assets/images/icons/logo.svg';
import logoSmall from './assets/images/icons/purse.svg';
import MainNav from './components/main-nav/MainNav';

import Home from './pages/Home.js';
import Transactions from './pages/Transactions.js';
import TransactionsDetail from './pages/TransactionsDetail.js';

import {
  maxWidth,
  gutterDesktop,
  gutterMobile,
  mediaMinWidthDesktop
} from './common-styles';

const Header = styled.header`
  padding: ${gutterMobile};
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

const AppContainer = styled.div`
  padding-bottom: 75px;
  * {
    box-sizing: border-box;
  }
`

const HeaderLogo = styled.div`
  display: flex;
  background: url(${logoSmall}) no-repeat center;
  width: 19px;
  height: 19px;

  @media(min-width: 768px) {
    background: url(${logo}) no-repeat center;
    width: 100px;
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
                 render={() => <Transactions typeTransaction = {"income"}/>} 
                 exact/>
          <Route path="/costs/" 
                 render={() => <Transactions typeTransaction = {"costs"}/>} 
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

export default App;