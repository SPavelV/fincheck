import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {toggleActiveMainNavLink, deleteMainNavLink, editMainNavLinkText} from '../../actions'


const NavLink = styled.a`
  position:relative;
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

const DelLinkButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -100%;
  left: 0;
  border-radius: 3px;
  border: 1px solid #007D51;
  color: #007D51;
  background-color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:hover {
    background-color: #007D51;
    color: #fff;
  }
`

const EditLinkText = styled(DelLinkButton)`
  left: 25px;
  width: 35px;
`

const InputTextLink = styled.input`
  position: absolute;
  top:100%;
  left: 0;
  font-size: 12px;
  border: 1px solid #007D51;
  color: #007D51;
  display: ${props => props.isOpen ? 'block' : 'none'};

  &:focus {
    border: 1px solid #005D57;
    color: #005D57;
  }
`


class MainNavLink extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editInputOpen: false,
      editInputValue: ''
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

  handleClickLink = evt => {
    evt.preventDefault();
    
    const {toggleActiveMainNavLink, id} = this.props;
    toggleActiveMainNavLink(id);

  };

  handleClickDelLink = (evt) => {
    const {deleteMainNavLink, id} = this.props;
    deleteMainNavLink(id);
  }

  handleClickEditLink = (evt) => {
    const {editMainNavLinkText, id} = this.props;

    if(!this.state.editInputOpen) this.setState({editInputOpen: true})
    else {
      const inputValue =  this.state.editInputValue;
      this.setState({
        editInputOpen: false, 
        editInputValue: ''
      });
      editMainNavLinkText(id, inputValue);
    }
  }



  handleChangeInputEdit = (evt) => {
    console.log('editInputValue :', evt.target.value);
    this.setState({editInputValue: evt.target.value});
    console.log('(this.setState.editInputValue :',this.state.editInputValue);
  }

  handleEnterInputEdit = (evt) => {
    if(evt.keyCode === 13) {
      this.setState({editInputValue: evt.target.value});
      return false;
    }
    return true;
  }



  render() {
    const {href, title, iconSrc,text} = this.props;
    return (
      <NavLink contenteditable={true} className="main-nav__link" href={href} title={title} onClick={this.handleClickLink} isActive={this.props.isActive}>
          <ReactSVG 
          evalScripts="always"
          src = {iconSrc}
          svgClassName="main-nav__icon"
          svgStyle={{ width: 15 }}
          wrapper="span"
          />


        {text}

        <DelLinkButton onClick={this.handleClickDelLink}>x</DelLinkButton>
        <EditLinkText onClick={this.handleClickEditLink}>{this.state.editInputOpen ? 'Save' : 'Edit'}</EditLinkText>
        <InputTextLink value={this.state.editInputValue} onChange={this.handleChangeInputEdit} type="text" onKeyDown={this.handleEnterInputEdit} isOpen={this.state.editInputOpen}/>
  
      </NavLink>
    )
  }
} 

export default connect(null, { toggleActiveMainNavLink,deleteMainNavLink,editMainNavLinkText })(MainNavLink);
