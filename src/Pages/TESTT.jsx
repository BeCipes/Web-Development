import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";

const RecipeDetail = () => {
  const [resepData, setResepData] = useState([]);
  const [stepData, setStepData] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resepResponse = await axios.get(
          "http://localhost:5000/api/resep"
        );
        setResepData(resepResponse.data.data);

        const stepResponse = await axios.get("http://localhost:5000/api/step");
        setStepData(stepResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const stepsByRecipeId = stepData.reduce((acc, step) => {
    acc[step.id_resep] = acc[step.id_resep] || [];
    acc[step.id_resep].push(step);
    return acc;
  }, {});

  const toggleDropdown = (recipeId) => {
    setOpenDropdownId(openDropdownId === recipeId ? null : recipeId);
  };

  const deleteResep = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/resep/${id}`);
      const resepResponse = await axios.get("http://localhost:5000/api/resep");
      setResepData(resepResponse.data.data);
      // Jika resep dihapus, tutup dropdown jika sedang terbuka
      setOpenDropdownId(null);
    } catch (error) {
      console.error("Error deleting Recipe:", error.message);
    }
  };

  const deleteStep = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/step/${id}`);
      const stepResponse = await axios.get("http://localhost:5000/api/step");
      setStepData(stepResponse.data.data);
    } catch (error) {
      console.error("Error deleting Step:", error.message);
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
                <th className="py-3 px-6">Id</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Deskripsi</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Bahan</th>
                <th className="py-3 px-6">Informasi Gizi</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {resepData.map((resep, index) => (
                <React.Fragment key={resep.id}>
                  <tr className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                    <td className="py-3 px-6">{resep.id}</td>
                    <td className="py-3 px-6 font-medium text-gray-900">
                      {resep.nama_resep}
                    </td>
                    <td className="py-3 px-6">{resep.deskripsi}</td>
                    <td className="py-3 px-6">{resep.gambar}</td>
                    <td className="py-3 px-6">{resep.bahan}</td>
                    <td className="py-3 px-6">{resep.informasi_gizi}</td>
                    <td className="py-3 px-1 text-center">
                      <div className="flex">
                        <Link to={`/edit-resep/${resep.id}`} className="mr-2">
                          <EditButton />
                        </Link>
                        <Link onClick={() => deleteResep(resep.id)}>
                          <DeleteButton />
                        </Link>
                      </div>
                    </td>
                    <td className="py-3 px-1 text-center">
                      <button onClick={() => toggleDropdown(resep.id)}>
                        {openDropdownId === resep.id ? "Tutup" : "Buka"} Langkah-langkah
                      </button>
                    </td>
                  </tr>
                  {openDropdownId === resep.id && (
                    <tr>
                      <td colSpan="8">
                        <div className="mt-5">
                          {/* Table for steps */}
                          <h2 className="text-2xl font-semibold mb-3">
                            Langkah-langkah untuk "{resep.nama_resep}"
                          </h2>
                          <table className="w-full text-sm text-left text-green-500">
                          <thead className="text-xs text-green-700 uppercase bg-slate-300">
                              <tr>
                                <th className="py-3 px-1 text-center">No</th>
                                <th className="py-3 px-6">id</th>
                                <th className="py-3 px-6">id_resep</th>
                                <th className="py-3 px-6">step_no</th>
                                <th className="py-3 px-6">step_desc</th>
                                <th className="py-3 px-6">waktu</th>
                                <th className="py-3 px-1 text-center">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {stepsByRecipeId[resep.id].map((step, index) => (
                                <tr key={step.id} className="bg-white border-b">
                                  <td className="py-3 px-1 text-center">
                                    {index + 1}
                                  </td>
                                  <td className="py-3 px-6">{step.id}</td>
                                  <td className="py-3 px-6 font-medium text-gray-900">
                                    {step.id_resep}
                                  </td>
                                  <td className="py-3 px-6">{step.step_no}</td>
                                  <td className="py-3 px-6">
                                    {step.step_desc}
                                  </td>
                                  <td className="py-3 px-6">{step.waktu}</td>
                                  <td className="py-3 px-1 text-center">
                                    <div className="flex">
                                      <Link
                                        to={`/edit-step/${step.id}`}
                                        className="mr-2"
                                      >
                                        <EditButton />
                                      </Link>
                                      <Link
                                        onClick={() => deleteStep(step.id)}
                                      >
                                        <DeleteButton />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
