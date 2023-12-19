import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import SearchBar from "./SearchBar";

const JenisList = () => {
  const [jenisData, setJenisData] = useState([]);
  const [filteredJenisData, setFilteredJenisData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jenis-kategori");
        setJenisData(response.data.data);
        setFilteredJenisData(response.data.data);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jenis-kategori/${id}`);
      const response = await axios.get("http://localhost:5000/api/jenis-kategori");
      setJenisData(response.data.data);
      setFilteredJenisData(response.data.data);

    } catch (error) {
      console.error("Error deleting Bahan:", error.message);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredData = jenisData.filter((video) =>
      video.nama_jenis.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJenisData(filteredData);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
      <SearchBar onSearch={handleSearch} />
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredJenisData.map((jenis, index) => (
                <tr key={jenis.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{jenis.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {jenis.nama_jenis}
                  </td>
                  <td className="py-3 px-1 text-center">
                    <Link to={`/edit-jenis/${jenis.id}`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(jenis.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JenisList;
