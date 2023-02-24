import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hackernews clone.</p>
      </header>
      <div className="dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
