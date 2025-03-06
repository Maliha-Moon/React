import React, { useState } from "react";

const State = () => {
  //   let array = useState();
  //   console.log(array);

  const [count, setCount] = useState(5);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
    </>
  );
};

export default State;

