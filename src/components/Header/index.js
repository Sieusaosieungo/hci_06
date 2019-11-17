import React, { useState } from "react";
import { Layout, Icon, Avatar, Badge, Drawer, Popconfirm, Button, message } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
const { Header } = Layout;

const Headers = () => {
  const [state, setState] = useState({
    visibleNotice: false,
    visibleSetting: false,
    visibleHelp: false,
    visibleUser: false
  });

  const showDrawerNotice = () => {
    setState({
      ...state,
      visibleNotice: true
    });
  };

  const onCloseNotice = () => {
    setState({
      ...state,
      visibleNotice: false
    });
  };
  const showDrawerSetting = () => {
    setState({
      ...state,
      visibleSetting: true
    });
  };

  const onCloseSetting = () => {
    setState({
      ...state,
      visibleSetting: false
    });
  };
  const showDrawerHelp = () => {
    setState({
      ...state,
      visibleHelp: true
    });
  };

  const onCloseHelp = () => {
    setState({
      ...state,
      visibleHelp: false
    });
  };
  const showDrawerUser = () => {
    setState({
      ...state,
      visibleUser: true
    });
  };

  const onCloseUser = () => {
    setState({
      ...state,
      visibleUser: false
    });
  };

  function confirm() {
    message.success('Đã xóa thông báo thành công');
  }

  const text = "Bạn có chắc chắn muốn xóa thông báo?";

  return (
    <Header className="header" style={{ lineHeight: "55px", height: "55px" }}>
      <div className="logo" />
      <div className="header-left">
        <div className="header-left-img">
          <img
            src="data:image/jpeg;base64,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"
            alt="icon interface"
          />
        </div>
        <div className="header-left-text">
          <div className="header-left-text-large">
            <span>KeHoachA</span>
            <Icon type="star" />
          </div>
          <div className="header-left-text-small">
            <span>ThucThi</span>
          </div>
        </div>
      </div>
      <div className="header-center">
        <div className="header-center-menu">
          <div className="header-center-item">
            <Link to=""></Link>
          </div>
          <div className="header-center-item">
            <Link to="/process"></Link>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-tool">
          <div className="notice">
            <div className="header-tool-item  notice" onClick={showDrawerNotice}>
              <Icon type="bell" />
              <Badge count={199} overflowCount={99}>
                <Link to="" className="head-example" />
              </Badge>
            </div>
            <Drawer
              title="Thông báo"
              width={400}
              onClose={onCloseNotice}
              visible={state.visibleNotice}
            >
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT02 Phạm Đại Tài </span>
                    <span className="notice-element-info">nộp báo cáo tháng 10</span>
                  </div>
                  <span className="notice-element-date">11:21:40 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT01 Vũ Duy Mạnh </span>
                    <span className="notice-element-info">báo cáo kiểm tra bộ phận SX02</span>
                  </div>
                  <span className="notice-element-date">11:19:29 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT03 Lê Đình Phúc </span>
                    <span className="notice-element-info">cập nhật tiến độ kiểm tra bộ phận SX02</span>
                  </div>
                  <span className="notice-element-date">10:12:28 - 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT04 Nguyễn Việt Hùng </span>
                    <span className="notice-element-info">nộp báo cáo tháng 10</span>
                  </div>
                  <span className="notice-element-date">10:07:10 - 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT03 Lê Đình Phúc </span>
                    <span className="notice-element-info">nộp báo cáo tháng 10</span>
                  </div>
                  <span className="notice-element-date">9:48:28 - 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT05 Trần Trung Huỳnh </span>
                    <span className="notice-element-info">xin phép nghỉ làm ngày 31-10-2019</span>
                  </div>
                  <span className="notice-element-date">7:22:15 - 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT02 Phạm Đại Tài </span>
                    <span className="notice-element-info">báo cáo kiểm tra bộ phận SX01</span>
                  </div>
                  <span className="notice-element-date">16:38:21 - 30/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT02 Phạm Đại Tài </span>
                    <span className="notice-element-info">vừa nộp báo cáo tháng 10</span>
                  </div>
                  <span className="notice-element-date">11:21:40 - 31/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
              <div className="notice-element">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                <div className="notice-element-inner">
                  <div className="notice-element-content">
                    <span className="notice-element-name">KT03 Lê Đình Phúc </span>
                    <span className="notice-element-info">báo cáo kết quả kiểm tra bộ phận SX10</span>
                  </div>
                  <span className="notice-element-date">11:21:40 - 29/10/2019</span>
                </div>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: '0px' }}>
                    <Icon type="delete" style={{ fontSize: '18px' }} />
                  </Button>
                </Popconfirm>
              </div>
            </Drawer>
          </div>
          <div className="header-tool-item setting">
            <Icon type="setting" onClick={showDrawerSetting} />
            <Drawer
              title="Cài đặt"
              width={300}
              onClose={onCloseSetting}
              visible={state.visibleSetting}
            >
              <div />
            </Drawer>
          </div>
          <div className="header-tool-item help">
            <Icon
              type="question-circle"
              theme="twoTone"
              onClick={showDrawerHelp}
            />
            <Drawer
              title="Trợ giúp"
              width={300}
              onClose={onCloseHelp}
              visible={state.visibleHelp}
            >
              <div />
            </Drawer>
          </div>
          <div className="header-right-account header-tool-item">
            <div onClick={showDrawerUser} className="header-right-account header-tool-item">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon="user"
              />
              <span>HCI 06</span>
            </div>
            <Drawer
              title="Tài khoản của bạn"
              width={300}
              onClose={onCloseUser}
              visible={state.visibleUser}
            >
              <div className="drawer-acount">
                <div className="drawer-account-avatar">
                  <div className="drawer-account-inner">
                    <div className="drawer-account-avatar">
                      <Avatar
                        size={80}
                        style={{ backgroundColor: "#87d068" }}
                        icon="user"
                      />
                    </div>
                    <div className="drawer-account-info">
                      <span className="drawer-account-username">
                        HCI 06
                      </span>
                      <span className="drawer-account-email">
                        hci06@gmail.com
                      </span>
                      <Link to="account">Tài khoản</Link>
                      <Link to="">Đăng xuất</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Headers;
