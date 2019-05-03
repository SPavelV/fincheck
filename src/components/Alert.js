import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import {sortDateAlertsItem} from '../actions/'
import styled from 'styled-components';

import sortIcon from '../assets/images/icons/sort.svg'

import {
  PageInner,
  gutterDesktop,
  gutterMobile,
  mediaMinWidthDesktop,
  mediaMinWidthDesktopLarge,
  SectionTitle,
  SectionLinkTitle,
  borderColor,
  linkHoverColor,
  firstFont,
  linkColor,
  grayColor
} from '../common-styles';

const Inner = styled(PageInner)`
  position: relative;
  @media(min-width: ${mediaMinWidthDesktop}) {
    flex: 0 1 100%;
    max-width: 100%;
    margin: 0;
  }

  @media(min-width: ${mediaMinWidthDesktopLarge}) {
    flex: 0 1 32.5%;
    max-width: 32.5%;
  }
`;

const Header = styled.div`
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

const LinkTitle = styled(SectionLinkTitle)`
  @media(min-width: ${mediaMinWidthDesktopLarge}) { 
    display: none;
  }
`;

const List = styled.ul`
  padding: 0 28px 0 0;
  margin: 0;
  list-style-type: none;
  max-height: 180px;
  overflow-y: auto;


  @media(min-width: ${mediaMinWidthDesktop}) {
    max-height: none;
  }

  @media(min-width: ${mediaMinWidthDesktopLarge}) { 
    max-height: none;
  }
  
`;

const ListItem = styled.li`
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${props => props.isVisible ? 'block' : 'none'}
 
  & + & {
    margin-top: 3px;
  }

  @media(min-width: ${mediaMinWidthDesktop}) {
    max-width: none;

  }
`;

const ListLink = styled.a`
  font-family: ${firstFont};
  font-size: 13px;
  line-height: 16px;
  color: ${linkColor};
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  
  &:hover {
    color: ${linkHoverColor}
  }

  @media(min-width: ${mediaMinWidthDesktop}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const SortLink = styled.a`
  position: absolute;
  top: 55px;
  right: ${gutterMobile};

  svg {
    width: 18px;
    fill: ${grayColor};

    &:hover {
      fill: ${linkHoverColor};
    }
  }

  @media(min-width: ${mediaMinWidthDesktop}) {
    top: 65px;
    right: ${gutterDesktop};
  }
`;


class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isActive: true,
      isViewAllItems: false,
      initQtyElements: 3,
      isSorting: false,
      initData: this.props.data
    }
  }

  static propTypes = {
    dataAlerts: PropTypes.array.isRequired
  }

  static defaultPorps = {
    dataAlerts: [
      {
        id: "no data",
        href: "no data",
        text: "no data",
        date: "no data"
      }
    ]
  }

  handlerClickViewAllLink = (evt) => {
    evt.preventDefault();
    this.setState({
      isViewAllItems: !this.state.isViewAllItems
    })
  }

  getHeader = () => {
    return (
      <Header>
        <SectionTitle>Важно</SectionTitle>
        <LinkTitle 
          onClick={this.handlerClickViewAllLink} 
          href="">Смотреть все</LinkTitle>
      </Header> 
    )
  }

  getmaxQtyElements = (arrLength) => {
    const isLargeDisplay = window.matchMedia("(min-width: 1200px)").matches;
    
    return this.state.isViewAllItems ? arrLength : 
                      isLargeDisplay ? arrLength : this.state.initQtyElements;
  }

  getListAlert = (dataAlerts) => {
    const listItems =  dataAlerts.map( (item,i,arr) => {

      let maxQtyElements = this.getmaxQtyElements(arr.length);
  
      return <ListItem 
                key={item.id} 
                isVisible={i < maxQtyElements}>
                  <ListLink href={item.href}>
                    {item.text}
                  </ListLink>
              </ListItem>
    });
    return <List>
            {listItems}
          </List>
  }

  getSortLink = () => {
    return <SortLink onClick={this.handlerClickSortLink} href="this.props.href">
       <ReactSVG 
          evalScripts="always"
          src = {sortIcon}
          wrapper="span"
          />
    </SortLink>
  }

  handlerClickSortLink = (evt) => {
    evt.preventDefault();
    const {sortDateAlertsItem} = this.props;
    sortDateAlertsItem(this.state.isSorting)
    this.setState((prevState, props) => {
      return {
        isSorting: !prevState.isSorting
      }
    })
  }

  render() {
    const {dataAlerts} = this.props;
    return <Inner>
      {this.getSortLink()}
      {this.getHeader()}
      {this.getListAlert(dataAlerts)}
    </Inner>
  }
}
const mapStateToProps = state => ({
  dataAlerts: state.alerts
});
const mapDispatchToProps = {sortDateAlertsItem};

export default connect(mapStateToProps,mapDispatchToProps)(Alert);