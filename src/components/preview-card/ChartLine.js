import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {greenColor} from '../../common-styles';

const Inner = styled.section`
  position: relative;
  width: 100%;
  height: 1px;
  margin-top: 10px;
`;

const Chart = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${greenColor};
`;

export default class ChartLine extends React.Component{
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
    }
  }

  static defaultProps = [
    {

    }
  ]

  static propTypes = {

  }

  addChart() {
    
  }

  componentDidMount() {
    this.addChart();
  }

  render() {
    return (
      <Inner>
        <Chart className="line-chart"></Chart>
      </Inner>
    )
  }
}