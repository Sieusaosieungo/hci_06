import React from "react";
import { Layout } from "antd";

import DetailTask from "../../components/DetailTask";

const { Content } = Layout;

function Contents() {
  return (
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      <DetailTask />
    </Content>
  );
}
export default Contents;
