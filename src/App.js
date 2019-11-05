import React from "react";
import Headers from "./components/Header/index";
import Siders from "./components/Sider/index";
import BreadCrumb from "./components/BreadCrumb/index";
import Contents from "./components/Content/index";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";

function App({ children }) {
  return (
    <div className="App">
      <Layout>
        <Headers />
        <Layout>
          <Siders />
          <Layout style={{ padding: "0 24px 24px" }}>
            <BreadCrumb />
            <Contents>{children}</Contents>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
