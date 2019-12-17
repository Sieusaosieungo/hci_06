import React from "react";
import "ant-design-pro/dist/ant-design-pro.css";
import { Bar, MiniArea, WaterWave, Pie } from "ant-design-pro/lib/Charts";
import "./style.css";
import { Row, Col } from "antd";

const DashBoard = ({ history }) => {
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

  const depart = [
    {
      x: `KĐCL`,
      y: 98
    },
    {
      x: `Sản xuất`,
      y: 95
    },
    {
      x: `Marketting`,
      y: 92
    },
    {
      x: `Kế toán`,
      y: 87
    },
    {
      x: `Tài chính`,
      y: 85
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

  return (
    <div className="chartContainer">
      <Row type="flex" className="chartContainer-inner">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={12}
          className="dashboard-item item1"
        >
          <Bar
            height={350}
            title=" Top 5 nhân viên có KPI cao nhất trong tháng"
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
          <Bar
            height={350}
            color={"#1bf452a6"}
            title=" Top 5 bộ phận có KPI cao nhất trong tháng"
            data={depart}
          />
        </Col>
      </Row>

      <Row
        type="flex"
        className="chartContainer-inner chart-below"
        style={{ marginTop: "20px" }}
      >
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item3"
        >
          <span>KPI bộ phận Kiểm định chất lượng hiện tại</span>
          <Pie percent={88} subTitle="" total="90" height={250} />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item4"
        >
          <span>KPI bộ phận Kiểm định chất lượng 6 tháng gần nhất</span>
          <MiniArea line color="#cceafe" height={250} data={visitData} />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={8}
          className="dashboard-item item5"
        >
          <span>Tiến độ hoàn thành công việc trong tháng của bộ phận</span>
          <div className="item5-chart">
            <WaterWave height={250} title="" percent={48} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashBoard;
