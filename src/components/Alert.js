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
  sectionShadow
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderColor};

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding-bottom: 5px;
  }
`

export default class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isActive: true
    }
  }

  getHeader = () => {
    return (
      <AlertHeader>
        <SectionTitle>Важно</SectionTitle>
        <SectionLinkTitle href="">Смотреть все</SectionLinkTitle>
      </AlertHeader> 
    )
  }

  render() {
    return <AlertInner>
      {this.getHeader()}
    </AlertInner>
  }
}