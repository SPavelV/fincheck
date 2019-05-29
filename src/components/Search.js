import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import searchIcon from '../assets/images/icons/search.svg';

import {
  gutterMobile,
  gutterDesktop,
  mediaMinWidthDesktop
} from '../common-styles';

const Inner = styled.section`
  .search-icon {
    width: 38px;
    height: 38px;
  }
`;

const InputSearch = styled.input`
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  top: ${gutterMobile};
  padding: 10px;
  height: 40px;
  display: ${props => props.isActive ? 'block' : 'none'}

  @media(min-width: ${mediaMinWidthDesktop}) {
    top: ${gutterDesktop};
  }
`;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isActive: false
    }
  }

  toggleSearch() {
    this.setState((state) => {
      return {
        isActive: !this.state.isActive
      }
    })
  }

  inputHandler(evt) {
    const inputValue = evt.target.value;
    this.setState(() => {
      return {inputValue}
    });
    console.log('input value:', this.state.inputValue) 
  }

  handlerInputBlur(evt) {
    if(evt.target === this.openSearchRef.current) return;
    this.setState(() => {
      return {isActive: false}
    });
  }

  render() {
    return (
      <Inner>

        <label for="search"
               onClick={()=> this.toggleSearch()}>
          <ReactSVG
            evalScripts="always"
            src = {searchIcon}
            wrapper="div"
            svgClassName="search-icon"/>
        </label>
        
        <InputSearch id="search" 
                     isActive={this.state.isActive} 
                     type="text"
                     value={this.state.inputValue}
                     onChange={(evt) => this.inputHandler(evt)}/>
      </Inner>
    )
  }
  
}