// MemoExample.tsx
import React, { useState, useMemo } from "react";

const MemoExample: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1_000_000_000; i++) {} // Simulate expensive calculation
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count1), [count1]);
  // const result = expensiveCalculation(count1);


  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
      <p>Result of expensive calculation: {result}</p>
      <p>Count 2: {count2}</p>
    </div>
  );
};

export default MemoExample;
