import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditArtikel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artikelData, setArtikelData] = useState({
    headline: "",
    gambar: null,
    isi: "",
    penulis: "",
    sumber: "",
    id_kategori: "",
  });

  const [kategoriOptions, setKategoriOptions] = useState([]);

  useEffect(() => {
    const fetchArtikelData = async () => {
      try {
        const artikelResponse = await axios.get(`http://localhost:5000/api/artikel/${id}`);
        setArtikelData(artikelResponse.data.data);
      } catch (error) {
        console.error("Error fetching artikel data:", error.message);
      }
    };

    const fetchKategoriOptions = async () => {
      try {
        const kategoriResponse = await axios.get("http://localhost:5000/api/kategori");
        setKategoriOptions(kategoriResponse.data.data);
      } catch (error) {
        console.error("Error fetching jenis options:", error.message);
      }
    };

    fetchArtikelData();
    fetchKategoriOptions();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setArtikelData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setArtikelData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleKategoriChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      id_kategori: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/artikel/${id}`, artikelData);
      navigate("/DataArtikel");
    } catch (error) {
      console.error("Error editing artikel:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Artikel</h2>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Isi
            </label>
            <input
              type="text"
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
          <UpdateButton onClick={handleSubmit} />
            <Link to="/DataArtikel">
              <CancelButton />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArtikel;
