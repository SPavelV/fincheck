import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import searchIcon from '../assets/images/icons/search.svg';
import {createDataSearchDetail,deleteDataSearchDetail,createDataTransactionDetailAfterSearch} from '../actions';

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

class Search extends Component {
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

  createCurrentData() {
    const {category,name} = this.props.selectTransactionItem;
    this.props.createDataSearchDetail({category,name});
  }

  inputHandler(evt) {
    const inputValue = evt.target.value;
    const {category, name} = this.props.selectTransactionItem;
    this.setState(() => {
      return {inputValue}
    }, () => this.props.createDataTransactionDetailAfterSearch( {inputValue:this.state.inputValue,category, name} ));
    // console.log('input value:', this.state.inputValue);
    
    
  }

  componentDidMount() {
    this.createCurrentData();
  }

  componentWillUnmount() {
    this.props.deleteDataSearchDetail();
  }

  render() {
    return (
      <Inner>

        <label htmlFor="search"
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
                     onChange={(evt) => this.inputHandler(evt)}
                     />
      </Inner>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectTransactionItem: state.selectTransactionItem,
    detailTransaction: state.detailTransaction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDataSearchDetail: (payload) => dispatch(createDataSearchDetail(payload)),
    deleteDataSearchDetail: () => dispatch(deleteDataSearchDetail()),
    createDataTransactionDetailAfterSearch: (payload) => dispatch(createDataTransactionDetailAfterSearch(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);