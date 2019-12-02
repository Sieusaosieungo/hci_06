import React, { useState, useEffect } from "react";
import Headers from "./components/Header/index";
import Siders from "./components/Sider/index";
import BreadCrumb from "./components/BreadCrumb/index";
import Contents from "./components/Content/index";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./App.css";
import { Modal } from "antd";
import { connect } from "react-redux";
import { hideModal } from "./actions/index";
import SignIn from "./components/SignIn";

function App({ modal, children, dispatch }) {
  const [account, setAccount] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (
      account.email === "huynh123@gmail.com" &&
      account.password === "huynh123"
    ) {
      setIsAuth(true);
    }
  }, [JSON.stringify(account)]);

  if (isAuth) {
    return (
      <div className="App">
        <Layout>
          <Modal
            centered
            title={modal.title}
            visible={modal.visible}
            onOk={modal.onOk}
            onCancel={() => dispatch(hideModal())}
            footer={modal.footer}
            width={modal.width}
          >
            {modal.Component}
          </Modal>
          <Headers setAccount={setAccount} />
          <Layout>
            <Siders account={account} />
            <Layout style={{ padding: "0 24px 24px" }}>
              <BreadCrumb />
              <Contents>{children}</Contents>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return <SignIn setAccount={setAccount} />;
  }
}

const mapStateToProps = ({ modal }) => {
  return {
    modal
  };
};

export default connect(mapStateToProps)(App);
