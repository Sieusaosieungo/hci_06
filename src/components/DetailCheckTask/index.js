import React from "react";
import { Modal } from "antd";
import "./style.css";

const DetailCheckTask = ({ addNewTask, saveNewTask, cancelNewTask, newTask }) => {
  console.log(newTask);
  return (
    <div className="detail-check-task">
      <Modal
        title="Modal"
        visible={newTask}
        onOk={saveNewTask}
        onCancel={cancelNewTask}
        okText="Ok"
        cancelText="Hủy bỏ"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </div>
  );
};

export default DetailCheckTask;