// ChildComponent.tsx
import React, { useState, useEffect } from "react";

interface ChildProps {
  message: string;
}

const ChildComponent: React.FC<ChildProps> = ({ message }) => {
  const [childCount, setChildCount] = useState(0);

  // Logs to verify when the child component re-renders
  useEffect(() => {
    console.log("Child Component Rendered");
  });

  // Increment function to update childCount
  const incrementChildCount = () => {
    setChildCount((prev) => prev + 1);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: {message}</p>
      <button onClick={incrementChildCount}>
        Increment Child Count ({childCount})
      </button>
    </div>
  );
};

export default ChildComponent;
