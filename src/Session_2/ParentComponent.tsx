// ParentComponent.tsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello from Parent");

  // Increment function to update count
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // No state update, just verifying how props do not cause a re-render
  const changeMessage = () => {
    setMessage("Hello again from Parent");
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={incrementCount}>Increment Count ({count})</button>
      <button onClick={changeMessage}>Change Message</button>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
