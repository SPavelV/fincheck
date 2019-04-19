import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  maxWidth,
  gutterDesktop,
  gutterMobile,
  mediaMinWidthDesktop,
  SectionTitle,
  SectionLinkTitle,
  borderColor,
  bgSectionColor,
  sectionShadow,
  linkHoverColor,
  firstFont,
  linkColor
} from '../common-styles';

const AlertInner = styled.section`
  padding: ${gutterMobile};
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  background-color: ${bgSectionColor}
  box-shadow: ${sectionShadow};

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

const AlertHeader = styled.div`
  margin-bottom: 10px;
  padding-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderColor};

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding-bottom: 12px;
    margin-bottom: 15px;
  }
`;

const AlertList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const AlertListItem = styled.li`

`;

const AlertListLink = styled.a`
  font-family: ${firstFont};
  font-size: 13px;
  line-height: 16px;
  color: ${linkColor};
  text-decoration: none;
  
  &:hover {
    color: ${linkHoverColor}
  }

  @media(min-width: ${mediaMinWidthDesktop}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const dataAlertList =[
  {
    id: "Alert1",
    href: "/Alert",
    text: "Пополнить баланс кредитной карты Альфа Банк"
  },        
  {
    id: "Alert2",
    href: "/Alert2",
    text: "Отложить 10% от дохода на депозитный счет"
  },
  {
    id: "Alert3",
    href: "/Alert4",
    text: "Заплатить штраф за превышение скорости"
  }
]

export default class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isActive: true
    }
  }

  static propTypes = {
    dataAlertList: PropTypes.array
  }

  static defaultPorps = {
    dataAlertList: [
      {
        id: "no data",
        href: "no data",
        text: "no data"
      }
    ]
  }

  getHeader = () => {
    return (
      <AlertHeader>
        <SectionTitle>Важно</SectionTitle>
        <SectionLinkTitle href="">Смотреть все</SectionLinkTitle>
      </AlertHeader> 
    )
  }

  getListAlert = () => {
    const listItems =  dataAlertList.map(item => {
      return <AlertListItem key={item.id}>
                <AlertListLink href={item.href}>
                  {item.text}
                </AlertListLink>
              </AlertListItem>
    });
    return <AlertList>
            {listItems}
          </AlertList>
  }

  render() {
    return <AlertInner>
      {this.getHeader()}
      {this.getListAlert()}
    </AlertInner>
  }
}