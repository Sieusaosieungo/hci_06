import React from "react";
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
