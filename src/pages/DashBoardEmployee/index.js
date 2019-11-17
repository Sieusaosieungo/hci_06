import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Bar } from 'ant-design-pro/lib/Charts';
import './style.css';

const DashBoardEmployees = () => {
  const salesData = [];
  for (let i = 0; i < 5; i += 1) {
    salesData.push({
      x: `Phúc giá ${i + 1}000 đồng`,
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }
  return <div id="chartContainer">
    <Bar height={400} title="Cho Phuc" data={salesData} />
  </div>;
};
export default DashBoardEmployees;