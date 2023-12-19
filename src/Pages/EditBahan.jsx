import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditBahan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bahanData, setBahanData] = useState({
    nama_bahan: "", 
    deskripsi: "",
    gambar: "",
    gizi: "", 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bahan/${id}`);
        const bahanData = response.data.data;

        setBahanData({
          nama_bahan: bahanData.nama_bahan,
          deskripsi: bahanData.deskripsi,
          gambar: bahanData.gambar,
          gizi: bahanData.gizi,
        });
      } catch (error) {
        console.error("Error fetching Bahan data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setBahanData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setBahanData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/bahan/${id}`,
        bahanData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Server Response:", response);

      navigate("/DataBahan");
    } catch (error) {
      console.error("Error updating Bahan:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Bahan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Bahan
            </label>
            <input
              type="text"
              name="nama_bahan"
              value={bahanData.nama_bahan}
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
              value={bahanData.deskripsi}
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
              Gizi Bahan
            </label>
            <input
              type="text"
              name="gizi"
              value={bahanData.gizi}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
            <UpdateButton onClick={handleSubmit} />
            <Link to="/DataBahan">
              <CancelButton />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBahan;
