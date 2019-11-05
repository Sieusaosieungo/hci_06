import React, { useState } from "react";
import { Icon, Button, Input, Modal } from "antd";
import { Col } from "antd";
import "./styles.css";
import DetailTask from "../DetailTask/index";

const { TextArea } = Input;

const ListTask = ({ title, listTask, addNewTask, addNewListTask }) => {
  const [state, setState] = useState({
    isShowTitleForm: false,
    isShowTaskForm: false,
    taskName: "",
    title: ""
  });

  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };
  const showForm = () => {
    return state.isShowTitleForm === false ? (
      <Button
        type="primary"
        size="large"
        style={{ width: "250px", height: "40px", float: "left" }}
        onClick={() => setState({ ...state, isShowTitleForm: true })}
      >
        <Icon type="plus" />
        Thêm danh sách khác
      </Button>
    ) : (
      <>
        <Input
          style={{ width: "250px" }}
          placeholder="Nhập tiêu đề danh sách ..."
          value={state.title}
          onChange={e => setState({ ...state, title: e.target.value })}
        ></Input>
        <Button
          onClick={handleNewListTask} // đoạn này nó sẽ thêm 1 cái danh sách công việc
          style={{ margin: "5px 3px 5px 0" }}
          type="primary"
        >
          <Icon type="plus" />
          Thêm danh sách
        </Button>
        <Button
          type="danger"
          onClick={() => setState({ ...state, isShowTitleForm: false })}
        >
          <Icon type="close"></Icon>
        </Button>
      </>
    );
  };

  const handleNewTask = () => {
    if (state.taskName) addNewTask(title, state.taskName);
    setState({ ...state, isShowTaskForm: false, taskName: "" });
  };

  const handleNewListTask = () => {
    if (state.title) addNewListTask(state.title);
    setState({ ...state, isShowTitleForm: false, title: "" });
  };

  const showListTask = (title, listTask) => {
    return (
      <div className="app-list-task">
        <h2 className="title">{title}</h2>
        <div className="list-task">
          {listTask.map((taskName, index) => {
            return (
              <>
                <Modal
                  title="Chi tiết công việc"
                  visible={isShowModal}
                  onOk={hideModal}
                  onCancel={hideModal}
                  width='60vw'
                >
                  <DetailTask taskName={taskName} />
                </Modal>

                <Button
                  className="task"
                  size="large"
                  style={{ height: "30px", width: "100%" }}
                  key={index}
                  onClick={showModal}
                >
                  <span>{taskName}</span>
                  <Icon type="edit"></Icon>
                </Button>
              </>
            );
          })}
        </div>
        {state.isShowTaskForm ? (
          <>
            <TextArea
              value={state.taskName}
              onChange={e => setState({ ...state, taskName: e.target.value })}
              placeholder="Nhập tiêu đề cho thẻ này ..."
            />

            <div className="add-new-task">
              <Button
                onClick={handleNewTask}
                type="primary"
                style={{ width: "70%" }}
              >
                <span style={{ float: "left" }}>
                  <Icon type="plus" /> Thêm công việc
                </span>
              </Button>
              <Button
                style={{ marginLeft: "3px" }}
                type="danger"
                onClick={() => setState({ ...state, isShowTaskForm: false })}
              >
                <Icon type="close" />
              </Button>
            </div>
          </>
        ) : (
          <Button
            onClick={() => setState({ ...state, isShowTaskForm: true })}
            type="primary"
          >
            <Icon type="plus" />
            Thêm công việc
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        {title ? showListTask(title, listTask) : showForm()}
      </Col>
    </>
  );
};
export default ListTask;
