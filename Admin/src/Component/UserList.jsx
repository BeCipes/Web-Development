import React, {useState}from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";

const UserList = () => {
  const dummyData = [
    { id: 1, name: "John Doe", email: "john@example.com", password: "password123", photo: "photo-url-1.jpg" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", password: "password456", photo: "photo-url-2.jpg" },
    { id: 3, name: "Bob Smith", email: "bob@example.com", password: "password789", photo: "photo-url-3.jpg" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com", password: "passwordABC", photo: "photo-url-4.jpg" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", password: "passwordDEF", photo: "photo-url-5.jpg" },
    { id: 6, name: "Eva Williams", email: "eva@example.com", password: "passwordGHI", photo: "photo-url-6.jpg" },
    { id: 7, name: "David Miller", email: "david@example.com", password: "passwordJKL", photo: "photo-url-7.jpg" },
    { id: 8, name: "Grace Davis", email: "grace@example.com", password: "passwordMNO", photo: "photo-url-8.jpg" },
    { id: 9, name: "Frank Turner", email: "frank@example.com", password: "passwordPQR", photo: "photo-url-9.jpg" },
    { id: 10, name: "Olivia Robinson", email: "olivia@example.com", password: "passwordSTU", photo: "photo-url-10.jpg" },
  ];

  const [selectedUserId, setSelectedUserId] = useState(null);

  const deleteProduct = async (userId) => {
    setSelectedUserId(userId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${selectedUserId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      })
      .finally(() => {
        setSelectedUserId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedUserId(null);
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
              {dummyData.map((user, index) => (
                <tr key={user.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{user.name}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.password}</td>
                  <td className="py-3 px-6">{user.photo}</td>
                  <td className="py-3 px-1 text-center">
                    {/* <Link to={`/edit-user/${user.id}`}> */}
                    <Link to={`/edit-user`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(user.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUserId && (
        <DeleteFile user="user" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}

    </div>
  );
};

export default UserList;
