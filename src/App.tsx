import React from "react";
import "./App.css";

import SideNav from "./components/sidenav";
import NavBar from "./components/NavBar";
import Customer from "./pages/customer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideNav />
      <Customer />
    </div>
  );
}

export default App;
