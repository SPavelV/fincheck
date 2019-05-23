import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PieChart as ChartPie, Pie, Sector, Cell} from 'recharts';
import {getCurrentColor} from '../common-functions';

const Inner = styled.section`
  position: relative;
  width: 100%;
`;

const Chart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: cetner;
`;

export default function PieChart({chartData=[{value:0}], transactionType="income"}) {

  const addChart = () => {
    const getColor = getCurrentColor(transactionType);

    return (
      <ChartPie width={250} height={250}>
        <Pie
          dataKey="value"
          data={chartData} 
          innerRadius={120}
          outerRadius={125} 
          fill="#8884d8"
          paddingAngle={1}>
            	{
          	chartData.map((entry, index) => <Cell key={index} fill={getColor()}/>)
          }
        </Pie>
      </ChartPie>
    )
  }

  return (
    <Inner>
      <Chart className="pie-chart">
        {addChart()}
      </Chart>
    </Inner>
  )
}

PieChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired
}