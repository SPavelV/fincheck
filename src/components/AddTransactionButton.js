import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


import {
  robotoFont,
  bgSectionColor,
  blackColor,
  linkHoverColor,
  linkActive,
  mediaMinWidthDesktop
} from '../common-styles';

const Inner = styled.div`
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
  background-color: transparent;
  font-family: ${robotoFont};

  @media(min-width: ${mediaMinWidthDesktop}) {
    position: static;
    margin-top: 30px;
  }
`;

const ButtonAdd = styled(Link)`
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
  background-color: ${bgSectionColor};
  text-decoration: none;

  &:hover {
    color: ${linkHoverColor};
  }

  &:active {
    color: ${linkActive};
  }
`;

export default function AddTransactionButton ({buttonText = "Добавить"}) {
  return (
    <Inner>
      <ButtonAdd to="/add-transaction/">{buttonText}</ButtonAdd>
    </Inner>
  )
}

AddTransactionButton.propTypes = {
  buttonText: PropTypes.string.isRequired
}