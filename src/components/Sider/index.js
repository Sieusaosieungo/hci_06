import React, { useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
const { SubMenu } = Menu;
const { Sider } = Layout;

function Siders({ account }) {
  useEffect(() => {}, []);

  return (
    <Sider collapsible width={200} style={{ background: "#fff" }}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="11">
          <Link to={account.role ? "/" : "doard-board-employee"}>
            <Icon type="dashboard" />
            <span>Bảng điều khiển</span>
          </Link>
        </Menu.Item>

        {account.role ? (
          <SubMenu
            key="sub2"
            title={
              <>
                <Icon type="laptop" />
                <span>Quản lý công việc</span>
              </>
            }
          >
            <Menu.Item key="sub2-1">
              <span>
                <Link to="/list-task-department">Công việc phòng ban</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="sub2-2">
              <span>
                <Link to="/list-task-employee">Công việc nhân viên</Link>
              </span>
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item key="sub2-1">
            <Link to="/list-task-employee">
              <Icon type="laptop" />
              <span>Quản lý công việc</span>
            </Link>
          </Menu.Item>
        )}
        <SubMenu
          key="sub3"
          title={
            <>
              <Icon type="laptop" />
              <span>Quản lý KPI</span>
            </>
          }
        >
          <Menu.Item key="sub3-1">
            <a href="http://hci09.it4440.phungluan.com/danhsachKPI.html">
              KPI bộ phận
            </a>
          </Menu.Item>
          <Menu.Item key="sub3-2">
            <a href="http://hci09.it4440.phungluan.com/ketquakpi.html">
              KPI nhân viên
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="sub4-1">
          <Link to="/manage-report">
            <Icon type="bar-chart" />
            <span>Quản lý báo cáo</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siders;
