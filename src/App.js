import React from "react";
import "./App.css";

function App({ children }) {
  return (
    <div className="App">
      <header className="App-header">{children}</header>
    </div>
  );
}

export default App;
