import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";

const BahanList = () => {
  const dummyData = [
    {
      id: 1,
      name: "Bahan 1",
      deskripsi: "Deskripsi bahan 1",
      gambar: "url_to_image_1.jpg",
      gizi: "Gizi bahan 1",
    },
    {
      id: 2,
      name: "Bahan 2",
      deskripsi: "Deskripsi bahan 2",
      gambar: "url_to_image_2.jpg",
      gizi: "Gizi bahan 2",
    },
    {
      id: 3,
      name: "Bahan 3",
      deskripsi: "Deskripsi bahan 3",
      gambar: "url_to_image_3.jpg",
      gizi: "Gizi bahan 3",
    },
    {
      id: 4,
      name: "Bahan 4",
      deskripsi: "Deskripsi bahan 4",
      gambar: "url_to_image_4.jpg",
      gizi: "Gizi bahan 4",
    },
    {
      id: 5,
      name: "Bahan 5",
      deskripsi: "Deskripsi bahan 5",
      gambar: "url_to_image_5.jpg",
      gizi: "Gizi bahan 5",
    },
  ];

  const [selectedBahanId, setSelectedBahanId] = useState(null);

  const deleteProduct = async (bahanId) => {
    setSelectedBahanId(bahanId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${selectedBahanId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting bahan:", error);
      })
      .finally(() => {
        setSelectedBahanId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedBahanId(null);
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
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Gizi Bahan</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((bahan, index) => (
                <tr key={bahan.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {bahan.name}
                  </td>
                  <td className="py-3 px-6">{bahan.deskripsi}</td>
                  <td className="py-3 px-6">{bahan.gambar}</td>
                  <td className="py-3 px-6">{bahan.gizi}</td>
                  <td className="py-3 px-1 text-center">

                    {/* <Link to={`/edit-bahan/${bahan.id}`}> */}
                    <Link to={`/edit-bahan`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(bahan.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedBahanId && (
        <DeleteFile user="ingredient" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}

    </div>
  );
};

export default BahanList;
