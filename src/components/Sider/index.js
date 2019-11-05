import React from "./node_modules/react";
import { Layout, Menu, Icon } from "./node_modules/antd";
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
              <Icon type="plus" />
              Thêm kế hoạch
            </span>
          }
        >
          <Menu.Item key="1">Kế hoạch cá nhân</Menu.Item>
          <Menu.Item key="2">Kế hoạch nhóm</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              Quản lý kế hoạch
            </span>
          }
        >
          <Menu.Item key="5">Kế hoạch Trong ngày</Menu.Item>
          <Menu.Item key="6">Kế hoạch trong tuần</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="user" />
              Nhiệm vụ của tôi
            </span>
          }
        >
          <Menu.Item key="9">Nhiệm vụ cá nhân</Menu.Item>
          <Menu.Item key="10">Nhiệm vụ nhóm</Menu.Item>
          <Menu.Item key="11">Nhiệm vụ trong ngày</Menu.Item>
          <Menu.Item key="12">Nhiệm vụ trong tuần</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Siders;
