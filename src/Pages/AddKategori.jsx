import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddButton from "../Component/AddButton";

const AddKategori = () => {
  
  const [formData, setFormData] = useState({
    nama_kategori: "",
    gambar: "",
    id_jenis: "",
  });
  const [jenisOptions, setJenisOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJenisOptions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jenis-kategori");
        setJenisOptions(response.data.data);
      } catch (error) {
        console.error("Error fetching jenis options:", error);
      }
    };
    fetchJenisOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleJenisChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      id_jenis: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/kategori", formData);

      console.log("Server Response:", response);

      navigate("/DataKategori");
    } catch (error) {
      console.error("Error adding Kategori:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Kategori</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Kategori
            </label>
            <input
              type="text"
              name="nama_kategori"
              value={formData.nama_kategori}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gambar
            </label>
            <input
              type="file"
              name="gambar"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Id Jenis
            </label>
            <select
              name="id_jenis"
              value={formData.id_jenis}
              onChange={handleJenisChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select Jenis</option>
              {jenisOptions.map((jenis) => (
                <option key={jenis.id} value={jenis.id}>
                  {jenis.nama_jenis}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add
            </button>
            <Link to="/DataKategori">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKategori;
