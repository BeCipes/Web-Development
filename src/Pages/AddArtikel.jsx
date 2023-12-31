import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import AddButton from "../Component/AddButton"

const AddArtikel = () => {
  const navigate = useNavigate();
  const [artikelData, setArtikelData] = useState({
    headline: "",
    gambar: [],
    isi: "",
    penulis: "",
    sumber: "",
    id_kategori: "",
  });

  const [kategoriOptions, setKategoriOptions] = useState([]);

  useEffect(() => {
    const fetchKategoriOptions = async () => {
      try {
        const kategoriResponse = await axios.get("https://backend-development-becipes.fly.dev/api/kategori");
        setKategoriOptions(kategoriResponse.data.data);
      } catch (error) {
        console.error("Error fetching kategori options:", error.message);
      }
    };

    fetchKategoriOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      const newGambarArray = Array.from(files).map((file) => file.name);
      setArtikelData((prevData) => ({
        ...prevData,
        [name]: [...prevData.gambar, ...newGambarArray],
      }));
    } else {
      setArtikelData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://backend-development-becipes.fly.dev/api/artikel", artikelData);
      navigate("/DataArtikel");
    } catch (error) {
      console.error("Error adding artikel:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Artikel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Headline
            </label>
            <input
              type="text"
              name="headline"
              value={artikelData.headline}
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
              multiple
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Isi
            </label>
            <textarea
              name="isi"
              value={artikelData.isi}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Penulis
            </label>
            <input
              type="text"
              name="penulis"
              value={artikelData.penulis}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sumber
            </label>
            <input
              type="url"
              name="sumber"
              value={artikelData.sumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_kategori">
              Kategori:
            </label>
            <select
              id="id_kategori"
              name="id_kategori"
              value={artikelData.id_kategori}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Select Kategori
              </option>
              {kategoriOptions.map((kategori) => (
                <option key={kategori.id} value={kategori.id}>
                  {kategori.nama_kategori}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add Artikel
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/DataArtikel")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtikel;
