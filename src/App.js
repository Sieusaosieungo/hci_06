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
      <header className="App-header">
        <DetailTask />
        {/* {children} */}
      </header>
    </div>
  );
}

export default App;
