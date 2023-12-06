import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdArticle } from "react-icons/md";

const TotalArtikel= () => {
  const [totalArtikel, setTotalArtikel] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/total-Artikel');
        setTotalArtikel(response.data.totalArtikel);
      } catch (error) {
        console.error('Error fetching total Artikel:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sm:ml-60 bg-blue-500 text-white p-4 rounded-md mt-4 flex items-center w-60">
    <MdArticle  className="mr-4" size={30} />
      <div>
      <h2 className="text-2xl font-semibold mb-2">Total Artikel</h2>
      <p className="text-3xl font-bold">{totalArtikel}</p>
      </div>
    </div>
  );
};

export default TotalArtikel;
