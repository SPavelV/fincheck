import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis} from 'recharts';

import {greenColorArr,redColorArr} from '../../common-styles';

const Inner = styled.section`
  position: relative;
  width: 100%;
  height: 5px;
  /* margin-bottom: 10px; */
`;

const Chart = styled.div`
  width: 100%;
`;

export default function ChartLine ({chartData=[{value: 0}], chartType="income"}){

  const addChart = () => {
    const colorArr = chartType === 'income' ? greenColorArr : redColorArr;
    const barKeyArr= [];
    for(let key in chartData[0]) barKeyArr.push(key);
    let iColor = 0;
    const barArr = barKeyArr.map((element, i) => {
      if(iColor === colorArr.length) iColor = 0;
      let colorBar =  colorArr[iColor];
      iColor++;
      return <Bar dataKey={element} fill={colorBar} key={i} stackId="stack"/>
    });

    return  <ResponsiveContainer height={1}>

              <BarChart
                data={chartData} 
                layout="vertical"
                style={{top: 0}}>
                  <XAxis hide type="number"/> 
                  <YAxis hide type="category"/>
                  {barArr}
                </BarChart>
            </ResponsiveContainer>
  }

  return (
    <Inner>
      <Chart className="line-chart">
        {addChart()}
      </Chart>
    </Inner>
  )
  
}

ChartLine.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired
}
