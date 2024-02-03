import { useState } from "react";
import "./App.css";

function App() {
  const [login, setlogin] = useState(true);

  const loginSwitch = () => {
    setlogin(!login);
  };
  return (
    <div id="Container">
      <div id="user">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
          alt="instagram logo"
        />
        <input
          hidden={login}
          type="text"
          name=""
          placeholder="Mobile Number or Email"
          id=""
        />
        <input
          hidden={login}
          type="text"
          name=""
          placeholder="Full Name"
          id=""
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Phone number, username, or email"
        />
        <input type="text" name="" id="" placeholder="Password" />
        <button>{login ? "Sign in" : "Sign up"}</button>
        <div id="footer">
          {login ? "Don't have account?" : "have an account?"}{" "}
          <span onClick={loginSwitch}>{login ? "Sign up" : "Log in"}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
