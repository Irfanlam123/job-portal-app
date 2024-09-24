import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    console.log("Location:", location);
    // Implement search logic here, such as making an API request.
  };

  return (
    <div className="flex justify-center py-8 px-4">
      <form onSubmit={handleSearch} className="w-full max-w-xl">
        <div className="flex flex-col md:flex-row items-center rounded-lg shadow-md bg-white p-4 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Job Title, Keywords, or Company"
            value={query}
            onChange={handleInputChange}
            className="w-full text-gray-700 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            className="w-full text-gray-700 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
