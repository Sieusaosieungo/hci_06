import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Bar, Gauge } from 'ant-design-pro/lib/Charts';
import './style.css';

const DashBoard = () => {
  const salesData = [
    {
      x: `V.D Mạnh`,
      y: 91,
    },
    {
      x: `P.Đ Tài`,
      y: 96,
    },
    {
      x: `L.Đ Phúc`,
      y: 94,
    },
    {
      x: `N.V Hùng`,
      y: 92,
    },
    {
      x: `T.T Huỳnh`,
      y: 94,
    }
  ];

  const depart = [
    {
      x: `Sản xuất`,
      y: 91,
    },
    {
      x: `Marketting`,
      y: 96,
    },
    {
      x: `Kiểm tra`,
      y: 94,
    },
    {
      x: `Kế toán`,
      y: 92,
    },
    {
      x: `Tài chính`,
      y: 94,
    }
  ];
  return <div className="chartContainer">
    <div className="dashboard-item item1">
      <Bar height={350} title=" Top 5 nhân viên có KPI cao nhất" data={salesData} />
    </div>
    <div className="dashboard-item item2">
      <Bar height={350} title=" Top KPI các bộ phận" data={depart} />
    </div>
  </div>;
};
export default DashBoard;