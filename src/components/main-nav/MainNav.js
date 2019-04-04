import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import MainNavLink from './MainNavLink'

const Nav = styled.nav`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
`;


class MainNav extends Component {
  state = {
    activeLinkId: null,
    activeInputEdit: false
  }

  static propTypes = {
    dataMenu: PropTypes.array.isRequired
  }

  render() {
    const {dataMenu} = this.props;
    const linkElements =  dataMenu.map(menuItem => {
      return <MainNavLink 
          key = {menuItem.id} 
          {...menuItem} 
          isActive = {menuItem.id === this.state.activeLinkId} 
          toggleLink = { (evt) => this.handleClickLink(evt, menuItem.id)}
          isAdmin={false}

        ></MainNavLink>
    });
    
    return ( 
      <Nav className="main-nav">
        {linkElements}
      </Nav>
    );
  }

  handleClickLink = (evt,activeLinkId) => {
    evt.preventDefault();
    this.setState( { activeLinkId } );
  };

  hidenInputEdit = () => {
    
  }
}

export default connect(state => ({
  dataMenu: state.mainMenu
})) (MainNav);
