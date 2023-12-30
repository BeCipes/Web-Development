import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddButton from "../Component/AddButton";

const AddBahan = () => {
  const [formData, setFormData] = useState({
    nama_bahan: "",
    deskripsi: "",
    gambar: "",
  });

  const [giziFields, setGiziFields] = useState([{ key: "", value: "" }]);

  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "gambar") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0].name,
      }));
    } else if (name === "key" || name === "value") {
      const updatedFields = [...giziFields];
      updatedFields[index][name] = value;
      setGiziFields(updatedFields);
    } else {
      setFormData((prevData) => ({
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
      const giziObject = {};
      giziFields.forEach((field) => {
        if (field.key && field.value) {
          giziObject[field.key] = field.value;
        }
      });
  
      const giziString = Object.entries(giziObject)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
  
      const dataToSend = {
        ...formData,
        gizi: giziString,
      };
  
      const response = await axios.post("https://backend-development-becipes.fly.dev/api/bahan", dataToSend);
  
      console.log("Server Response:", response);
  
      navigate("/DataBahan");
    } catch (error) {
      console.error("Error adding Bahan:", error.message);
    }
  };
  
  
  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Bahan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Bahan
            </label>
            <input
              type="text"
              name="nama_bahan"
              value={formData.nama_bahan}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deksripsi
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
              Gizi Bahan
            </label>
            {giziFields.map((field, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  name="key"
                  value={field.key}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Key"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-2"
                />
                <input
                  type="text"
                  name="value"
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
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add2
            </button>
            <Link to="/DataBahan">
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

export default AddBahan;
