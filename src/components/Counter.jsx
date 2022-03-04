import "./counter.css";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const counthandler = (val) => {
    setCounter(counter + val);
  };
  const dbcounthandler = () => {
    setCounter(counter * 2);
  };

  return (
    <div className="main">
      <h1 className="head">{counter}</h1>
      <div className="btn">
        <button
          onClick={() => {
            counthandler(1);
          }}
        >
          inc
        </button>
        <button
          onClick={() => {
            if (counter >= 1) {
              counthandler(-1);
            }
          }}
        >
          dec
        </button>
        <button onClick={dbcounthandler}>double</button>
      </div>
    </div>
  );
}
