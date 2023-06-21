"use client";
import { useState } from "react";

export const SearchBlock = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        className="border p-2 outline-0 text-gray-500"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
};
