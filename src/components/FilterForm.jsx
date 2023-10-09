import React, { useState } from "react";
import axios from "axios";

const FilterForm = () => {
  const [criteria, setCriteria] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = () => {
    // Fetch filtered data based on criteria from the API
    axios
      .get(`http://localhost:5000/filter?criteria=${criteria}`)
      .then((response) => {
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error filtering data:", error);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      <h2 className="text-6xl font-bold" style={{ color: "#1a202c" }}>
        Filter Data
      </h2>
      <input
        className="text-2xl font-bold w-96 h-16 p-2 m-2 rounded-lg border-2 border-gray-400"
        type="text"
        placeholder="Enter filter criteria"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
      />
      <button
        className="text-2xl font-bold w-96 h-16 p-2 m-2 rounded-lg border-2 border-gray-400 bg-emerald-700 hover:bg-emerald-800 text-white"
        type="button"
        onClick={handleFilter}
      >
        Filter
      </button>
      <ul className="text-2xl font-bold" style={{ color: "#1a202c" }}>
        {filteredData.map((item) => (
          <li className="text-2xl font-bold" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterForm;
