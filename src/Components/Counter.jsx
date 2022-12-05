import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((nextCount) => nextCount + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times!</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
