import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStep = () => {
  const navigate = useNavigate();
  const [stepData, setStepData] = useState({
    id_resep: "",
    step_no: "",
    step_desc: "",
    waktu: "",
  });

  const [resepOptions, setResepOptions] = useState([]);

  useEffect(() => {
    const fetchResepOptions = async () => {
      try {
        const resepResponse = await axios.get("http://localhost:5000/api/resep");
        setResepOptions(resepResponse.data.data);
      } catch (error) {
        console.error("Error fetching resep options:", error.message);
      }
    };

    fetchResepOptions();
  }, []);

  const handleChange = (e) => {
    setStepData({
      ...stepData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://backend-development-becipes.fly.dev/api/step", stepData);
      navigate("/DataResepDetail");
    } catch (error) {
      console.error("Error adding step:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Step</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_resep">
              Resep:
            </label>
            <select
              id="id_resep"
              name="id_resep"
              value={stepData.id_resep}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Select Resep
              </option>
              {resepOptions.map((resep) => (
                <option key={resep.id} value={resep.id}>
                  {resep.nama_resep}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="step_no">
              Step Number:
            </label>
            <input
              type="text"
              id="step_no"
              name="step_no"
              value={stepData.step_no}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="step_desc">
              Step Description:
            </label>
            <input
              type="text"
              id="step_desc"
              name="step_desc"
              value={stepData.step_desc}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waktu">
              Waktu:
            </label>
            <input
              type="text"
              id="waktu"
              name="waktu"
              value={stepData.waktu}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add Step
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/DataResepDetail")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStep;
