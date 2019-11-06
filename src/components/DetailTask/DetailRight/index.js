import React, { useState } from "react";

import "./style.css";
import { Icon, Input, Avatar } from "antd";

const DetailRight = props => {
  const [displayFormMember, setDisplayFormMember] = useState(false);
  const [displayFormTimeExpire, setDisplayFormTimeExpire] = useState(false);

  const onClickMemberHandler = () => {
    setDisplayFormMember(!displayFormMember);
  };

  const onClickTimeExpireHandler = () => {
    setDisplayFormTimeExpire(!displayFormTimeExpire);
  };

  const closeFormMember = () => {
    setDisplayFormMember(false);
  };

  const closeFormTimeExpire = () => {
    setDisplayFormTimeExpire(false);
  };

  return (
    <div className="detail-right">
      <h3 className="title-add-card">THÊM VÀO THẺ</h3>
      <div onClick={() => onClickMemberHandler()} className="button-link">
        <span>
          <Icon type="user" />
        </span>
        <span> Thành viên</span>
      </div>
      {displayFormMember ? (
        <div className="pop-over">
          <div className="member-title">
            <div style={{ margin: "0 auto" }}>Thành viên</div>
            <span onClick={() => closeFormMember()} className="close-button">
              <Icon type="close" />
            </span>
          </div>
          <hr />
          <div className="member-input">
            <Input placeholder="Tìm kiếm các thành viên" />
          </div>
          <div style={{ marginLeft: "10px" }}>THÀNH VIÊN CỦA BẢNG</div>
          <div className="member-list">
            <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
              U
            </Avatar>
            <span> Vũ Duy Mạnh (manhronado)</span>
          </div>
        </div>
      ) : null}
      <div className="button-link">
        <span>
          <Icon type="tag" />
        </span>
        <span> Nhãn</span>
      </div>
      <div className="button-link">
        <span>
          <Icon type="check-square" />
        </span>
        <span> Việc cần làm</span>
      </div>
      <div onClick={() => onClickTimeExpireHandler()} className="button-link">
        <span>
          <Icon type="history" />
        </span>
        <span> Ngày hết hạn</span>
      </div>
      {displayFormTimeExpire ? (
        <div className="pop-over">
          <div className="member-title">
            <div style={{ margin: "0 auto" }}>Ngày hết hạn</div>
            <span
              onClick={() => closeFormTimeExpire()}
              className="close-button"
            >
              <Icon type="close" />
            </span>
          </div>
          <hr />
          <div className="member-input">
            <Input placeholder="Tìm kiếm các thành viên" />
          </div>
          <div style={{ marginLeft: "10px" }}>THÀNH VIÊN CỦA BẢNG</div>
          <div className="member-list">
            <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
              U
            </Avatar>
            <span> Vũ Duy Mạnh (manhronado)</span>
          </div>
        </div>
      ) : null}
      <div className="button-link">
        <span>
          <Icon type="link" />
        </span>
        <span> Đính kèm</span>
      </div>
      <div className="button-link">
        <span>
          <Icon type="credit-card" />
        </span>
        <span> Ảnh bìa</span>
      </div>
      <h3 className="title-add-card">THAO TÁC</h3>
      <div className="button-link">
        <span>
          <Icon type="arrow-right" />
        </span>
        <span> Di chuyển</span>
      </div>
      <div className="button-link">
        <span>
          <Icon type="copy" />
        </span>
        <span> Sao chép</span>
      </div>
      <div className="button-link">
        <span>
          <Icon type="eye" />
        </span>
        <span> Theo dõi</span>
      </div>
      <hr />
      <div className="button-link">
        <span>
          <Icon type="save" />
        </span>
        <span> Lưu trữ</span>
      </div>
      <div className="button-link">
        <span>
          <Icon type="branches" />
        </span>
        <span> Chia sẻ</span>
      </div>
    </div>
  );
};

export default DetailRight;
