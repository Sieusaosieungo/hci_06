import React, { useState } from 'react';
import './styles.css';
import { Form, Select, DatePicker, Input, Button, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CreateTaskEmployee = () => {
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

  children.push(<Option key='Vũ Duy Mạnh'>Vũ Duy Mạnh</Option>);
  children.push(<Option key='Lê Đình Phúc'>Lê Đình Phúc</Option>);
  children.push(<Option key='Vũ Văn Nam'>Vũ Văn Nam</Option>);
  children.push(<Option key='Lê Minh Nguyễn'>Lê Minh Nguyễn</Option>);

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
  return (
    <div className='create-task-employee'>
      <Form {...formItemLayout}>
        <Col xl={24} lg={24} style={{ margin: '0 auto' }}>
          <Form.Item label='Tên công việc'>
            <Input placeholder='' />
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
          <Form.Item label='Nhóm công việc lớn'>
            <Select defaultValue='0' onChange={handleChangeSelect}>
              <Option value='0'>Chọn nhóm công việc lớn</Option>
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
        <Button
          type='primary'
          style={{ display: 'block', margin: '0 auto' }}
          htmlType='submit'
        >
          Tạo mới
        </Button>
      </Form>
    </div>
  );
};

export default CreateTaskEmployee;
