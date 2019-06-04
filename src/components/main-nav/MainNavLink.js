import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import EditingLinkMainNav from '../admin/EditingLinkMainNav'
import {NavLink} from 'react-router-dom';

import bag from '../../assets/images/icons/bag.svg';
import chart from '../../assets/images/icons/chart.svg';
import minus from '../../assets/images/icons/minus.svg';
import params from '../../assets/images/icons/params.svg';
import plus from '../../assets/images/icons/plus.svg';

import {
  linkColor,
  linkHoverColor,
  linkActive,
  mediaMinWidthDesktop,
  grayColor
} from '../../common-styles';

const LinkNavigation = styled(NavLink)`
  position:relative;
  display: flex;
  align-items: center;
  font-size: 0;
  font-family: 'Roboto';
  font-weight: normal;
  text-decoration: none;
  color: ${linkColor};
  
  &:hover {
    color: ${linkHoverColor};
    
    svg {
      fill: ${linkHoverColor};
    }
  }

  &:active {
    color: ${linkActive};

    svg {
      fill: ${linkActive};
    }
  }

  @media(min-width: ${mediaMinWidthDesktop}) {
    font-size: 14px;
    line-height: 20px;
  }

  svg {
      margin-right: 10px;
      fill: ${grayColor};
  }

  &.active svg{
    fill: ${linkHoverColor};
  }

  & + & {
    margin-left: 0;

    @media(min-width: ${mediaMinWidthDesktop}) {
      margin-left: 20px;
    }
  }

  span {
    display: flex; 
  }
`;

class MainNavLink extends Component{
  constructor(props) {
    super(props);
    this.iconsMenu = [bag,chart,minus,params,plus];
  }

  static propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    iconSrc: PropTypes.string,
    iconTitle: PropTypes.string.isRequired
  }

  static defaultProps = {
    href: "#",
    text: "sum-link",
    iconSrc: "",
    iconTitle: "some icon"
  }

  getSvgIcon = (iconName) => {
    const currIcon = this.iconsMenu.filter(icon => {
      if(icon.indexOf(iconName) !== -1) return icon;
    })[0];

    return currIcon;
  }

  render() {
    const {href, iconSrc,text,isAdmin,isEditInputActive} = this.props;
    return (
      <LinkNavigation 
        to={href}
        onClick={this.props.toggleLink} 
        activeStyle={{color: '#007D51'}}
        activeClassName='active'
        // isActive={()=> console.log('click')}
        >
          <ReactSVG 
          evalScripts="always"
          src = {this.getSvgIcon(iconSrc)}
          svgStyle={{ width: 15 }}
          wrapper="span"
          />

          {isAdmin ?  <EditingLinkMainNav 
              isEditInputActive = {isEditInputActive}
              id = {this.props.id}
              getIdLinkInputEditActive={this.props.getIdLinkInputEditActive}
            />: null
          }
          
        {text}
      </LinkNavigation>
  
    )
  }
} 

export default MainNavLink;
