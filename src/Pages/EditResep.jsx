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
    bahan: [],
    informasi_gizi: {
      protein: "",
      karbohidrat: "",
      lemak: "",
    },
  });
  useEffect(() => {
    const fetchResepOptions = async () => {
      try {
        const resepResponse = await axios.get(`https://backend-development-becipes.fly.dev/api/resep/${id}`);
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
    } else if (name === "bahan") {
      // Split the input value into an array on each Enter key press
      const ingredientsArray = value.split(/\n/);
      setResepData((prevData) => ({
        ...prevData,
        [name]: ingredientsArray,
      }));
    } else if (name.startsWith("gizi_")) {
      // If the input name starts with "gizi_", update the nutrition information
      const nutrient = name.split("_")[1];
      setResepData((prevData) => ({
        ...prevData,
        informasi_gizi: {
          ...prevData.informasi_gizi,
          [nutrient]: value,
        },
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
      await axios.put(`https://backend-development-becipes.fly.dev/api/resep/${id}`, resepData);
      navigate("/DataResepDetail");
    } catch (error) {
      console.error("Error editing resep:", error.message);
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
            <textarea
              name="bahan"
              value={resepData.bahan.join("\n")}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Informasi Gizi
            </label>
            <div className="flex">
              <input
                type="text"
                name="gizi_protein"
                value={resepData.informasi_gizi.protein}
                onChange={handleChange}
                placeholder="Protein"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
              />
              <input
                type="text"
                name="gizi_karbohidrat"
                value={resepData.informasi_gizi.karbohidrat}
                onChange={handleChange}
                placeholder="Karbohidrat"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
              />
              <input
                type="text"
                name="gizi_lemak"
                value={resepData.informasi_gizi.lemak}
                onChange={handleChange}
                placeholder="Lemak"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
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
