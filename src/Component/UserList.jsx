import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton.jsx";
import DeleteButton from "../Component/DeleteButton";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user");
        const filteredUsers = response.data.data.filter(
          (user) => user.role.role_name === "user"
        );
        setUserData(filteredUsers);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${id}`);
      const response = await axios.get("http://localhost:5000/api/user");
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error deleting user :", error.message);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">UUID</th>
                <th className="py-3 px-6">First Name</th>
                <th className="py-3 px-6">Last Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={user.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{user.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {user.first_name}
                  </td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {user.last_name}
                  </td>

                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-1 text-center">
                    <Link to={`/edit-user/${user.id}`}>
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
    </div>
  );
};

export default UserList;
