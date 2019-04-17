import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import './assets/fonts/Eczar/stylesheet.css';
import './assets/fonts/Roboto/stylesheet.css';
import logo from './assets/images/icons/logo.svg';
import logoSmall from './assets/images/icons/purse.svg';
import MainNav from './components/main-nav/MainNav';
import Alert from './components/Alert'


import {maxWidth,gutterDesktop,gutterMobile,mediaMinWidthDesktop} from './common-styles';


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
        <Header className="app__header">
            <HeaderLogo href="/" className="app__logo"/>
          <MainNav />
        
        </Header>
        <Alert/>
      </AppContainer>
    );
  }
}

export default App;