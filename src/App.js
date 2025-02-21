import logo from './logo.svg';
import './App.css';
import { LoginView } from './LoginView';
import { useEffect, useState } from "react";


function App() {
 const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        </p>
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <LoginView />
   
        </a>
      </header>
    </div>
  );
}

export default App;
