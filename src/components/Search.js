import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import searchIcon from '../assets/images/icons/search.svg';

const Inner = styled.section`
  .search-icon {
    width: 38px;
    height: 38px;
  }
`;

export default function Search() {

  return (
    <Inner>
      <ReactSVG
         evalScripts="always"
         src = {searchIcon}
         wrapper="div"
         svgClassName="search-icon"/>
    </Inner>
  )
}