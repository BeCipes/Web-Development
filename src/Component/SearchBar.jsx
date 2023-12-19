// SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Masukkan nama..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 px-4 rounded"
      >
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
