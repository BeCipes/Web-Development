import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";

const StepList = () => {
  const [stepData, setStepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stepResponse = await axios.get(
          "http://localhost:5000/api/step"
        );
        setStepData(stepResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/step/${id}`);
      const response = await axios.get("http://localhost:5000/api/step");
      setStepData(response.data.data);
    } catch (error) {
      console.error("Error deleting Resep:", error.message);
    }
  };
  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-green-700 uppercase bg-slate-300">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">id</th>
                <th className="py-3 px-6">id_resep</th>
                <th className="py-3 px-6">step_no</th>
                <th className="py-3 px-6">step_desc</th>
                <th className="py-3 px-6">waktu</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {stepData.map((step, index) => (
                <tr key={step.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{step.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {step.id_resep}
                  </td>
                  <td className="py-3 px-6">{step.step_no}</td>
                  <td className="py-3 px-6">{step.step_desc}</td>
                  <td className="py-3 px-6">{step.waktu}</td>
                  <td className="py-3 px-1 text-center">
                    <div className="flex">
                      <Link to={`/edit-step/${step.id}`} className="mr-2">
                        <EditButton />
                      </Link>
                      <Link onClick={() => deleteProduct(step.id)}>
                        <DeleteButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StepList;
