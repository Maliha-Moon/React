import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  // 1️⃣ Run once on mount
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // 2️⃣ Run when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // 3️⃣ Run with cleanup (interval)
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>useEffect Hook Examples</h1>
      <h2>Current Time: {time}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Effect;
