import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';
import TotalSum from './TotalSum';
import PreviewList from './PreviewList';

import styled from 'styled-components';

import  {
  PageInner,
  mediaMinWidthDesktop,
  SectionTitle,
  robotoFont,
  blackColor,
  linkHoverColor
} from '../../common-styles';

const Inner = styled(PageInner)`
  margin-top: 5px;

  @media(min-width: ${mediaMinWidthDesktop}) {
    margin-top: 10px;
  }
`;

const ViewAllLink = styled.a`
  display: block;
  width: 100%;
  margin-top: 15px;
  font-family: ${robotoFont};
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${blackColor};
  text-align: center;

  @media(min-width: ${mediaMinWidthDesktop}) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 14px;
  }

  &:hover{
    color: ${linkHoverColor};
  }
`;


class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  static propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    totalSum: PropTypes.number.isRequired
  }

  static defaultProps ={
    sectionTitle:'Some Title',
    totalSum: 0
  }

  getDataToChart(data) {
    const dataChart = {};
    data.forEach(element => {
      dataChart[element.name] = element.sum;
    })
    return [dataChart];
  }

  render() {
    return (
      <Inner {...this.props}>
        <SectionTitle>{this.props.sectionTitle}</SectionTitle>
        <TotalSum value={this.props.totalSum}/>
        <ChartLine 
        transactionType={this.props.dataItems[0].category} 
        chartData={this.getDataToChart(this.props.dataItems)} />
        <PreviewList dataItems={this.props.dataItems} />
        <ViewAllLink href="#">Cмотреть все</ViewAllLink>
      </Inner>
    )
  }
}

export default PreviewCard;