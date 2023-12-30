import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoBookSharp } from "react-icons/io5";
const TotalResep = () => {
  const [totalResep, setTotalResep] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-development-becipes.fly.dev/api/resep"
        );

        const resepData = response.data.data;

        setTotalResep(resepData.length);
      } catch (error) {
        console.error("Error fetching total artikel:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sm:ml-60 bg-blue-500 text-white p-4 rounded-md mt-4 flex items-center w-60">
      <IoBookSharp className="mr-4" size={30} />
      <div>
        <h2 className="text-2xl font-semibold mb-2">Total Resep</h2>
        <p className="text-3xl font-bold">{totalResep}</p>
      </div>
    </div>
  );
};

export default TotalResep;
