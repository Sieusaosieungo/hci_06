import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Bar, Pie, MiniArea, WaterWave } from 'ant-design-pro/lib/Charts';
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
      y: 94,
    },
    {
      x: `Marketting`,
      y: 91,
    },
    {
      x: `Kiểm tra`,
      y: 94,
    },
    {
      x: `Kế toán`,
      y: 97,
    },
    {
      x: `Tài chính`,
      y: 94,
    }
  ];

  const visitData = [
    {
      x: "5-2019",
      y: 85
    },
    {
      x: "6-2019",
      y: 89
    },
    {
      x: "7-2019",
      y: 86
    },
    {
      x: "8-2019",
      y: 92
    },
    {
      x: "9-2019",
      y: 91
    },
    {
      x: "10-2019",
      y: 88
    }
  ];
  return <div className="chartContainer">
    <div className="chartContainer-inner">
      <div className="dashboard-item item1">
        <Bar height={250} title=" Top 5 nhân viên có KPI cao nhất" data={salesData} />
      </div>
      <div className="dashboard-item item2">
        <Bar height={250} color={"#1bf452a6"} title=" Top KPI các bộ phận" data={depart} />
      </div>
    </div>
    <div className="chartContainer-inner chart-below">
      <div className="dashboard-item item3">
        <Pie percent={88} subTitle="KPI bộ phận kiểm tra" total="90" height={200} />
      </div>
      <div className="dashboard-item item4">
        <span>KPI bộ phận kiểm tra 6 tháng gần nhất</span>
        <MiniArea line color="#cceafe" height={186} data={visitData} />
      </div>
      <div className="dashboard-item item5">
        <WaterWave height={200} title="Độ hoàn thành công việc" percent={48} />
      </div>
    </div>
  </div>;
};
export default DashBoard;