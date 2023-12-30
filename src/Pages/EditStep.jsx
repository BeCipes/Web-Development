import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import UpdateButton from "../Component/UpdateButton";
import CancelButton from "../Component/CancelButton";

const EditStep = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stepData, setStepData] = useState({
    id_resep: "",
    step_no: "",
    step_desc: "",
    waktu: "",
  });

  const [resepOptions, setResepOptions] = useState([]);

  useEffect(() => {
    const fetchStepData = async () => {
      try {
        const stepResponse = await axios.get(
          `https://backend-development-becipes.fly.dev/api/step/${id}`
        );
        setStepData(stepResponse.data.data);
        console.log("log", stepResponse.data.data);
      } catch (error) {
        console.error("Error fetching step data:", error.message);
      }
    };

    const fetchResepOptions = async () => {
      try {
        const resepResponse = await axios.get(
          "https://backend-development-becipes.fly.dev/api/resep"
        );
        setResepOptions(resepResponse.data.data);
      } catch (error) {
        console.error("Error fetching resep options:", error.message);
      }
    };

    fetchStepData();
    fetchResepOptions();
  }, [id]);

  const handleChange = (e) => {
    setStepData({
      ...stepData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Step Data:", stepData);
    try {
      await axios.put(
        `https://backend-development-becipes.fly.dev/api/step/${id}/${stepData.id_resep}`,
        stepData
      );
      navigate("/DataResepDetail");
    } catch (error) {
      console.error("Error editing step:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Step</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id_resep"
            >
              Resep:
            </label>
            <select
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="step_no"
            >
              Step Number:
            </label>
            <input
              type="text"
              name="step_no"
              value={stepData.step_no}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="step_desc"
            >
              Step Description:
            </label>
            <input
              type="text"
              name="step_desc"
              value={stepData.step_desc}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="waktu"
            >
              Waktu:
            </label>
            <input
              type="number"
              name="waktu"
              value={stepData.waktu}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
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

export default EditStep;
