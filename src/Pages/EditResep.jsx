import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditResep = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resepData, setResepData] = useState({
    nama_resep: "",
    deskripsi: "",
    gambar: null,
    bahan: "",
    informasi_gizi: "",
  });
  useEffect(() => {
    const fetchResepOptions = async () => {
      try {
        const resepResponse = await axios.get(`http://localhost:5000/api/resep/${id}`);
        setResepData(resepResponse.data.data);
      } catch (error) {
        console.error("Error fetching resep options:", error.message);
      }
    };

    fetchResepOptions();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setResepData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setResepData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/reseo/${id}`, resepData);
      navigate("/DataStep");
    } catch (error) {
      console.error("Error editing step:", error.message);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Resep</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="nama_resep"
              value={resepData.nama_resep}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deskripsi
            </label>
            <input
              type="text"
              name="deskripsi"
              value={resepData.deskripsi}
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
              Bahan
            </label>
            <input
              type="text"
              name="bahan"
              value={resepData.bahan}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Informasi Gizi
            </label>
            <input
              type="text"
              name="informasi_gizi"
              value={resepData.informasi_gizi}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
          <UpdateButton onClick={handleSubmit} />
            <Link to="/DataResepDetail">
              <CancelButton />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditResep;
