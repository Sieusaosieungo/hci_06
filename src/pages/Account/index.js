import React from "react";
import './style.css';
import { Icon } from "antd";
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="account">
      <div className="account-info">
        <span>Cài đặt tài khoản</span>
        <div className="account-info-inner">
          <div className="aii-element">
            <div className="aii-left"><span>Tên</span></div>
            <div className="aii-center"><span>HCI 06</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Ngày sinh</span></div>
            <div className="aii-center"><span>01/01/1998</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Địa chỉ</span></div>
            <div className="aii-center"><span>Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Email</span></div>
            <div className="aii-center"><span>hci06@gmail.com</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Số điện thoại</span></div>
            <div className="aii-center"><span>0123456789</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Bộ phận</span></div>
            <div className="aii-center"><span>Bộ phận kiểm tra quy trình sản xuất</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
          <div className="aii-element">
            <div className="aii-left"><span>Chức vụ</span></div>
            <div className="aii-center"><span>Nhân viên kiểm tra</span></div>
            <div className="aii-right"><Icon type="edit" /> Chỉnh sửa</div>
          </div>
        </div>
        <div className="account-info-footer">
          Bạn có thấy thông tin có hữu ích không?
          <Link> Có, </Link>
          <Link>Không</Link>
          <span>. Ý kiến đóng góp của bạn?<Link> Okay</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Account;