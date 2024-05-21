import React, { useState } from "react";

export default function DemoState() {
  const [name, setName] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {name}
    </div>
  );
}
