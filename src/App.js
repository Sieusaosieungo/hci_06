import React, { useState, useEffect } from "react";
import Headers from "./components/Header/index";
import Siders from "./components/Sider/index";
import BreadCrumb from "./components/BreadCrumb/index";
import Contents from "./components/Content/index";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./App.css";
import { Modal, message } from "antd";
import { connect } from "react-redux";
import { hideModal } from "./actions/index";
import SignIn from "./components/SignIn";
// import Footer from './components/Footer/index';
const { Footer } = Layout;



function App({ modal, children, dispatch }) {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account")) || {}
  );
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (Object.keys(account).length > 0) {
      if (
        account.email === "admin@gmail.com" &&
        account.password === "admin"
      ) {
        setIsAuth(true);
        if (account.role) {
          message.success('Xin chào trưởng phòng Vũ Duy Mạnh');
        }
        else {
          message.success('Xin chào nhân viên đảm bảo chất lượng Trần Trung Huỳnh');
        }
      }
      else {
        message.error('Tài khoản hoặc mật khẩu không đúng, vui lòng kiểm tra lại');
      }
    }
  }, [account]);

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
          <Headers setAccount={setAccount} account={account} />
          <Layout>
            <Siders account={account} />
            <Layout style={{ padding: "0 12px 12px" }}>
              <BreadCrumb />
              <Contents >{children}</Contents>
              <Footer style={{ textAlign: 'center' }}>Nhóm HCI_06 - Bộ phận đảm bảo chất lượng</Footer>
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
