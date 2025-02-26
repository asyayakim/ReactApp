import React, { use } from "react";

function Navbar() {
    return (
      <header>
        <nav>
          <ul>
            <div className="logo">
              <a href="/">
                <img
                  src="https://img.icons8.com/?size=100&id=TRRXhYhVs7rA&format=png&color=000000"
                  alt="Logo"
                  width="40"
                />
               <h1>Alt For Barna</h1>
              </a>
            </div>
            <li>
              <a href="/">
                <img
                  className="nav-icon"
                  src="https://img.icons8.com/?size=100&id=86527&format=png&color=000000"
                  alt="Logo"
                  width="24"
                  height={24}
                />
                Home
              </a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
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
export default Navbar;