import React from "react";
import "./styles.css";
import ListTask from "../../../components/ListTask/ListTaskEmployee";
import { Row, Col, Icon, Button } from "antd";
// import { Popconfirm } from "antd";
import CreateTaskEmployee from "../../../components/ListTask/CreateTaskEmployee/index";
import { connect } from "react-redux";
import { showModal } from "../../../actions/index";


const ListTaskPage = ({ dispatch }) => {


  // function confirm() {
  //   message.info('Clicked on Yes.');
  // }

  return (
    <Row type="flex" gutter={[20, 10]} className="list-task-page">
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        <label>
          <h1 className="list-task">Danh sách công việc nhân viên</h1>
        </label>
      </Col>
      <Col xs={24} sm={24} md={24} xl={24} lg={24}>
        
          <Button
            type="primary"
            onClick={() =>
              dispatch(
                showModal({
                  title: "Tạo mới công việc",
                  Component: <CreateTaskEmployee />,
                  width: "68vw",
                })
              )
            }
          >
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

export default connect()(ListTaskPage);
