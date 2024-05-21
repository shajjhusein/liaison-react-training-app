// ListWithCallback.tsx
import React, { useState, useCallback } from "react";

interface ListProps {
  items: string[];
  onItemSelect: (item: string) => void;
}

const List: React.FC<ListProps> = ({ items, onItemSelect }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onItemSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const ListWithCallback: React.FC = () => {
  const [items] = useState(["Apple", "Banana", "Orange", "Grape"]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelect = useCallback((item: string) => {
    setSelectedItem(item);
    console.log("Item selected:", item);
  }, []);

  return (
    <div>
      <h2>Fruits List</h2>
      <List items={items} onItemSelect={handleItemSelect} />
      {selectedItem && <p>Selected: {selectedItem}</p>}
    </div>
  );
};

export default ListWithCallback;
