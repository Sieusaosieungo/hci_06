import React from "react";
import Headers from './components/header/index';
import Siders from './components/sider/index';
import BreadCrumb from './components/breadCrumb/index';
import Contents from './components/content/index';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import "./App.css";

import DetailTask from "./components/DetailTask";

function App({ children }) {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <DetailTask />
        {/* {children} */}
      </header>
=======
      <Layout>
        <Headers />
        <Layout>
          <Siders />
          <Layout style={{ padding: '0 24px 24px' }}>
            <BreadCrumb />
            <Contents />
          </Layout>
        </Layout>
        {/* <header className="App-header">{children}</header> */}
      </Layout>
>>>>>>> 8ba65b7c878bd680b2a20b31f9c0cc8dd602037e
    </div>
  );
}

export default App;
