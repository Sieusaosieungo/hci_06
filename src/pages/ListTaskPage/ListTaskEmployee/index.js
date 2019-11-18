import React from "react";
import "./styles.css";
import ListTask from "../../../components/ListTask/index";
import { Row, Col, Icon, Button } from "antd";

const ListTaskPage = () => {
  return (
    <Row type="flex" gutter={[20, 10]} className="list-task-page">
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <label>
          <h1 className="list-task">Danh sách công việc nhân viên</h1>
        </label>
      </Col>
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <Button type="primary">
          <Icon type="plus-circle" />
          Tạo mới công việc
        </Button>
      </Col>
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <ListTask />
      </Col>
    </Row>
  );
};

export default ListTaskPage;
