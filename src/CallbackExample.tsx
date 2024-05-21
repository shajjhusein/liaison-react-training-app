// CallbackExample.tsx
import React, { useState, useCallback } from "react";

interface ListProps {
  items: number[];
  onItemClick: (item: number) => void;
}

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const CallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([1, 2, 3, 4, 5]);

  const handleItemClick = useCallback((item: number) => {
    console.log(`Item ${item} clicked`);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <List items={items} onItemClick={handleItemClick} />
    </div>
  );
};

export default CallbackExample;
