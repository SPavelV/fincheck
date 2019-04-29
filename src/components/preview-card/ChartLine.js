import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {greenColor} from '../../common-styles';

import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis} from 'recharts';

const Inner = styled.section`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const Chart = styled.div`
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${greenColor}; */
  height: 1px;
  width: 100%;

`;

const data = [
  {
    uv: 1000,
    pv: 2000,
    amt: 3000,
    lm: 2000
  }
]

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
    return  <ResponsiveContainer height={1}>
              
              <BarChart
                data={data} 
                layout="vertical">
                  <XAxis hide type="number"/> 
                  <YAxis hide type="category"/>
                  <Bar dataKey="pv" fill="#005D57" stackId="stack" />
                  <Bar dataKey="uv" fill="#04B97F" stackId="stack" />
                  <Bar dataKey="amt" fill="#37EFBA" stackId="stack" />
                  <Bar dataKey="lm" fill="#007D51" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
  }

  componentDidMount() {
    this.addChart();
  }

  render() {
    return (
      <Inner>
        <Chart className="line-chart">
          {this.addChart()}
        </Chart>
      </Inner>
    )
  }
}