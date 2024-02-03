import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    return setCount(count + 1);
  };
  const Decrement = () => {
    return setCount(count - 1);
  };
  return (
    <div className="container">
      <div className="inner-container">
        <h1>Count: {count}</h1>
        <div className="btns">
          <button onClick={Increment} className="btn1">
            Increment
          </button>
          <button onClick={Decrement} className="btn2">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
