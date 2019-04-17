import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {maxWidth,gutterDesktop,gutterMobile,mediaMinWidthDesktop} from '../common-styles';

const AlertInner = styled.section`
  padding: ${gutterMobile};
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

const AlertHeader = styled.div`
  display: flex;
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
        <span>Важно</span>
        <a href="">Смотреть все</a>
      </AlertHeader> 
    )
  }

  render() {
    return <AlertInner>
      {this.getHeader()}
    </AlertInner>
  }
}