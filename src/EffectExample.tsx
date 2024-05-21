// EffectExample.tsx
import React, { useEffect, useState } from "react";

const EffectExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    setNewCount(count + 3);
  }, []);

  return (
    <div>
      <p>New Count: {newCount}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EffectExample;
