import React from 'react';
import './style.css';

const ReportDetail = props => {
  return (
    <div className="report-detail">
      <span className="report-detail-title">Chi tiết báo cáo</span>
      <div className="report-detail-inner">
        <div className="rdi-element">
          <span className="rdi-title">Tên báo cáo</span>
          <span className="rid-content">Báo cáo kiểm tra chất lượng thuốc nén</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Ngày báo cáo</span>
          <span className="rid-content">20-11-2019</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Bộ phận được kiểm tra</span>
          <span className="rid-content">Xưởng sản xuất thuốc bột</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mã bộ phận được kiểm tra</span>
          <span className="rid-content">SXTB_01</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Người đánh giá</span>
          <span className="rid-content">Trần Trung Huỳnh</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mấ số người đánh giá</span>
          <span className="rid-content">KT_01</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Người thực hiện kiểm tra</span>
          <span className="rid-content">Phạm Đại Tài</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mấ số người thực hiện</span>
          <span className="rid-content">KT_02</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Tiêu chí đặt ra</span>
          <span className="rid-content">
            <p>Kiểm tra thiết bị sản xuất</p>
            <p>Kiểm tra vệ sinh</p>
            <p>Kiểm tra quy trình sản xuất</p>
          </span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Kết quả đạt được</span>
          <span className="rid-content">
            <p>Kiểm tra thiết bị sản xuất</p>
            <p>Kiểm tra vệ sinh</p>
            <p>Kiểm tra quy trình sản xuất</p>
          </span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mức độ hoàn thành</span>
          <span className="rid-content">85.587%</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Kết quả kiểm tra chất lượng</span>
          <span className="rid-content">
            <p>Kiểm tra thiết bị sản xuất</p>
            <p>Kiểm tra vệ sinh</p>
            <p>Kiểm tra quy trình sản xuất</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;