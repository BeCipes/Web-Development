import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddButton from "../Component/AddButton";

const AddVideo = () => {
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    cover: null,
    url: "",
    sumber: "",
    id_kategori: "",
  });

  const [kategoriOptions, setKategoriOptions] = useState([]);

  useEffect(() => {
    const fetchKategoriOptions = async () => {
      try {
        const kategoriResponse = await axios.get(
          "https://backend-development-becipes.fly.dev/api/kategori"
        );
        setKategoriOptions(kategoriResponse.data.data);
      } catch (error) {
        console.error("Error fetching kategori options:", error.message);
      }
    };

    fetchKategoriOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cover") {
      setVideoData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setVideoData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://backend-development-becipes.fly.dev/api/teknik",
        videoData
      );
      navigate("/DataVideo");
    } catch (error) {
      console.error("Error adding video:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Judul
            </label>
            <input
              type="text"
              name="title"
              value={videoData.title}
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
              name="description"
              value={videoData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cover
            </label>
            <input
              type="file"
              name="cover"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              URL
            </label>
            <input
              type="url"
              name="url"
              value={videoData.url}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sumber
            </label>
            <input
              type="text"
              name="sumber"
              value={videoData.sumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id_kategori"
            >
              Kategori:
            </label>
            <select
              id="id_kategori"
              name="id_kategori"
              value={videoData.id_kategori}
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
              Add Video
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

export default AddVideo;
