import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import SearchBar from "./SearchBar";

const RecipeDetail = () => {
  const [resepData, setResepData] = useState([]);
  const [stepData, setStepData] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [filteredResepData, setFilteredResepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resepResponse = await axios.get(
          "http://localhost:5000/api/resep"
        );
        setResepData(resepResponse.data.data);
        setFilteredResepData(resepResponse.data.data);

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

  const handleSearch = (searchTerm) => {
    const filteredData = resepData.filter((resep) =>
      resep.nama_resep.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResepData(filteredData);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <SearchBar onSearch={handleSearch} />
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-white uppercase bg-black">
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
              {filteredResepData.map((resep, index) => (
                <React.Fragment key={resep.id}>
                  <tr className="bg-white border-b">
                    <td className="py-3 px-1 text-center">{index + 1}</td>
                    <td className="py-3 px-6">{resep.id}</td>
                    <td className="py-3 px-6 font-medium text-gray-900">
                      {resep.nama_resep}
                    </td>
                    <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
                      {resep.deskripsi}
                    </td>
                    <td className="py-3 px-6">{resep.gambar}</td>
                    <td className="py-3 px-6">{resep.bahan}</td>
                    <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
                      <ul className="list-disc pl-4">
                        {Object.entries(resep.informasi_gizi).map(
                          ([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {value}
                            </li>
                          )
                        )}
                      </ul>
                    </td>
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
                      <button
                        onClick={() => toggleDropdown(resep.id)}
                        className={`font-bold text-lg w-24 h-10 ${
                          openDropdownId === resep.id
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {openDropdownId === resep.id ? "Tutup" : "Buka"}
                      </button>
                    </td>
                  </tr>
                  {openDropdownId === resep.id && (
                    <tr>
                      <td colSpan="8">
                        <div className="mt-5 ml-16 mb-4">
                          <h2 className="text-2xl font-semibold mb-3">
                            Langkah-langkah untuk membuat "{resep.nama_resep}"
                          </h2>
                           {stepsByRecipeId[resep.id] && stepsByRecipeId[resep.id].length > 0 ? (
                          <table className="w-full text-sm text-left text-green-500">
                            <thead className="text-xs text-green-800 uppercase bg-slate-200">
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
                                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
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
                                      <Link onClick={() => deleteStep(step.id)}>
                                        <DeleteButton />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                           ) : (
                            <p className="text-red-500">Data step masih kosong</p>
                           )}
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
