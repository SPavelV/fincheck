import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {toggleActiveMainNavLink} from '../../actions'

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0;
  font-family: 'Roboto';
  font-weight: normal;
  text-decoration: none;
  color: ${props => props.isActive==='true' ? '#007D51' : '#000000'};

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
      fill: ${props => props.isActive==='true' ? '#007D51' : '#7B7B7B'};
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
    
    const {toggleActiveMainNavLink, id} = this.props;
    toggleActiveMainNavLink(id);

  };

  render() {
    const {href, title, iconSrc,text,id} = this.props;
    return (
      <NavLink className="main-nav__link" href={href} title={title} onClick={this.handleClick} isActive={this.props.isActive}>
          <ReactSVG 
          evalScripts="always"
          src = {iconSrc}
          svgClassName="main-nav__icon"
          svgStyle={{ width: 15 }}
          wrapper="span"
          />
        {text}
  
      </NavLink>
    )
  }
} 

export default connect(null, { toggleActiveMainNavLink })(MainNavLink);
