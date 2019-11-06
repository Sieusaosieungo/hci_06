import React from "react";
import { Modal, Button, Icon } from "antd";
import { DatePicker, Upload, message, Checkbox } from "antd";
import "./style.css";

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

const DetailCheckTask = ({
  addNewTask,
  saveNewTask,
  cancelNewTask,
  newTask
}) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="detail-check-task">
      <Modal
        title="Tạo công việc"
        visible={newTask}
        onOk={saveNewTask}
        onCancel={cancelNewTask}
        okText="Ok"
        cancelText="Hủy bỏ"
      >
        <div className="process">
          <div className="process-title">
            <p>Tên công việc</p>
            <input placeholder="Tên công việc" />
          </div>
          <div className="process-content">
            <div className="process-room">
              <p>Các phòng ban liên quan</p>
              <input placeholder="Phòng ban liên quan" />
            </div>
            <div className="process-person">
              <p>Người thực hiện</p>
              <input placeholder="Người thực hiện" />
            </div>
            <div className="process-priority">
              <p>Mức ưu tiên</p>
              <select>
                <option>Cao</option>
                <option>Trung bình</option>
                <option>Thấp</option>
              </select>
            </div>
            <div className="process-progress">
              <p>Tiến độ</p>
              <select>
                <option>Đang thực thi</option>
                <option>Bắt đầu</option>
              </select>
            </div>
            <div className="process-start-date">
              <p>Ngày bắt đầu</p>
              <DatePicker onChange={onChange} />
            </div>
            <div className="process-end-date">
              <p>Ngày kết thúc</p>
              <DatePicker onChange={onChange} />
            </div>
          </div>
          <div className="process-description">
            <p>Mô tả chi tiết công việc</p>
            <textarea placeholder="Nhập mô tả"></textarea>
          </div>
          <div className="process-upload-file">
            <p>Tệp đính kèm</p>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="process-check">
            <p>Các tiêu chí kiểm tra</p>
            <Checkbox onChange={onChange} checked>
              Thời gian sản xuất
            </Checkbox>
            <br />
            <Checkbox onChange={onChange}>Chi phí sản xuất</Checkbox>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailCheckTask;
