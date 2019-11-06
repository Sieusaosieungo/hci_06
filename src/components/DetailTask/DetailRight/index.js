import React, { useState } from "react";

import "./style.css";
import { Icon, Input, Avatar, Calendar, Select } from "antd";
import moment from 'moment';
import Option from "rc-mentions/lib/Option";

const DetailRight = props => {
  const [displayFormMember, setDisplayFormMember] = useState(false);
  const [displayFormTimeExpire, setDisplayFormTimeExpire] = useState(false);
  const [displayFormTask, setDisplayFormTask] = useState(false);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  
  const onClickMemberHandler = () => {
    setDisplayFormMember(!displayFormMember);
  };

  const onClickTimeExpireHandler = () => {
    setDisplayFormTimeExpire(!displayFormTimeExpire);
  };

  const onClickTask = () => {
    setDisplayFormTask(!displayFormTask)
  }

  const closeFormMember = () => {
    setDisplayFormMember(false);
  };

  const closeFormTimeExpire = () => {
    setDisplayFormTimeExpire(false);
  };

<<<<<<< HEAD
  return (
    <div className="detail-right">
      <h3 className="title-add-card">THÊM VÀO THẺ</h3>
      <div onClick={() => onClickMemberHandler()} className="button-link">
        <span>
          <Icon type="user" />
        </span>
        <span> Thành viên</span>
=======
  const closeFormTask = () => {
    setDisplayFormTask(false);
  }

  const onPanelChange = (value, mode) => {
    setDay(moment(value, mode).format("MM-DD-YYYY").toString());
    setTime(moment(value, mode).format("HH:mm").toString());
    console.log(moment(value, mode).format("MM-DD-YYYY").toString());
  }

  return <div className="detail-right">
    <h3 className="title-add-card">THÊM VÀO THẺ</h3>
    <div onClick={() => onClickMemberHandler()} className="button-link">
      <span><Icon type="user"/></span>
      <span>   Thành viên</span>   
    </div>
    {displayFormMember ? <div className="pop-over">
      <div className="member-title">
        <div style={{margin: '0 auto'}}>Thành viên</div>
        <span onClick={() => closeFormMember()} className="close-button"><Icon type="close" /></span>
>>>>>>> bfce95977509d79ddba6eb68be549457bf621bc1
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
<<<<<<< HEAD
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
=======
    </div>
      : null}
    <div className="button-link">
      <span><Icon type="tag" /></span>
      <span>   Nhãn</span>
    </div>
    <div onClick={() => onClickTask()} className="button-link">
      <span><Icon type="check-square" /></span>
      <span>   Việc cần làm</span>
    </div>
    {displayFormTask ? <div className="pop-over">
      <div className="member-title">
        <div style={{margin: '0 auto'}}>Thêm danh sách công việc</div>
        <span onClick={() => closeFormTask()} className="close-button"><Icon type="close" /></span>
      </div>
      <hr />
      <div style={{marginLeft: '10px'}}>Tiêu đề</div>
      <div className="member-input">
        <Input placeholder="Việc cần làm" />
      </div>
      <div style={{marginLeft: '10px'}}>Sao chép mục từ ...</div>
      <div className="member-input">
        <Select defaultValue="Nhiệm vụ" style={{ width: '100%' }}>
          <Option value="jack">Dân IT</Option>
          <Option value="lucy">HCI_06</Option>
        </Select>
      </div>
      <button onClick={() => closeFormTask()} className="button-success">Thêm</button>
    </div>
      : null}
    <div onClick={() => onClickTimeExpireHandler()} className="button-link">
      <span><Icon type="history" /></span>
      <span>   Ngày hết hạn</span>
    </div>
    {displayFormTimeExpire? <div className="pop-over">
      <div className="member-title">
        <div style={{margin: '0 auto'}}>Sửa ngày hết hạn</div>
        <span onClick={() => closeFormTimeExpire()} className="close-button"><Icon type="close" /></span>
      </div>
      <hr />
      <div className="expire-input">
        <div className="day">
          <p>Ngày</p>
          <div className="day-input" ><Input value={day}/></div>
        </div>
        <div className="time">
          <p>Thời gian</p>
          <div className="time-input"><Input value={time} /></div>
        </div>
      </div>
      <div style={{ border: '1px solid #d9d9d9', borderRadius: 4, margin: '10px', padding: '3px' }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
>>>>>>> bfce95977509d79ddba6eb68be549457bf621bc1
      </div>
      <button onClick={() => closeFormTimeExpire()} className="button-success">Lưu</button>
    </div>
  );
};

export default DetailRight;
