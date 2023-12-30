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

  const [giziFields, setGiziFields] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-development-becipes.fly.dev/api/bahan/${id}`);
        const bahanData = response.data.data;

        setBahanData({
          nama_bahan: bahanData.nama_bahan,
          deskripsi: bahanData.deskripsi,
          gambar: bahanData.gambar,
          gizi: bahanData.gizi,
        });

        // Parse gizi string into an array of objects
        const giziArray = bahanData.gizi.split(', ').map(pair => {
          const [key, value] = pair.split(': ');
          return { key, value };
        });
        setGiziFields(giziArray);
      } catch (error) {
        console.error("Error fetching Bahan data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "gambar") {
      setBahanData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0].name,
      }));
    } else if (name === "giziKey" || name === "giziValue") {
      const updatedFields = [...giziFields];
      updatedFields[index][name.slice(4)] = value;
      setGiziFields(updatedFields);
    } else {
      setBahanData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addGiziField = () => {
    setGiziFields([...giziFields, { key: "", value: "" }]);
  };

  const removeGiziField = (index) => {
    const updatedFields = [...giziFields];
    updatedFields.splice(index, 1);
    setGiziFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const giziString = giziFields
        .map(({ key, value }) => `${key}: ${value}`)
        .join(', ');

      const updatedBahanData = {
        ...bahanData,
        gizi: giziString,
      };

      const response = await axios.put(
        `https://backend-development-becipes.fly.dev/api/bahan/${id}`,
        updatedBahanData,
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
            {giziFields.map((field, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  name="giziKey"
                  value={field.key}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Key"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
                />
                <input
                  type="text"
                  name="giziValue"
                  value={field.value}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Value"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
                />
                <button
                  type="button"
                  onClick={() => removeGiziField(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGiziField}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Gizi Field
            </button>
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
