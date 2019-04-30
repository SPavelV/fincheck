import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import ChartLine from './ChartLine';
import TotalSum from './TotalSum';
import PreviewList from './PreviewList';

import styled from 'styled-components';

import  {
  PageInner,
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
  linkColor,
  grayColor
} from '../../common-styles';

const Inner = styled(PageInner)`
  margin-top: 5px;

  @media(min-width: ${mediaMinWidthDesktop}) {
    margin-top: 10px;
  }
`;


const dataIncomeLineChart = [
  {
    uv: 1000,
    pv: 2000,
    amt: 3000,
    lm: 2000
  }
]


class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps ={
    data: [
      {
        id: "no data",
        href: "no data",
        text: "no data",
        date: "no data"
      }
    ]
  }

  render() {

    return (
      <Inner {...this.props}>
        <SectionTitle>{this.props.sectionTitle}</SectionTitle>
        <TotalSum value={5000000}/>
        <ChartLine chartType="income" chartData={dataIncomeLineChart} />
        <PreviewList/>

      </Inner>
    )
  }
}

export default PreviewCard;