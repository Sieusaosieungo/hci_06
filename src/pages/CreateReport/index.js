import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Upload,
  Icon,
  message
} from "antd";
import {  useSelector, useDispatch } from "react-redux";
import moment from "moment";

import "./style.css";

import { updateState } from "../../actions";

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 20 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 5
    }
  }
};

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const CreateReport = ({ form: { getFieldDecorator }, form, history }) => {
  const taskDetail = useSelector(state => state.taskDetail);
  console.log("TCL: taskDetail", taskDetail);
  const { lstReport } = useSelector(state => state.global);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch(
          updateState({
            lstReport: [
              ...lstReport,
              {
                ...values,
                department: "Đảm bảo chất lượng",
                _id: lstReport.length && lstReport.length + 1
              }
            ]
          })
        );
        history.push("/manage-report");
        console.log("Received values of form: ");
      }
    });
  };

  const handleSelectChange = value => {
    console.log(value);
  };

  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onChange = event => {};

  return (
    <div className="create-report">
      <div className="create-report-title">Tạo báo cáo</div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Tên báo cáo">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Cần nhập tên báo cáo !"
              }
            ],
            initialValue: "Báo cáo " + taskDetail.name
          })(<Input value={taskDetail.name} onChange={onChange} />)}
        </Form.Item>
        <Form.Item label="Ngày báo cáo">
          {getFieldDecorator("dateFinish", {
            rules: [
              { type: "object", required: true, message: "Please select time!" }
            ],
            initialValue: moment(new Date("2019-10-18"))
          })(<DatePicker disabled placeholder={"YYYY/MM/DD"} />)}
        </Form.Item>
        <Form.Item label="Ngày hết hạn">
          {getFieldDecorator("finishDate", {
            rules: [
              { type: "object", required: true, message: "Please select time!" }
            ],
            initialValue: moment(new Date("2019-12-28"))
          })(<DatePicker disabled placeholder={"YYYY/MM/DD"} />)}
        </Form.Item>
        <Form.Item label="Loại hình kiểm tra">
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Chọn loại hình kiểm tra !" }],
            initialValue: taskDetail.type
          })(
            <Select
              onChange={handleSelectChange}
              placeholder="Chọn loại hình kiểm tra"
            >
              <Option value="Kiểm tra chất lượng quy trình xưởng thuốc nước thú y">
                Kiểm tra chất lượng quy trình xưởng thuốc nước thú y
              </Option>
              <Option value="Kiểm tra chất lượng quy trình xưởng thuốc bột thú y">
                Kiểm tra chất lượng quy trình xưởng thuốc bột thú y
              </Option>
              <Option value="Kiểm tra chất lượng quy trình xưởng thực phẩm chức năng">
                Kiểm tra chất lượng quy trình xưởng thực phẩm chức năng
              </Option>
              <Option value="Kiểm tra chất lượng bao bì cấp 2">
                Kiểm tra chất lượng bao bì cấp 2
              </Option>
              <Option value="Kiểm tra chất lượng nguyên liệu">
                Kiểm tra chất lượng nguyên liệu
              </Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Người đánh giá">
          {getFieldDecorator("censor", {
            rules: [
              {
                required: true,
                message: "Cần nhập tên người đánh giá !"
              }
            ],
            initialValue: taskDetail.censor
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Các tiêu chí">
          {getFieldDecorator("cac-tieu-chi", {
            rules: [
              {
                required: true,
                message: "Cần nhập các tiêu chí !"
              }
            ],
            initialValue: taskDetail.name
          })(<TextArea />)}
        </Form.Item>
        {/* <Form.Item label="Kết quả đạt được">
          {getFieldDecorator("ket-qua-dat-duoc  ", {
            rules: [
              {
                required: true,
                message: "Cần nhập các kết quả đạt được !"
              }
            ]
          })(<TextArea placeholder="Nhập kết quả đạt được" />)}
        </Form.Item> */}
        <Form.Item label="Người thực hiện kiểm tra">
          {getFieldDecorator("worker", {
            rules: [
              {
                required: true,
                message: "Cần nhập tên người thực hiện kiểm tra !"
              }
            ],
            initialValue: taskDetail.worker
          })(<Input disabled />)}
        </Form.Item>
        <Form.Item label="Mức độ hoàn thành">
          {getFieldDecorator("completed", {
            rules: [
              {
                required: true,
                message: "Cần nhập tên người thực hiện kiểm tra !"
              }
            ],
            initialValue: taskDetail.status + "%"
          })(<Input placeholder="50%" />)}
        </Form.Item>
        <Form.Item label="Kết quả kiểm tra chất lượng">
          {getFieldDecorator("ket-qua-kiem-tra-chat-luong", {
            rules: [
              {
                required: true,
                message: "Cần nhập các kết quả kiểm tra chất lượng !"
              }
            ]
          })(<TextArea placeholder="Nhập kết quả kiểm tra chất lượng" />)}
        </Form.Item>
        <Form.Item label="File đính kèm">
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: normFile
          })(
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "create-report" })(CreateReport);
