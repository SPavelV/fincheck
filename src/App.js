import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTransaction} from './actions';
import styled from 'styled-components';
import './assets/fonts/Eczar/stylesheet.css';
import './assets/fonts/Roboto/stylesheet.css';
import logo from './assets/images/icons/logo.svg';
import logoSmall from './assets/images/icons/purse.svg';
import MainNav from './components/main-nav/MainNav';
import Alert from './components/Alert';
import PreviewCard from './components/preview-card/PreviewCard';

import {
  maxWidth,
  gutterDesktop,
  gutterMobile,
  mediaMinWidthDesktop,
  mediaMinWidthDesktopLarge
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
  * {
    box-sizing: border-box;
  }
`

const HeaderLogo = styled.a`
  display: flex;
  background: url(${logoSmall}) no-repeat center;
  width: 19px;
  height: 19px;

  @media(min-width: 768px) {
    background: url(${logo}) no-repeat center;
    width: 100px;
  }
`

const InnerCards = styled.div`
   @media(min-width: ${mediaMinWidthDesktop}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
   }

   @media(min-width: ${mediaMinWidthDesktopLarge}) {
    justify-content: space-between;
    max-width: ${maxWidth};
    margin: 0 auto;
   }
`;

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

  getIncomData(data, typeTransaction) {
    return data.filter(element=> element.category === typeTransaction);
  }

  render() {
    if(this.state.error) {
      return (
        <div className="app">
          {/* <ErrorMessage error={this.state.error}/> */}
        </div>
      );
    }

    const {dataTransaction} = this.props;
    const dataIncome = this.getIncomData(dataTransaction, 'income');
    const dataCosts = this.getIncomData(dataTransaction, 'costs');

    return (
      <AppContainer className="app">
        <Header className="app__header">
            <HeaderLogo href="/" className="app__logo"/>
          <MainNav />
        </Header>
         
        <InnerCards>
          <Alert/>
          <PreviewCard 
            sectionTitle="Доходы" 
            totalSum={5000000}
            dataItems={dataIncome}/>
          <PreviewCard 
            sectionTitle="Расходы"
            totalSum={200000}
            dataItems={dataCosts}/>
        </InnerCards>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  dataTransaction: state.transactions
})

const mapDispatchToProps = {addTransaction}

export default connect(mapStateToProps,mapDispatchToProps)(App);