import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import SecondHeader from '../components/SecondHeader';

import {
  PageInner,
  SectionInnerTransparent,
  grayColor,
  mediaMinWidthDesktop,
  robotoFont,
  bgSectionColor,
  blackColor,
} from '../common-styles';

const Inner = styled.div`
  position: relative;
  display: block;
`;

const InnerForm = styled(SectionInnerTransparent)`

`;

const InnerSave = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  /* background-color: ${bgSectionColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.25); */
  background-color: transparent;
  font-family: ${robotoFont};

  @media(min-width: ${mediaMinWidthDesktop}) {
    position: static;
    margin-top: 30px;
  }
`;

const ButtonSave = styled.button`
  width: 156px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${blackColor};
  box-shadow: 0px 1px 3px 
              rgba(0, 0, 0, 0.2), 
              0px 2px 2px rgba(0, 0, 0, 0.12), 
              0px 0px 2px rgba(0, 0, 0, 0.14);
  border-radius: 22.5px;
  text-transform: uppercase;
  border: 0;
  background-color: ${bgSectionColor};
`;

const Select = styled.select`
    width: 100%;
    border: 1px solid ${grayColor};
`;

const Option = styled.option`

`;

class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  static propTypes ={
    dataCategories: PropTypes.array.isRequired
  }

  getSelect(data){
    if(!data) return;
    const optionsElementsArr = data.map(element => <Option value={element.name}>{element.name}</Option>)
    return (
       <Select required>
         {optionsElementsArr}
       </Select>
    )
  }

  render() {
    const {dataCategories} = this.props;
    const selectTypeTransaction = this.getSelect(dataCategories);

    return (
      <Inner>
        <SecondHeader transactionName = {'Добавить'} />
        <InnerForm action="">
          {selectTypeTransaction}
        </InnerForm>
        <InnerSave>
          <ButtonSave>Сохранить</ButtonSave>
        </InnerSave>
      </Inner>
     
    )
  }
}

const mapStateToProps = state => ({
  dataCategories: state.categories
})

export default connect(mapStateToProps)(AddTransaction);