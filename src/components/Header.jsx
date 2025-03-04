import React, { use } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navigation-layout">
          <div className="icon-text">
            <div className="logo">
              <img
                src="https://img.icons8.com/?size=100&id=TRRXhYhVs7rA&format=png&color=000000"
                alt="Logo"
              />
            </div>
          </div>

          <div className="icon-text">
            <Link to="/">Home</Link>
            <img
              className="nav-icon"
              src="https://img.icons8.com/?size=100&id=86527&format=png&color=000000"
              alt="Logo"
              width="24"
              height={24}
            />
          </div>

          <div className="icon-text">
            <Link to="/login">Login</Link>
          </div>

          <div className="icon-text">
            <Link to="/cart">Cart</Link>
            <img
              src="https://img.icons8.com/?size=100&id=kqlTT3Fp2Ga1&format=png&color=000000"
              className="nav-icon"
              height={24}
            ></img>
          </div>
        </div>
        <section className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="Search for..." />
            <button type="submit">
              <img
                src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                alt="Search Icon"
                width="20"
              />
            </button>
          </div>
        </section>
      </nav>
    </header>
  );
}
