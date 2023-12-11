import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton"
import DeleteFile from "./DeleteFile";

const ResepList = () => {

  const dummyData = [
    {
      id: 1,
      name: "Recipe 1",
      deskripsi: "Description 1",
      step: "Step 1",
      waktu: 30,
      bahan: "Ingredient 1, Ingredient 2",
      gambar: "image_url_1.jpg",
      informasiGizi: "Nutritional information 1",
    },
  ];

  const [selectedResepId, setSelectedResepId] = useState(null)

  const deleteProduct = async (resepId) => {
    setSelectedResepId(resepId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${resepId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting resep:", error);
      })
      .finally(() => {
        setSelectedResepId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedResepId(null);
  }


  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-green-700 uppercase bg-slate-300">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Deskripsi</th>
                <th className="py-3 px-6">Step</th>
                <th className="py-3 px-6">Waktu</th>
                <th className="py-3 px-6">Bahan</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Informasi Gizi</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((resep, index) => (
                <tr key={resep.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{resep.name}</td>
                  <td className="py-3 px-6">{resep.deskripsi}</td>
                  <td className="py-3 px-6">{resep.step}</td>
                  <td className="py-3 px-6">{resep.waktu}</td>
                  <td className="py-3 px-6">{resep.bahan}</td>
                  <td className="py-3 px-6">{resep.gambar}</td>
                  <td className="py-3 px-6">{resep.informasiGizi}</td>
                  <td className="py-3 px-1 text-center">
                  <div className="flex">
                  {/* <Link to={`/edit-resep/${resep.id}`} className="mr-2"> */}
                  <Link to={`/edit-resep`} className="mr-2">
                      <EditButton/>
                  </Link>
                  <Link onClick={()=>deleteProduct(resep.id)} >
                      <DeleteButton/>
                  </Link>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedResepId && (
        <DeleteFile user="resep" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}

    </div>
  );
};

export default ResepList;
