import React from "react";
import "ant-design-pro/dist/ant-design-pro.css";
import { Progress, Row, Col } from "antd";
import "antd/dist/antd.css";
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
      <Row type="flex">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={12}
          className="dashboard-item item1"
        >
          <Bar
            height={300}
            title=" Top 5 nhân viên có KPI cao nhất trong tháng của bộ phận DBCL"
            data={salesData}
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={12}
          className="dashboard-item item2"
        >
          <span>Độ hoàn thành công việc hiện tại</span>
          <Row type="flex" className="item2-inner">
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra sản xuất thuốc viên</span>
              </div>
              <div className="it2-content">
                <Progress width={150} type="circle" percent={75} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra chất lượng bao bì</span>
              </div>
              <div className="it2-content">
                <Progress width={150} type="circle" percent={100} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="item2-element">
              <div className="it2-title">
                <span>Kiểm tra sản xuất thuốc bột</span>
              </div>
              <div className="it2-content">
                <Progress
                  width={150}
                  type="circle"
                  percent={0}
                  status="exception"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row type="flex" className="chart-below">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item3"
        >
          <span>KPI của Vũ Duy Mạnh tính đến hiện tại</span>
          <Pie percent={88} subTitle="" total="90%" height={200} />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item4"
        >
          <span>KPI của trưởng phòng Vũ Duy Mạnh 6 tháng gần nhất</span>
          <MiniArea line color="#cceafe" height={200} data={visitData} />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item5"
        >
          <span>Tiến độ hoàn thành công việc trong tháng của Vũ Duy Mạnh</span>
          <div className="item5-chart">
            <WaterWave height={200} title="" percent={48} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoardEmployee;
