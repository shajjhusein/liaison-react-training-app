// ExpensiveCalculation.tsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Expensive calculation function
  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1_000_000_000; i++) {} // Simulate heavy computation
    return num * 2;
  };

  // Memoized value
  const calculatedValue = useMemo(() => expensiveCalculation(count1), [count1]);

  return (
    <div>
      <h2>Expensive Calculation Example</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
      <p>Calculated Value: {calculatedValue}</p>
      <p>Count 2: {count2}</p>
    </div>
  );
};

export default ExpensiveCalculation;
