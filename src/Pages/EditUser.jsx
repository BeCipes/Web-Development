import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditUser = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching user data for id:", id);
        const response = await axios.get(`https://backend-development-becipes.fly.dev/api/user/${id}`);
        console.log("Server Response:", response.data.data);

        const publikData = response.data.data;

        setUserData((prevData) => ({
          ...prevData,
          first_name: publikData.first_name,
          last_name: publikData.last_name,
          email: publikData.email,
          password: publikData.password,
        }));
      } catch (error) {
        console.error("Error fetching User data:", error.message);
      }
    };
  
    fetchData();
  }, [id]);
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setUserData((prevData) => ({
        ...prevData,
        [name]: files[0].name,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://backend-development-becipes.fly.dev/api/user/${id}`, 
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      console.log("Server Response:", response);

      navigate("/DataUser");
    } catch (error) {
      console.error("Error updating User:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
            <UpdateButton onClick={handleSubmit}/>
            <Link to="/DataUser">
                <CancelButton/>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
