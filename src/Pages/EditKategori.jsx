import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditKategori = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [kategoriData, setKategoriData] = useState({
    nama_kategori: "",
    gambar: "",
    id_jenis: "",
  });

  const [jenisOptions, setJenisOptions] = useState([]);

  useEffect(() => {
    const fetchKategoriData = async () => {
      try {
        const kategoriResponse = await axios.get(`https://backend-development-becipes.fly.dev/api/kategori/${id}`);
        setKategoriData(kategoriResponse.data.data);
        console.log("log", kategoriResponse.data.data)
      } catch (error) {
        console.error("Error fetching kategori data:", error.message);
      }
    };

    const fetchJenisOptions = async () => {
      try {
        const jenisResponse = await axios.get("https://backend-development-becipes.fly.dev/api/jenis-kategori");
        setJenisOptions(jenisResponse.data.data);
      } catch (error) {
        console.error("Error fetching jenis options:", error.message);
      }
    };

    fetchKategoriData();
    fetchJenisOptions();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setKategoriData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setKategoriData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleJenisChange = (e) => {
    setKategoriData((prevData) => ({
      ...prevData,
      id_jenis: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://backend-development-becipes.fly.dev/api/kategori/${id}`, kategoriData);
      navigate("/DataKategori");
    } catch (error) {
      console.error("Error editing kategori:", error.message);
    }
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Kategori</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Kategori
            </label>
            <input
              type="text"
              name="nama_kategori"
              value={kategoriData.nama_kategori}
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
              value={kategoriData.id_jenis}
              onChange={handleChange}
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
          <UpdateButton onClick={handleSubmit} />
            <Link to="/DataKategori">
              <CancelButton />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKategori;
