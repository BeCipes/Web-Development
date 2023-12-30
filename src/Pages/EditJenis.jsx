import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditJenis = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama_jenis: "", 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-development-becipes.fly.dev/api/jenis-kategori/${id}`);
        const jenisData = response.data.data;

        setFormData({
          nama_jenis: jenisData.nama_jenis,
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://backend-development-becipes.fly.dev/api/jenis-kategori/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Server Response:", response);

      navigate("/DataJenis");
    } catch (error) {
      console.error("Error updating Jenis:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Jenis</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Jenis
            </label>
            <input
              type="text"
              name="nama_jenis"
              value={formData.nama_jenis}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
            <UpdateButton onClick={handleSubmit} />
            <Link to="/DataJenis">
              <CancelButton />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJenis;
