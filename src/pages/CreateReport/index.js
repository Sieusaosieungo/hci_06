import React from 'react';
import { Form, Input, Button, DatePicker, Select, Upload, Icon } from 'antd';
import { connect } from 'react-redux';

import './style.css';

import { updateState } from '../../actions';

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 20 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 5
    }
  }
};

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }]
};

const CreateReport = ({
  form: { getFieldDecorator },
  form,
  history,
  dispatch,
  lstReport
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch(
          updateState({
            lstReport: [
              ...lstReport,
              {
                ...values,
                department: 'Kiểm tra chất lượng',
                _id: lstReport.length && lstReport.length + 1
              }
            ]
          })
        );
        history.push('/manage-report');
        console.log('Received values of form: ');
      }
    });
  };

  const handleSelectChange = (value) => {
    console.log(value);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className='create-report'>
      <div className='create-report-title'>Tạo cáo báo</div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label='Tên báo cáo'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Cần nhập tên báo cáo !'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Ngày báo cáo'>
          {getFieldDecorator(
            'finishDate',
            config
          )(<DatePicker placeholder={'YYYY/MM/DD'} />)}
        </Form.Item>
        <Form.Item label='Loại hình kiểm tra'>
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Chọn loại hình kiểm tra !' }]
          })(
            <Select
              onChange={handleSelectChange}
              placeholder='Chọn loại hình kiểm tra'
            >
              <Option value='Kiểm tra chất lượng quy trình xưởng thuốc nước thú y'>
                Kiểm tra chất lượng quy trình xưởng thuốc nước thú y
              </Option>
              <Option value='Kiểm tra chất lượng quy trình xưởng thuốc bột thú y'>
                Kiểm tra chất lượng quy trình xưởng thuốc bột thú y
              </Option>
              <Option value='Kiểm tra chất lượng quy trình xưởng thực phẩm chức năng'>
                Kiểm tra chất lượng quy trình xưởng thực phẩm chức năng
              </Option>
              <Option value='Kiểm tra chất lượng bao bì cấp 2'>
                Kiểm tra chất lượng bao bì cấp 2
              </Option>
              <Option value='Kiểm tra chất lượng nguyên liệu'>
                Kiểm tra chất lượng nguyên liệu
              </Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Người đánh giá'>
          {getFieldDecorator('censor', {
            rules: [
              {
                required: true,
                message: 'Cần nhập tên người đánh giá !'
              }
            ]
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item label='Người thực hiện kiểm tra'>
          {getFieldDecorator('worker', {
            rules: [
              {
                required: true,
                message: 'Cần nhập tên người thực hiện kiểm tra !'
              }
            ]
          })(<Input />)}
        </Form.Item> */}
        <Form.Item label='Các tiêu chí'>
          {getFieldDecorator('h', {
            rules: [
              {
                required: true,
                message: 'Cần nhập các tiêu chí !'
              }
            ]
          })(<TextArea />)}
        </Form.Item>
        <Form.Item label='Kết quả đạt được'>
          {getFieldDecorator('s', {
            rules: [
              {
                required: true,
                message: 'Cần nhập các kết quả đạt được !'
              }
            ]
          })(<TextArea />)}
        </Form.Item>
        <Form.Item label='Người thực hiện kiểm tra'>
          {getFieldDecorator('worker', {
            rules: [
              {
                required: true,
                message: 'Cần nhập tên người thực hiện kiểm tra !'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Mức độ hoàn thành'>
          {getFieldDecorator('completed', {
            rules: [
              {
                required: true,
                message: 'Cần nhập tên người thực hiện kiểm tra !'
              }
            ]
          })(<Input placeholder='50%' />)}
        </Form.Item>
        <Form.Item label='Kết quả kiểm tra chất lượng'>
          {getFieldDecorator('k', {
            rules: [
              {
                required: true,
                message: 'Cần nhập các kết quả kiểm tra chất lượng !'
              }
            ]
          })(<TextArea />)}
        </Form.Item>
        <Form.Item label='File đính kèm'>
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile
          })(
            <Upload name='logo' action='/upload.do' listType='picture'>
              <Button>
                <Icon type='upload' /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ global: { lstReport } }) => ({ lstReport });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: 'create-report' })(CreateReport));
