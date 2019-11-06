import React from "react";
import Headers from "./components/Header/index";
import Siders from "./components/Sider/index";
import BreadCrumb from "./components/BreadCrumb/index";
import Contents from "./components/Content/index";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./App.css";
import { Modal } from "antd";
import { connect } from "react-redux";

function App({ modal, children, dispatch }) {
  return (
    <div className="App">
      <Layout>
        <Modal
          title={modal.title}
          visible={modal.visible}
          onOk={modal.onOk}
          onCancel={modal.onCancel}
          width="65vw"
        >
          {modal.Component}
        </Modal>
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

const mapStateToProps = ({ modal }) => {
  return {
    modal
  };
};

export default connect(mapStateToProps)(App);
