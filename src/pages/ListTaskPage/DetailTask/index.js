import React from "react";
import "./style.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="detail-task">
      <h3>
        Tên công việc: <span className="detail-value">Công việc tháng 11</span>
      </h3>
      <h3>Mục tiêu cần đạt được:</h3>
      <div className="criteria">
        <p>
          <Icon type="check" />
          <span> Đảm bảo chất lượng 50 quy trình</span>
        </p>
        <p>
          <Icon type="check" />
          <span> Đảm bảo chất lượng 50,000 sản phẩm đầu ra</span>
        </p>
        <p>
          <Icon type="check" />
          <span> Đảm bảo chất lượng 1000kg nguyên liệu đầu vào</span>
        </p>
        <p>
          <Icon type="check" />
          <span> Đảm bảo chất lượng 5000 bao bì</span>
        </p>
        <p>
          <Icon type="check" />
          <span> Đảm bảo số lượng hàng trả về nhỏ hơn 100 sản phẩm</span>
        </p>
      </div>
      <h3>
        Người kiểm duyệt: <span className="detail-value">Giám đốc</span>
      </h3>
      <h3>
        Ngày giao: <span className="detail-value">11-11-2019</span>
      </h3>
      <h3>
        Deadline: <span className="detail-value">11-12-2019</span>
      </h3>
      <h3>
        Trạng thái: <span className="detail-value">Đã hoàn thành</span>
      </h3>
      <h3>
        Thời gian hoàn thành: <span className="detail-value">09-12-2019</span>
      </h3>
      <h3>
        File đính kèm:{" "}
        <Link to="#" className="attach-file">
          Task-description.docx
        </Link>
      </h3>
      <h3>Tiêu chí đánh giá công việc: </h3>
      <div className="criteria">
        <p>
          <Icon type="check" />
          <span className="detail-value"> Đảm bảo chất lượng 50 quy trình</span>
        </p>
        <p>
          <Icon type="check" />
          <span className="detail-value">
            {" "}
            Đảm bảo chất lượng 50,000 sản phẩm đầu ra
          </span>
        </p>
        <p>
          <Icon type="check" />
          <span className="detail-value">
            {" "}
            Đảm bảo chất lượng 1000kg nguyên liệu đầu vào
          </span>
        </p>
        <p>
          <Icon type="check" />
          <span className="detail-value"> Đảm bảo chất lượng 5000 bao bì</span>
        </p>
        <p>
          <Icon type="check" />
          <span className="detail-value">
            {" "}
            Đảm bảo số lượng hàng trả về nhỏ hơn 100 sản phẩm
          </span>
        </p>
        <p>
          <Icon type="check" />
          <span className="detail-value" n>
            {" "}
            Hoàn thành công việc đúng thời hạn
          </span>
        </p>
      </div>
    </div>
  );
}
