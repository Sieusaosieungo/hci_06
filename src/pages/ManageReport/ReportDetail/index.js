import React from 'react';
import './style.css';

const ReportDetail = props => {
  return (
    <div className="report-detail">
      <span className="report-detail-title">Chi tiết báo cáo</span>
      <div className="report-detail-inner">
        <div className="rdi-element">
          <span className="rdi-title">Tên báo cáo</span>
          <span className="rid-content">Báo cáo đảm bảo chất lượng thuốc nén</span>
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
          <span className="rdi-title">Mã số người đánh giá</span>
          <span className="rid-content">KT_01</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Người thực hiện kiểm tra</span>
          <span className="rid-content">Phạm Đại Tài</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mã số người thực hiện</span>
          <span className="rid-content">KT_02</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Tiêu chí đặt ra</span>
          <div className="rid-content-table">
            <div className='rid-content-left ridc ridc-title'>
              <p>Kiểm tra thiết bị sản xuất</p>
              <p>Kiểm tra vệ sinh</p>
              <p>Kiểm tra quy trình sản xuất</p>
            </div>
            <div className='rid-content-center ridc'>
              <p>Thiết bị và dụng cụ</p>
              <p>Kiểm tra trang phục, vệ sinh, sát trùng</p>
              <p>Kiểm tra áp dụng quy trình sản xuất</p>
            </div>
            <div className='rid-content-right ridc'>
              <p>336 thiết bị cần kiểm tra</p>
              <p>54 nhân viên cần kiểm tra</p>
              <p>20 nhân viên cần kiểm tra</p>
            </div>
          </div>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Kết quả đạt được</span>
          <div className="rid-content-table">
            <div className='rid-content-left ridc ridc-title'>
              <p>Kiểm tra thiết bị sản xuất</p>
              <p>Kiểm tra vệ sinh</p>
              <p>Kiểm tra quy trình sản xuất</p>
            </div>
            <div className='rid-content-center ridc'>
              <p>Kiểm tra 336/336 thiết bị dự kiến</p>
              <p>Kiểm tra 36/54 nhân viên dự kiến</p>
              <p>Kiểm tra 18/20 nhân viên dự kiến</p>
            </div>
            <div className='rid-content-right ridc'>
              <p>100%</p>
              <p>66,7%</p>
              <p>90%</p>
            </div>
          </div>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Mức độ hoàn thành của người kiểm tra</span>
          <span className="rid-content">85.587%</span>
        </div>
        <div className="rdi-element">
          <span className="rdi-title">Kết quả kiểm tra chất lượng</span>
          <div className="rid-content-table">
            <div className='rid-content-left ridc ridc-title'>
              <p>Kiểm tra thiết bị sản xuất</p>
              <p>Kiểm tra vệ sinh</p>
              <p>Kiểm tra quy trình sản xuất</p>
            </div>
            <div className='rid-content-center ridc'>
              <p>Đầy đủ, 2 máy trộn thuốc bị hỏng</p>
              <p>34/36 đạt chuẩn</p>
              <p>18/18 đạt chuẩn</p>
            </div>
            <div className='rid-content-right ridc'>
              <p>99,4%</p>
              <p>94,4%</p>
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ReportDetail;