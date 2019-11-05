import React, { useEffect, useState } from "react";
import "./styles.less";
import { Button, Input } from "antd";

const LoginForm = () => {
  const [data, setDate] = useState({
    username: "",
    password: ""
  });
  const onChange = e => {
    console.log(e);
  };

  return (
    <div className="app-login">
      <label>Username: </label>
      <Input value={data.username} onChange={e => onChange(e)}></Input>
      <label>Password:</label>
      <Input value={data.password} onChange={e => onChange(e)}></Input>
    </div>
  );
};

export default LoginForm;
