import React from "react";
import "ant-design-pro/dist/ant-design-pro.css";
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { Bar, MiniArea, WaterWave, Pie } from "ant-design-pro/lib/Charts";
import "./style.css";

const DashBoardEmployee = () => {

  const salesData = [
    {
      x: `V.D Mạnh`,
      y: 98
    },
    {
      x: `P.Đ Tài`,
      y: 95
    },
    {
      x: `N.V Hùng`,
      y: 90
    },
    {
      x: `L.Đ Phúc`,
      y: 87
    },
    {
      x: `T.T Huỳnh`,
      y: 85
    }
  ];

  // const depart = [
  //   {
  //     x: `KĐCL`,
  //     y: 98
  //   },
  //   {
  //     x: `Sản xuất`,
  //     y: 95
  //   },
  //   {
  //     x: `Marketting`,
  //     y: 92
  //   },
  //   {
  //     x: `Kế toán`,
  //     y: 87
  //   },
  //   {
  //     x: `Tài chính`,
  //     y: 85
  //   }
  // ];

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

  return (
    <div className="chartContainer">
      <div className="chartContainer-inner">
        <div className="dashboard-item item1">
          <Bar
            height={250}
            title=" Top 5 nhân viên có KPI cao nhất trong tháng của bộ phận DBCL"
            data={salesData}
          />
        </div>
        <div className="dashboard-item item2">
          <span>Độ hoàn thành công việc hiện tại</span>
          <div className="item2-inner">
            <div className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra sản xuất thuốc viên</span>
              </div>
              <div className="it2-content">
                <Progress width={100} type="circle" percent={75} />
              </div>
            </div>
            <div className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra chất lượng bao bì</span>
              </div>
              <div className="it2-content">
                <Progress width={100} type="circle" percent={100} /></div>
            </div>
            <div className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra sản xuất thuốc bột</span>
              </div>
              <div className="it2-content">
                <Progress width={100} type="circle" percent={75} status="exception" />
              </div>
            </div>
          </div>
          {/* <Bar
            height={250}
            color={"#1bf452a6"}
            title=" Top 5 bộ phận có KPI cao nhất trong tháng"
            data={depart}
          /> */}
        </div>
      </div>
      <div className="chartContainer-inner chart-below">
        <div className="dashboard-item item3">
          <Pie
            percent={88}
            subTitle=""
            total="90"
            height={200}
          />
          <span>KPI của Vũ Duy Mạnh tính đến hiện tại</span>
        </div>
        <div className="dashboard-item item4">
          <MiniArea line color="#cceafe" height={200} data={visitData} />
          <span>KPI của trưởng phòng Vũ Duy Mạnh 6 tháng gần nhất</span>
        </div>
        <div className="dashboard-item item5">
          <div className="item5-chart">
            <WaterWave
              height={200}
              title=""
              percent={48}
            />
          </div>
          <span>Tiến độ hoàn thành công việc trong tháng của Vũ Duy Mạnh</span>
        </div>
      </div>
    </div>
  );
};


export default DashBoardEmployee;