import './App.css';

import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <header className="App-header">
        <Outlet></Outlet>
      </header>
    </div>
  );
}

export default App;
