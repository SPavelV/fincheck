import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis} from 'recharts';

import {greenColorArr} from '../../common-styles';

const Inner = styled.section`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const Chart = styled.div`
  height: 1px;
  width: 100%;
`;

export default class ChartLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static defaultProps = [
    {
      value: 0
    }
  ]

  static propTypes = {
    chartData: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  addChart(data) {
    
    const barKeyArr= [];
    for(let key in data[0]) barKeyArr.push(key);
    let iColor = 0;
    const barArr = barKeyArr.map((element, i) => {
      if(iColor === greenColorArr.length) iColor = 0;
      let colorBar =  greenColorArr[iColor];
      console.log('color ', iColor, colorBar);
      iColor++;
      return <Bar dataKey={element} fill={colorBar} key={i} stackId="stack"/>
    });

    return  <ResponsiveContainer height={1}>
              
              <BarChart
                data={data} 
                layout="vertical">
                  <XAxis hide type="number"/> 
                  <YAxis hide type="category"/>
                  {barArr}
                </BarChart>
            </ResponsiveContainer>
  }

  render() {
    const {chartData} = this.props;
    return (
      <Inner {...this.props}>
        <Chart className="line-chart">
          {this.addChart(chartData)}
        </Chart>
      </Inner>
    )
  }
}