import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  robotoFont,
  bgSectionColor,
  blackColor
} from '../common-styles';

const Inner = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: ${bgSectionColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.25);
  font-family: ${robotoFont};
`;

const ButtonAdd = styled.button`
  width: 156px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${blackColor};
  box-shadow: 0px 1px 3px 
              rgba(0, 0, 0, 0.2), 
              0px 2px 2px rgba(0, 0, 0, 0.12), 
              0px 0px 2px rgba(0, 0, 0, 0.14);
  border-radius: 22.5px;
  text-transform: uppercase;
  border: 0;
`;

class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Inner>
        <ButtonAdd>Добавить</ButtonAdd>
      </Inner>
    )
  }
}

export default AddTransaction