import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddButton from "../Component/AddButton";
import axios from "axios";

const AddResep = () => {
  const [formData, setFormData] = useState({
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else if (name === "bahan") {
      // Split the input value into an array on each Enter key press
      const ingredientsArray = value.split(/\n/);
      setFormData((prevData) => ({
        ...prevData,
        [name]: ingredientsArray,
      }));
    } else if (name.startsWith("gizi_")) {
      // If the input name starts with "gizi_", update the nutrition information
      const nutrient = name.split("_")[1];
      setFormData((prevData) => ({
        ...prevData,
        informasi_gizi: {
          ...prevData.informasi_gizi,
          [nutrient]: value,
        },
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
      console.log("FormData:", formData);
      const response = await axios.post("http://localhost:5000/api/resep",formData);

      console.log("respon", response.data.data);
      console.log("Server Response:", response);

      navigate("/DataResepDetail");
    } catch (error) {
      console.error("Error adding Resep:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Resep</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="nama_resep"
              value={formData.nama_resep}
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
              value={formData.deskripsi}
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
              value={formData.bahan.join("\n")}
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
                value={formData.informasi_gizi.protein}
                onChange={handleChange}
                placeholder="Protein"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
              />
              <input
                type="text"
                name="gizi_karbohidrat"
                value={formData.informasi_gizi.karbohidrat}
                onChange={handleChange}
                placeholder="Karbohidrat"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
              />
              <input
                type="text"
                name="gizi_lemak"
                value={formData.informasi_gizi.lemak}
                onChange={handleChange}
                placeholder="Lemak"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add
            </button>
            <Link to="/DataResepDetail">
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

export default AddResep;
