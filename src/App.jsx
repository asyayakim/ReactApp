import logo from "./logo.svg";
import React from "react";
import { LoginView } from "./pages/LoginView";
import { useEffect, useState } from "react";
import { Register } from "./pages/Register";
import { UserPage } from "./pages/UserPage";
import Header from "./components/Header";
import "./css/App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

//useContext for auth
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Outlet />
        <Footer />
      </header>
    </div>
  );
}

export default App;
