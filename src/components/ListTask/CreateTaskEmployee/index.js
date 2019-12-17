import React, { useState } from 'react';
import './styles.css';
import { Form, Select, DatePicker, Input, Button } from 'antd';
import { Col, Popconfirm, message } from "antd";
import TextArea from 'antd/lib/input/TextArea';
import { hideModal } from '../../../actions/index';
import { connect } from 'react-redux';

const CreateTaskEmployee = ({ dispatch, remainWeight }) => {
  const { Option } = Select;
  const [selectedTypeTask, setSelectedTypeTask] = useState();
  const [messageCheckDevice, setMessageCheckDevice] = useState(
    'Có đầy đủ thiết bị không? Các thiết bị cần đủ: Mã số thiết bị, tem'
  );
  const [messageCheckVeSinh, setMessageCheckVeSinh] = useState([
    'Kiểm tra trang phục: Quần áo, mũ, gang tay, giày dép',
    'Kiểm tra vệ sinh khu vực sản xuất',
    'Kiểm tra chất sát trùng và tẩy rửa'
  ]);

  const [messageCheckProduction, setMessageCheckProduction] = useState(
    'Kiểm tra việc áp dụng quy trình sản xuất'
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

  children.push(<Option key='Vũ Duy Mạnh'>DBCL_01 - Vũ Duy Mạnh</Option>);
  children.push(<Option key='Lê Đình Phúc'>DBCL_02 - Lê Đình Phúc</Option>);
  children.push(<Option key='Vũ Văn Nam'>DBCL_03 - Vũ Văn Nam</Option>);
  children.push(<Option key='Lê Minh Nguyễn'>DBCL_04 - Lê Minh Nguyễn</Option>);

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
  function confirm() {
    message.success('Bạn đã tạo công việc thành công !');
    dispatch(hideModal())
  }
  return (
    <div className='create-task-employee'>
      <Form {...formItemLayout}>
        <Col xl={24} lg={24} style={{ margin: '0 auto' }}>
          <Form.Item label='Tên công việc'>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item label='Người giao việc'>
            <Input placeholder='' disabled={true} value='Vũ Duy Mạnh' />
          </Form.Item>
          <Form.Item label='Chức vụ'>
            <Input placeholder='' disabled={true} value='Trưởng phòng bộ phận đảm bảo chất lượng' />
          </Form.Item>
          <Form.Item label={`Trọng số (còn lại ${remainWeight})`}>
            <Input placeholder={`0.0 <= Trọng số  <= ${remainWeight}`} />
          </Form.Item>
          <Form.Item label='Loại công'>
            <Select
              style={{ width: '100%' }}
              placeholder='Chọn giai đoạn kiểm tra'
              onChange={handleChange}
            >
              <Option key='1'>Kiểm tra nguyên liệu đầu vào</Option>
              <Option key='2'>Kiểm tra quy trình sản xuất</Option>
              <Option key='3'>Đảm bảo chất lượng đầu ra</Option>
            </Select>
          </Form.Item>

          <Form.Item label='Người kiểm duyệt'>
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Chọn người kiểm duyệt'
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item label='Loại công việc'>
            <Select defaultValue='0' onChange={handleChangeSelect}>
              <Option value='0'>Chọn loại công việc</Option>
              <Option value='1'>
                Kiểm tra chất lượng quy trình xưởng thuốc nước thú y
              </Option>
              <Option value='2'>Kiểm tra chất lượng bao bì cấp 1</Option>
              <Option value='3'>
                Kiểm tra chất lượng quy trình xưởng thuốc bột thú y
              </Option>
              <Option value='4'>
                Kiểm tra chất lượng quy trình xưởng thực phẩm chức năng
              </Option>

              <Option value='5'>Kiểm tra chất lượng bao bì cấp 2</Option>
              <Option value='6'>Kiểm tra chất lượng nguyên liệu</Option>
            </Select>
          </Form.Item>

          {selectedTypeTask === '1' ? (
            <>
              <Form.Item label='Số lần kiểm tra định kỳ 1 tháng'>
                <Input placeholder='' />
              </Form.Item>
              <Form.Item label='Số lần kiểm tra đột xuất 1 tháng'>
                <Input placeholder='' />
              </Form.Item>
              <Form.Item label='Kiểm tra thiết bị sản xuất'>
                <TextArea
                  rows={4}
                  value={messageCheckDevice}
                  onChange={handleChangeCheckDevice}
                ></TextArea>
              </Form.Item>
              <Form.Item label='Kiểm tra vệ sinh'>
                <TextArea
                  rows={4}
                  value={messageCheckVeSinh.map((item, id) => {
                    if (id === 0) {
                      return item;
                    }
                    return '\n' + item;
                  })}
                  onChange={handleChangeCheckVeSinh}
                ></TextArea>
              </Form.Item>
              <Form.Item label='Kiểm tra quy trình sản xuất'>
                <TextArea
                  rows={4}
                  value={messageCheckProduction}
                  onChange={handleChangeCheckProduction}
                ></TextArea>
              </Form.Item>
            </>
          ) : null}
          {selectedTypeTask === '2' ? (
            <>
              <Form.Item label='Số bao bì sản phẩm cần kiểm tra'>
                <Input placeholder='' />
              </Form.Item>
            </>
          ) : null}
          <Form.Item label='Deadline' style={{ marginBottom: 0 }}>
            <Form.Item
              style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            >
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} style={{ float: 'right' }}>
          <Popconfirm placement="top" title={"Bạn có chắc muốn tạo mới công việc không ?"} onConfirm={confirm} okText="Yes" cancelText="No">
            <Button
              type='primary'
              style={{ display: 'block', marginRight: '180px', float: "right" }}
              htmlType='submit'

            >
              Tạo mới
        </Button>
          </Popconfirm>
          <Button
            type='danger'
            style={{ float: 'right', marginRight: '10px' }}
            onClick={() => dispatch(hideModal())}
          >
            Huỷ
        </Button>
        </Col>
      </Form>
    </div >
  );
};

export default connect()(CreateTaskEmployee);
