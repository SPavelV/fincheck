import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {toggleActiveMainNavLink, deleteMainNavLink, editMainNavLinkText,toggleInputEdit} from '../../actions'

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
    this.textInput = React.createRef();
    this.state = {
      editInputValue: '',
      isActive: false,
      isEditInputOpen: false,
      isAdminPanel: true
    }
    this.iconsMenu = [bag,chart,minus,params,plus];
  }

  static propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    iconSrc: PropTypes.string,
    iconTitle: PropTypes.string.isRequired
  }

  static defaultProps = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    iconSrc: PropTypes.string,
    iconTitle: PropTypes.string.isRequired
  }

  handleClickLink = evt => {
    evt.preventDefault();
    
    // const {toggleActiveMainNavLink, id} = this.props;
    // toggleActiveMainNavLink(id);
    this.setState({
      isActive: !this.state.isActive
    })

  };

  handleClickDelLink = () => {
    const {deleteMainNavLink, id} = this.props;
    deleteMainNavLink(id);
  }

  saveValueInputText = () => {
    const {editMainNavLinkText,id} = this.props;

    if(!this.state.isEditInputOpen) {
      this.setState({
        isEditInputOpen: true
      },()=>this.textInput.current.focus())
    }
    else {
      const inputValue =  this.state.editInputValue;
      this.clearValueInputText();
      if(inputValue === '') return;
      editMainNavLinkText(id, inputValue);
    }
  }

  clearValueInputText = () => {
    this.setState(
      {
        editInputValue: '',
        isEditInputOpen: false
      }
    );
  }

  handleClickEditLink = (evt) => {
    this.saveValueInputText(evt);
  }

  handleChangeInputEdit = (evt) => {
    this.setState({editInputValue: evt.target.value});
  }

  handleEnterKyeDownInputEdit = (evt) => {
    if(evt.keyCode === 13) {
      this.saveValueInputText();
      return false;
    } else if (evt.keyCode === 27) {
      this.clearValueInputText();
      return false;
    }
    return true;
  }

  componentDidUpdate(){
    this.textInput.current.focus();
  }

  getSvgIcon = (iconName) => {
    const currIcon = this.iconsMenu.filter(icon => {
      if(icon.indexOf(iconName) !== -1) return icon;
    })[0];

    return currIcon;
  }

  getDeleteLink() {
    if(!this.state.isAdminPanel) return;
    return  <DelLinkButton onClick={this.handleClickDelLink}>x</DelLinkButton>;
  }

  getEditButton() {
    if(!this.state.isAdminPanel) return;
    return <EditLinkText onClick={this.handleClickEditLink}>{this.state.isEditInputOpen ? 'Save' : 'Edit'}</EditLinkText>;
  }

  getInputEdit() {
    if(!this.state.isAdminPanel) return;
    return (
        <InputTextLink 
        value={this.state.editInputValue} 
        onChange={this.handleChangeInputEdit} 
        type="text" 
        onKeyDown={this.handleEnterKyeDownInputEdit} 
        ref={this.textInput}
        isOpen={this.state.isEditInputOpen}
        />
      );
  }

  render() {
    const {href, iconSrc,text, editInputOpen} = this.props;
    // const isOpenEdit = editInputOpen === 'false' ? false : true;8
    return (
      <NavLink 
        className="main-nav__link" 
        href={href} 
        title={text} 
        onClick={this.handleClickLink} 
        isActive={this.state.isActive}>
          <ReactSVG 
          evalScripts="always"
          src = {this.getSvgIcon(iconSrc)}
          svgClassName="main-nav__icon"
          svgStyle={{ width: 15 }}
          wrapper="span"
          />
        {text}

        {this.getDeleteLink()}
        {this.getEditButton()}
        {this.getInputEdit()}
       
      </NavLink>
    )
  }
} 

export default connect(null, { deleteMainNavLink,editMainNavLinkText })(MainNavLink);


