import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import './assets/fonts/Eczar/stylesheet.css';
import './assets/fonts/Roboto/stylesheet.css';
import logo from './assets/images/icons/logo.svg';
import logoSmall from './assets/images/icons/purse.svg';
import MainNav from './components/main-nav/MainNav';
import Alert from './components/Alert';
import PreviewCard from './components/preview-card/PreviewCard';


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


const dataIncome = [
  {
    id: 'income1',
    category: 'income',
    name: 'Зарплата',
    cardNumber: '3333444455553333',
    sum: 1500000,
    currency: 'rub',
    link: '',
    date: '2019-06-09T15:03:23.000Z'
  },
  {
    id: 'income2',
    category: 'income',
    name: 'Фриланс',
    cardNumber: '0000444455554444',
    sum: 100000,
    currency: 'rub',
    link: '',
    date: '2019-05-09T18:03:23.000Z'
  },
  {
    id: 'income3',
    category: 'income',
    name: 'Кредит',
    cardNumber: '0000444455552222',
    sum: 200000,
    currency: 'rub',
    link: '',
    date: '2019-04-02T11:03:23.000Z'
  },
  {
    id: 'income4',
    category: 'income',
    name: 'Подарки',
    cardNumber: '0000444455553333',
    sum: 200000,
    currency: 'rub',
    link: '',
    date: '2019-04-02T11:03:23.000Z'
  }
]


const dataCosts = [
  {
    id: 'costs1',
    category: 'costs',
    name: 'Автокредит',
    cardNumber: '3333444455553333',
    sum: 150000,
    currency: 'rub',
    link: '',
    date: '2019-06-09T15:03:23.000Z'
  },
  {
    id: 'costs2',
    category: 'costs',
    name: 'Диван',
    cardNumber: '0000444455554444',
    sum: 35000,
    currency: 'rub',
    link: '',
    date: '2019-05-09T18:03:23.000Z'
  },
  {
    id: 'costs3',
    category: 'costs',
    name: 'Учеба',
    cardNumber: '0000444455552222',
    sum: 15000,
    currency: 'rub',
    link: '',
    date: '2019-04-02T11:03:23.000Z'
  },
  {
    id: 'costs4',
    category: 'costs',
    name: 'Бензин',
    cardNumber: '0000444455553333',
    sum: 2000,
    currency: 'rub',
    link: '',
    date: '2019-04-02T11:03:23.000Z'
  }
]


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
        <PreviewCard sectionTitle="Доходы" totalSum={5000000} dataItems={dataIncome}/>
        <PreviewCard sectionTitle="Расходы" totalSum={200000}  dataItems={dataCosts}/>
      </AppContainer>
    );
  }
}

export default App;