import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import {getCurrentColor} from '../../common-functions.js';

const Inner = styled.section`
  position: relative;
  width: 100%;
  height: 14px;
  margin-bottom: 15px;
`;

const Chart = styled.div`
  width: 100%;
`;

export default function ChartLine ({chartData=[{value: 0}], transactionType="income"}){

  const addChart = () => {
    const getColor = getCurrentColor(transactionType)
    const barKeyArr= [];
    for(let key in chartData[0]) barKeyArr.push(key);
    const barArr = barKeyArr.map((element, i) => {
      return <Bar dataKey={element} fill={getColor()} key={i} stackId="stack"/>
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
