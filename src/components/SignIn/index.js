import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { Link, Redirect } from "react-router-dom";

import "./style.css";

const prefixCls = "sign-in";

const SignIn = ({ form, form: { getFieldDecorator }, setAccount }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem("account", JSON.stringify(values));
        setAccount(values);
      }
    });
  };

  return (
    <div className={`${prefixCls}`}>
      <Form onSubmit={handleSubmit} className={`${prefixCls}-form`}>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item className="role">
          {getFieldDecorator("role", {
            valuePropName: "checked"
          })(<Checkbox>Bạn có phải là trưởng phòng?</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Nhớ mật khẩu</Checkbox>)}
          <Link to="" className={`${prefixCls}-form-forgot`}>
            Quên mật khẩu ?
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className={`${prefixCls}-form-button`}
          >
            Đăng nhập
          </Button>
          Or <Link to="/account/sign-up">Đăng kí ngay !</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "sign-in" })(SignIn);
