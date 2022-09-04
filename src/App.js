import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Trends from "./components/Trends";
function App() {
  return (
    <div className="App">
        <Nav/>
        <Main/>
        <Trends/>
    </div>
  );
}

export default App;
