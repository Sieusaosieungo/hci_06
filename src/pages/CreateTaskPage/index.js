import React, { useState } from "react";
import { Select, Input } from "antd";

const InputGroup = Input.Group;
const { Option } = Select;

const CreateTaskPage = () => {
  const [state, setState] = useState({
    value: "",
    name: ""
  });

  const onChange = value => {
    setState({ ...state, value });
  };

  return (
    <div>
      <InputGroup compact>
        <Select value={state.value} onChange={onChange} defaultValue="1">
          <Option value="1">Between</Option>
          <Option value="2">Except</Option>
        </Select>
      </InputGroup>
    </div>
  );
};
export default CreateTaskPage;
