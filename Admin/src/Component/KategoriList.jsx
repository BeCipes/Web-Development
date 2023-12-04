import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";

const VideoList = () => {
  const dummyCategories = [
    { id: 1, name: "Category 1", image: "image1.jpg" },
    { id: 2, name: "Category 2", image: "image2.jpg" },
    { id: 3, name: "Category 3", image: "image3.jpg" },
    { id: 4, name: "Category 4", image: "image4.jpg" },
    { id: 5, name: "Category 5", image: "image5.jpg" },
  ];

  const [selectedKategoriId, setSelectedKategoriId] = useState(null);

  const deleteProduct = async (kategoriId) => {
    setSelectedKategoriId(kategoriId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${selectedCategoryId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting kategori:", error);
      })
      .finally(() => {
        setSelectedKategoriId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedKategoriId(null);
  }
  // const deleteCategory = async (categoryId) => {
  //   await axios.delete(`http://localhost:5000/admin/${categoryId}`);
  // };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-green-700 uppercase bg-slate-300">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyCategories.map((category, index) => (
                <tr key={category.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {category.name}
                  </td>
                  <td className="py-3 px-6">{category.image}</td>
                  <td className="py-3 px-1 text-center">
                    {/* <Link to={`/edit-kategori/${category.id}`}> */}
                    <Link to={`/edit-kategori`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(category.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedKategoriId && (
        <DeleteFile user="category" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default VideoList;
