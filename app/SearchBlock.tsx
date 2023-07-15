"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBlock = () => {
  const [input, setInput] = useState("");

  return (
    <div className="relative mr-4">
      <input
        className="border p-2 outline-0 text-gray-500 pr-9 dark:text-gray-300 border-gray-400 rounded"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-3" />
    </div>
  );
};
