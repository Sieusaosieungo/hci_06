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

        <Menu.Item key="1">
          <Icon type="plus" />
          Thêm kế hoạch
          </Menu.Item>
        <Menu.Item key="2">
          <Link to="workreport">
            <span>
              <Icon type="laptop" />
              Báo cáo công việc
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <span>
            <Icon type="user" />
            Kế hoạch được giao
            </span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="laptop" />
              Kế hoạch gần đây
            </span>
          }
        >
          <Menu.Item key="5">Kế hoạch A</Menu.Item>
          <Menu.Item key="6">Kế hoạch B</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Siders;
