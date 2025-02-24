import logo from "./logo.svg";
import React from "react";
import { LoginView } from "./pages/LoginView";
import { useEffect, useState } from "react";
import { Register } from "./pages/Register";
import { UserPage } from "./pages/UserPage";
import Navbar from "./components/navbar";
import "./css/App.css";
import MainData from "./pages/MainData";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <MainLayout />
      </header>
    </div>
  );
}

export default App;

function MainLayout() {
  return (
    <div>
      <Navbar />
      <MainData />
    </div>
  );
}
