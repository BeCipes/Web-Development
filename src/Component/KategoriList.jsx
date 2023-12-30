import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import SearchBar from "./SearchBar";

const KategoriList = () => {
  const [kategoriData, setKategoriData] = useState([]);
  const [filteredKategoriData, setFilteredKategoriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-development-becipes.fly.dev/api/kategori"
        );
        setKategoriData(response.data.data);
        setFilteredKategoriData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://backend-development-becipes.fly.dev/api/kategori/${id}`
      );
      const response = await axios.get("http://localhost:5000/api/kategori");
      setKategoriData(response.data.data);
      setFilteredKategoriData(response.data.data);
    } catch (error) {
      console.error("Error deleting Kategori:", error.message);
    }
  };
  const handleSearch = (searchTerm) => {
    const filteredData = kategoriData.filter((video) =>
      video.nama_kategori.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredKategoriData(filteredData);
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
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">id jenis</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredKategoriData.map((kategori, index) => (
                <tr key={kategori.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{kategori.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {kategori.nama_kategori}
                  </td>
                  <td className="py-3 px-6">{kategori.gambar}</td>
                  <td className="py-3 px-6">{kategori.id_jenis}</td>
                  <td className="py-3 px-1 text-center">
                    <Link to={`/edit-kategori/${kategori.id}`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(kategori.id)}>
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

export default KategoriList;
