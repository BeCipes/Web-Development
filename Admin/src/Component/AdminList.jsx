import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton.jsx";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile.jsx";

const AdminList = () => {
  const admins = [
    { id: 1, name: "Admin 1", email: "admin1@example.com", password: "password1", photo: "photo1.jpg" },
    { id: 2, name: "Admin 2", email: "admin2@example.com", password: "password2", photo: "photo2.jpg" },
    { id: 3, name: "Admin 3", email: "admin3@example.com", password: "password3", photo: "photo3.jpg" },
    { id: 4, name: "Admin 4", email: "admin4@example.com", password: "password4", photo: "photo4.jpg" },
    { id: 5, name: "Admin 5", email: "admin5@example.com", password: "password5", photo: "photo5.jpg" }
  ];

  const [selectedAdminId, setSelectedAdminId] = useState(null);

  const deleteProduct = async (adminId) => {
    setSelectedAdminId(adminId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${selectedAdminId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting admin:", error);
      })
      .finally(() => {
        setSelectedAdminId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedAdminId(null);
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
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Password</th>
                <th className="py-3 px-6">Photo</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{admin.name}</td>
                  <td className="py-3 px-6">{admin.email}</td>
                  <td className="py-3 px-6">{admin.password}</td>
                  <td className="py-3 px-6">{admin.photo}</td>
                  <td className="py-3 px-1 text-center">
                    {/* <Link to={`/edit-admin/${admin.id}`}> */}
                    <Link to={`/edit-admin`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(admin.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedAdminId && (
        <DeleteFile user="admin" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}

    </div>
  );
};

export default AdminList;
