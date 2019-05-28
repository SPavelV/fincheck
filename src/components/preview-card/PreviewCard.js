import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';
import TotalSum from './TotalSum';
import PreviewList from './PreviewList';
import {getDataToChart,separateValue,getArrValues,getSum} from '../../common-functions';

import styled from 'styled-components';

import  {
  PageInner,
  mediaMinWidthDesktop,
  SectionTitle,
  robotoFont,
  blackColor,
  linkHoverColor,
  mediaMinWidthDesktopLarge
} from '../../common-styles';

const Inner = styled(PageInner)`
  margin-top: 5px;

  @media(min-width: ${mediaMinWidthDesktop}) {
    margin-top: 10px;
    flex: 0 1 49.5%;
    max-width: 49.5%;
  }

  @media(min-width: ${mediaMinWidthDesktopLarge}) {
    flex: 0 1 32.5%;
    max-width: 32.5%;
    margin-top: 0;
  }

  & + & {
    @media(min-width: ${mediaMinWidthDesktop}) {
      margin-left: 1%;
    }

    @media(min-width: ${mediaMinWidthDesktopLarge}) {
      margin: 0;
    }
    
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


export default function PreviewCard ({dataItems = [0], sectionTitle='Some Title'}){


  return (
    <Inner>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <TotalSum value={ getSum(getArrValues(dataItems,'sum'), separateValue)}/>
      <ChartLine 
      transactionType={dataItems[0].category} 
      chartData={getDataToChart(dataItems, 4)} />
      <PreviewList dataItems={dataItems} maxItems={4} />
      <ViewAllLink href="#">Cмотреть все</ViewAllLink>
    </Inner>
  )
}

PreviewCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired
}
