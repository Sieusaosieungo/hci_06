import React, { useState } from "react";
import "antd/dist/antd.css";
import "./styles.less";
import { Menu, Icon } from "antd";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const AppMenu = ({ location }) => {
  const [current, setCurrent] = useState("home");
  const { SubMenu } = Menu;

  const handleClick = e => {
    console.log("location =>", location);
    setCurrent(e.key);
  };

  return (
    <div className='"app-menu"'>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            {/* vertical */}
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="home" />
                Trang chủ:
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="bar-chart" />
                  Bảng xếp hạng
                </span>
              }
            >
              <Menu.Item key="bxht">Số bài đăng nhiều nhất</Menu.Item>
              <Menu.Item key="bxhthg">Số comment nhiều nhất</Menu.Item>
              <Menu.Item key="bxhn">Số lượt like nhiều nhất</Menu.Item>
              <Menu.Item key="ds">Bài viết có tương tác nhiều nhất</Menu.Item>
            </SubMenu>
            <Menu.Item key="create_post">
              <Link to="/create-post">
                <Icon type="form"></Icon>
                Tạo bài viết
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="unordered-list" />
                  Chủ đề
                </span>
              }
            >
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Giải tích
                  </span>
                }
              >
                <Menu.Item key="gtI">Giải tích I</Menu.Item>
                <Menu.Item key="gtII">Giải tích II</Menu.Item>
                <Menu.Item key="gtIII">Giải tích III</Menu.Item>
              </SubMenu>
              <Menu.Item key="ds">
                <Icon type="gold" />
                Đại số
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Vật lý đại cương
                  </span>
                }
              >
                <Menu.Item key="vlI">Vật lý I</Menu.Item>
                <Menu.Item key="vlII">Vật lý II</Menu.Item>
                <Menu.Item key="vlIII">Vật lý III</Menu.Item>
              </SubMenu>
              <Menu.Item key="thdc">
                <Icon type="home" />
                Tin học đại cương
              </Menu.Item>
              <Menu.Item key="vlIgIsIa">
                <Icon type="experiment" />
                Hoá vô cơ
              </Menu.Item>
              <Menu.Item key="vsldIII">
                <Icon type="experiment" />
                Hoá III
              </Menu.Item>
              <Menu.Item key="vflIIfI">
                <Icon type="experiment" />
                Hoá III
              </Menu.Item>
              <Menu.Item key="vslIgI">
                <Icon type="experiment" />
                Hoá III
              </Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Icon type="schedule" />
              Sự kiện
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default AppMenu;
