import React, { useEffect, useState } from "react";
import axios from "axios";

const DataVisualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("http://localhost:5000/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Data Visualization</h1>
      <ul className="text-2xl font-bold">
        {data.map((item) => (
          <li className="text-2xl font-bold" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataVisualization;
