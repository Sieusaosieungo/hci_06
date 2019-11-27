import React from "react";
import './style.css';
import { Input, Button } from "antd";
const { TextArea } = Input;

const WorkReport = () => {
  // const [state, setState] = useState({
  // });

  return (
    <div className="work-report">
      <div className="work-report-inner">
        <div className="work-report-title">
          <span>Báo cáo công việc</span>
        </div>
        <div className="work-report-input-title">
          <Input placeholder="Tên kế hoạch" />
        </div>
        <div className="work-report-input-content">
          <p className="work-report-textarea-title">Mô tả</p>
          <TextArea rows={6} />
        </div>
        <Button className="work-report-sumbmit">Tạo mới</Button>
      </div>
    </div>
  );
};

export default WorkReport;