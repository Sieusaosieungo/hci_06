import React, { useState, useEffect } from "react";
import ListTask from "../../components/ListTask/index";
import { Row, Col } from "antd";

const ListTaskPage = () => {
  return (
    <Row type="flex" gutter={[20, 10]} className="list-task-page">
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <label>
          <h1>Danh sách công việc</h1>
        </label>
      </Col>
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <ListTask />
      </Col>
    </Row>
  );
};

export default ListTaskPage;
