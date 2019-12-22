import React, { useState, useEffect } from "react";
import "./styles.css";
import { Form, Select, DatePicker, Input, Button } from "antd";
import { Col, Popconfirm, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { hideModal, updateState } from "../../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CreateTaskEmployee = ({ dispatch, text, history }) => {
  let addTask = { ...text };
  addTask.index = "CVNV7";
  addTask.departmentCode = text.index;
  addTask.worker = "Vũ Văn Nam";
  addTask.weight = "0.15";
  addTask.status = 0;

  const { Option } = Select;
  const [selectedTypeTask, setSelectedTypeTask] = useState("0");

  useEffect(() => {
    setSelectedTypeTask("0");
    return () => {
      setSelectedTypeTask("0");
    };
  }, [text]);

  const [messageCheckDevice, setMessageCheckDevice] = useState(
    "Có đầy đủ thiết bị không? Các thiết bị cần đủ: Mã số thiết bị, tem"
  );
  const [messageCheckVeSinh, setMessageCheckVeSinh] = useState([
    "Kiểm tra trang phục: Quần áo, mũ, gang tay, giày dép",
    "Kiểm tra vệ sinh khu vực sản xuất",
    "Kiểm tra chất sát trùng và tẩy rửa"
  ]);

  const [messageCheckProduction, setMessageCheckProduction] = useState(
    "Kiểm tra việc áp dụng quy trình sản xuất"
  );

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 }
    }
  };
  const children = [];

  children.push(<Option key="Vũ Duy Mạnh">DBCL_01 - Vũ Duy Mạnh</Option>);
  children.push(<Option key="Lê Đình Phúc">DBCL_02 - Lê Đình Phúc</Option>);
  children.push(<Option key="Vũ Văn Nam">DBCL_03 - Vũ Văn Nam</Option>);
  children.push(<Option key="Lê Minh Nguyễn">DBCL_04 - Lê Minh Nguyễn</Option>);
  children.push(
    <Option key="GĐ. Nguyễn Việt Hùng">GĐ. Nguyễn Việt Hùng</Option>
  );

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleChangeSelect(value) {
    setSelectedTypeTask(value);
  }

  function handleChangeCheckDevice(value) {
    setMessageCheckDevice(value.target.value);
  }

  function handleChangeCheckVeSinh(value) {
    setMessageCheckVeSinh(value.target.value);
  }

  function handleChangeCheckProduction(value) {
    setMessageCheckProduction(value.target.value);
  }

  return (
    <div className="create-task-employee">
      <Form {...formItemLayout}>
        <Col xl={24} lg={24} style={{ margin: "0 auto" }}>
          <Form.Item label="Mã công việc phòng ban">
            <Input value={text.index} disabled />
          </Form.Item>
          <Form.Item label="Tên công việc">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item label="Người giao việc">
            <Input placeholder="" disabled={true} value="Vũ Duy Mạnh" />
          </Form.Item>
          <Form.Item label="Chức vụ">
            <Input
              placeholder=""
              disabled={true}
              value="Trưởng phòng bộ phận đảm bảo chất lượng"
            />
          </Form.Item>
          <Form.Item label={`Trọng số (còn lại ${text.remainWeight})`}>
            <Input placeholder={`0.0 <= Trọng số  <= ${text.remainWeight}`} />
          </Form.Item>
          <Form.Item label="Loại công việc">
            <Input value={text.type} disabled></Input>
          </Form.Item>

          <Form.Item label="Người phụ trách">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Chọn người phụ trách"
              name="worker"
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item label="Người kiểm duyệt">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Chọn người kiểm duyệt"
              name="censor"
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>

          {text.type !== "Kiểm tra nguyên liệu đầu vào" && (
            <Form.Item label="Nhóm quy trình">
              <Select value={selectedTypeTask} onChange={handleChangeSelect}>
                <Option value="0">Nhóm quy trình...</Option>

                <Option value="1">
                  {text.type === "Kiểm tra quy trình sản xuất"
                    ? "KTCL quy trình xưởng thuốc nước thú y"
                    : "KTCL bao bì cấp 1"}
                </Option>
                <Option value="2">
                  {text.type === "Kiểm tra quy trình sản xuất"
                    ? "KTCL quy trình xưởng thuốc bột thú y"
                    : "KTCL bao bì cấp 2"}
                </Option>
                {text.type === "Kiểm tra quy trình sản xuất" && (
                  <Option value="3">KTCL quy trình xưởng TPCN</Option>
                )}
              </Select>
            </Form.Item>
          )}

          {selectedTypeTask !== "0" &&
          text.type === "Kiểm tra quy trình sản xuất" ? (
            <>
              <Form.Item label="Số lần kiểm tra định kỳ 1 tháng">
                <Input placeholder="" />
              </Form.Item>
              <Form.Item label="Số lần kiểm tra đột xuất 1 tháng">
                <Input placeholder="" />
              </Form.Item>
              <Form.Item label="Kiểm tra thiết bị sản xuất">
                <TextArea
                  rows={4}
                  value={messageCheckDevice}
                  onChange={handleChangeCheckDevice}
                ></TextArea>
              </Form.Item>
              <Form.Item label="Kiểm tra vệ sinh">
                <TextArea
                  rows={4}
                  value={messageCheckVeSinh.map((item, id) => {
                    if (id === 0) {
                      return item;
                    }
                    return "\n" + item;
                  })}
                  onChange={handleChangeCheckVeSinh}
                ></TextArea>
              </Form.Item>
              <Form.Item label="Kiểm tra quy trình sản xuất">
                <TextArea
                  rows={4}
                  value={messageCheckProduction}
                  onChange={handleChangeCheckProduction}
                ></TextArea>
              </Form.Item>
            </>
          ) : null}

          {selectedTypeTask !== "0" &&
          text.type === "Kiểm tra sản phẩm đầu ra" ? (
            <>
              <Form.Item label="Số bao bì sản phẩm cần kiểm tra">
                <Input placeholder="" />
              </Form.Item>
            </>
          ) : null}
          <Form.Item label="Ngày hết hạn" style={{ marginBottom: 0 }}>
            <Form.Item
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} style={{ float: "right" }}>
          <Link to="/list-task-employee">
            <Button
              type="primary"
              style={{
                display: "block",
                marginRight: "180px",
                float: "right"
              }}
              htmlType="submit"
              onClick={() => {
                dispatch(updateState({ addTask }));
                message.success("Bạn đã tạo công việc thành công !");
                dispatch(hideModal());
              }}
            >
              Tạo mới
            </Button>
          </Link>

          <Button
            type="danger"
            style={{ float: "right", marginRight: "10px" }}
            onClick={() => {
              setSelectedTypeTask(0);
              dispatch(hideModal());
            }}
          >
            Huỷ
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default connect()(CreateTaskEmployee);
