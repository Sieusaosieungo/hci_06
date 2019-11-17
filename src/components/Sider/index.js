import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

function Siders() {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >

        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="pie-chart" />
              Bảng điều khiển
            </span>
          }
        >
          <Menu.Item key="sub1-1">
            <Link to="dashboard-employees">
              KPI nhân viên
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-2">
            <Link to="dashboard-departments">
              KPI bộ phận
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              Quản lý công việc
            </span>
          }
        >
          <Menu.Item key="sub2-1">
            <Link to="/">
              Danh sách công việc
            </Link>
          </Menu.Item>
          <Menu.Item key="sub2-2">
            <Link to="/">
              Tạo công việc
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="laptop" />
              Quản lý KPI
            </span>
          }
        >
          <Menu.Item key="sub3-1">
            <Link to="/">
              KPI bộ phận
            </Link>
          </Menu.Item>
          <Menu.Item key="sub3-2">
            <Link to="/">
              KPI nhân viên
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="bar-chart" />
              Thống kê báo cáo
            </span>
          }
        >
          <Menu.Item key="sub4-1">
            <Link to="/">
              Thống kê báo cáo
            </Link>
          </Menu.Item>
          <Menu.Item key="sub4-2">
            <Link to="workreport">
              Tạo báo cáo
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Siders;
