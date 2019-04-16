import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

const AlertInner = styled.section`
  display: block;
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