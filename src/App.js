import React from "react";
import "./App.css";
import "antd/dist/antd.css";

function App({ children }) {
  return (
    <div className="App">
      <header>{children}</header>
    </div>
  );
}

export default App;
