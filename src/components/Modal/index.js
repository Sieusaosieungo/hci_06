import React from "react";
import { Modal } from "antd";

const AppModal = ({
  title = "Modal",
  visible = false,
  okText = "OK",
  onOk = () => {},
  cancelText = "Cancel",
  onCancel = () => {},
  children
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
