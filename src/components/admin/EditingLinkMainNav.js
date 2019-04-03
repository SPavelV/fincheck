import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteMainNavLink, editMainNavLinkText} from '../../actions'

const InnerButtonsEditor = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const DelLinkButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 5px;
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
  top: 200%;
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

class EditingLinkMainNav extends React.Component{
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      editInputValue: '',
      isEditInputOpen: false
    }
  }

  handleClickDelLink = () => {
    const {deleteMainNavLink, id} = this.props;
    deleteMainNavLink(id);
  }

  saveValueInputText = () => {
    const {editMainNavLinkText,id,toggleInput} = this.props;
    console.log('editMainNavLinkText',id)
    
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
        isEditInputOpen: false,
        isActive: true
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


  getDeleteLink() {
    if(!this.props.isAdminPanel) return;
    return  <DelLinkButton onClick={this.handleClickDelLink}>x</DelLinkButton>;
  }

  getEditButton() {
    if(!this.props.isAdminPanel) return;
    return <EditLinkText onClick={this.handleClickEditLink}>{this.state.isEditInputOpen ? 'Save' : 'Edit'}</EditLinkText>;
  }

  getInputEdit() {
    if(!this.props.isAdminPanel) return;
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
    return (
      <InnerButtonsEditor 
        isOpen={this.props.isOpen} 
        isAdminPanel={this.props.isAdminPanel}>
          {this.getDeleteLink()}
          {this.getEditButton()}
          {this.getInputEdit()}
      </InnerButtonsEditor>
    )
  }

}

export default connect(null, { deleteMainNavLink,editMainNavLinkText })(EditingLinkMainNav);