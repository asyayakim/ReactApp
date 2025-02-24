import React from "react";
import { useEffect, useRef, useState } from "react";

export function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const usernameRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
  };
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="login_container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form_container">
        <div className="form_controls">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form_controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form_controls">
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
}
