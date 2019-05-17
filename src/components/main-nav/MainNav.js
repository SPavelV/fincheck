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
    isEditInputActive: false,
    idLinkInputEditActive: null
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
          isEditInputActive = {this.state.idLinkInputEditActive === menuItem.id}
          getIdLinkInputEditActive = {this.getIdLinkInputEditActive}

        ></MainNavLink>
    });
    
    return ( 
      <Nav className="main-nav">
        {linkElements}
      </Nav>
    );
  }

  handleClickLink = (evt,activeLinkId) => {
    this.setState( { activeLinkId } );
  };

  getIdLinkInputEditActive = (id) => {
    this.setState({
      idLinkInputEditActive:id
    })
  }
}

export default connect(state => ({
  dataMenu: state.mainMenu
})) (MainNav);
