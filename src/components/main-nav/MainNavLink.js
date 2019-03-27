import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import RouterLink from '../router/Link';
import ReactSVG from 'react-svg';

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0;
  font-family: 'Roboto';
  font-weight: normal;
  text-decoration: none;
  color: #000;

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
      fill: #7B7B7B;
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

export default class MainNavLink extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  static propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconSrc: PropTypes.string,
    iconTitle: PropTypes.string.isRequired
  }

  static defaultProps = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconSrc: PropTypes.string,
    iconTitle: PropTypes.string.isRequired
  }

  handleClick = evt => {
    evt.preventDefault();
    const isActive = this.state.isActive === true ? true : !this.state.isActive;
    console.log('isActive: ', isActive);
    this.setState = {
      isActive: isActive
    }
  };

  render() {
    const {href, title, iconSrc,text} = this.props;
    const colorLink = this.state.isActive ? '#007D51' : '#000000';
    return (
      <RouterLink to={href}>
        <NavLink className="main-nav__link" style={{color: colorLink}} href={href} title={title} onClick={this.handleClick}>
            <ReactSVG 
            evalScripts="always"
            src = {iconSrc}
            svgClassName="main-nav__icon"
            svgStyle={{ width: 15 }}
            wrapper="span"
            />
          {text}
    
        </NavLink>
      </RouterLink>
    )
  }
} 
