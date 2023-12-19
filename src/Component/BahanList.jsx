import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import SearchBar from "./SearchBar";

const BahanList = () => {
  const [bahanData, setBahanData] = useState([]);
  const [filteredBahanData, setFilteredBahanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bahan");
        setBahanData(response.data.data);
        setFilteredBahanData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bahan/${id}`);
      const response = await axios.get("http://localhost:5000/api/bahan");
      setBahanData(response.data.data);
      setFilteredBahanData(response.data.data);
    } catch (error) {
      console.error("Error deleting Bahan:", error.message);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredData = bahanData.filter((bahan) =>
      bahan.nama_bahan.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBahanData(filteredData);
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
                <th className="py-3 px-6">Deskripsi</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Gizi Bahan</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBahanData.map((bahan, index) => (
                <tr key={bahan.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{bahan.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {bahan.nama_bahan}
                  </td>
                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow" >{bahan.deskripsi}</td>
                  <td className="py-3 px-6">{bahan.gambar}</td>
                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">{bahan.gizi}</td>
                  <td className="py-3 px-1 text-center">
                    <Link to={`/edit-bahan/${bahan.id}`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(bahan.id)}>
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

export default BahanList;
