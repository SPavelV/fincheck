import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import EditingLinkMainNav from '../admin/EditingLinkMainNav'


import bag from '../../assets/images/icons/bag.svg';
import chart from '../../assets/images/icons/chart.svg';
import minus from '../../assets/images/icons/minus.svg';
import params from '../../assets/images/icons/params.svg';
import plus from '../../assets/images/icons/plus.svg';

const NavLink = styled.a`
  position:relative;
  display: flex;
  align-items: center;
  font-size: 0;
  font-family: 'Roboto';
  font-weight: normal;
  text-decoration: none;
  color: ${props => props.isActive ? '#007D51' : '#000000'};

  &:hover {
    color: #007D51;
    
    svg {
      fill: #007D51;
    }
  }

  &:active {
    color: #005D57;

    svg {
      fill: #005D57;
    }
  }

  @media(min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  svg {
      margin-right: 10px;
      fill: ${props => props.isActive ? '#007D51' : '#7B7B7B'};
    }

  & + & {
    margin-left: 0;

    @media(min-width: 768px) {
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
    const {isActive,href, iconSrc,text,isAdmin,isEditInputActive} = this.props;
    return (
      <NavLink 
        {...this.props}
        className="main-nav__link" 
        href={href} 
        title={text} 
        onClick={this.props.toggleLink} 
        isActive={isActive}>
          <ReactSVG 
          evalScripts="always"
          src = {this.getSvgIcon(iconSrc)}
          svgClassName="main-nav__icon"
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
      </NavLink>
    )
  }
} 

export default MainNavLink;
