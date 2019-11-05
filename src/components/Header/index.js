import React, { useState, useEffect } from "react";
import "./styles.less";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { showModal, hideModal } from "@actions/index";
import LoginForm from "@components/LoginForm/index";
import { Input, Button, Icon } from "antd";

const { Search } = Input;

const Header = ({ dispatch }) => {
  const [value, setValue] = useState("");

  const onSearch = value => {
    console.log("TCL: Header -> value", value);
    setValue("");
  };
  const onChange = event => {
    event.preventDefault();
    setValue(event.target.value);
    console.log(value);
  };

  useEffect(() => {}, [value]);

  return (
    <div className="app-header">
      <div className="app-header-content">
        <Row gutter={[10, 0]} type="flex" justify="end" align="middle">
          <Col xs={16} sm={18} md={4} lg={3} xl={2}>
            <div className="app-logo">
              <Icon
                type="home"
                theme="filled"
                style={{ fontSize: "40px", color: "#08c", float: "left" }}
              />
              <b>Logo</b>
            </div>
          </Col>
          <Col xs={0} sm={0} md={16} lg={18} xl={20}>
            <Search
              type="text"
              value={value}
              style={{ maxWidth: "450px", float: "right", height: "40px" }}
              size="large"
              placeholder="Search ..."
              onChange={event => onChange(event)}
              enterButton
              onSearch={value => onSearch(value)}
            />
          </Col>
          <Col xs={8} sm={6} md={4} lg={3} xl={2}>
            <div className="app-login">
              <Button
                type=""
                size={"large"}
                onClick={() =>
                  dispatch(
                    showModal({
                      title: "Đăng nhập",
                      Component: <LoginForm />,
                      onOk: () => dispatch(hideModal()),
                      onCancel: () => dispatch(hideModal())
                    })
                  )
                }
              >
                Đăng nhập
              </Button>
            </div>
          </Col>
        </Row>
        <div className="search-replace">
          <Row type="flex" justify="end" style={{ margin: "10px 0" }}>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Search
                type="text"
                value={value}
                style={{ float: "right", height: "40px" }}
                size="large"
                placeholder="Search ..."
                onChange={event => onChange(event)}
                enterButton
                onSearch={value => onSearch(value)}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default connect()(Header);
