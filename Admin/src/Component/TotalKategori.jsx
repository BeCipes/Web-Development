import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSolidCategory } from "react-icons/bi";
const TotalKategori= () => {
  const [totalKategori, setTotalKategori] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/total-kategori');
        setTotalKategori(response.data.totalKategori);
      } catch (error) {
        console.error('Error fetching total kategori:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sm:ml-60 bg-blue-500 text-white p-4 rounded-md mt-4 flex items-center w-60">
      <BiSolidCategory className="mr-4" size={30}/>
      <div>
      <h2 className="text-2xl font-semibold mb-2">Total Kategori</h2>
      <p className="text-3xl font-bold">{totalKategori}</p>
      </div>
    </div>
  );
};

export default TotalKategori;
