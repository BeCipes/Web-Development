import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";

const ResepList = () => {
  const [resepData, setResepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resepResponse = await axios.get(
          "https://backend-development-becipes.fly.dev/api/resep"
        );
        setResepData(resepResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/resep/${id}`);
      const response = await axios.get("http://localhost:5000/api/resep");
      setResepData(response.data.data);
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
                <tr key={resep.id} className="bg-white border-b">
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
                      <Link onClick={() => deleteProduct(resep.id)}>
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

export default ResepList;
