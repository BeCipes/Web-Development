import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";

const TotalAdmin = () => {
  const [totalAdmin, setTotalAdmin] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-development-becipes.fly.dev/api/user"
        );

        const adminUsers = response.data.data.filter(
          (user) => user.role.role_name === "admin"
        );

        setTotalAdmin(adminUsers.length);
      } catch (error) {
        console.error("Error fetching total admin users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sm:ml-60 bg-blue-500 text-white p-4 rounded-md mt-4 flex items-center w-60">
      <FaRegUser className="mr-4" size={30} />
      <div>
        <h2 className="text-2xl font-semibold mb-2">Total Admin</h2>
        <p className="text-3xl font-bold">{totalAdmin}</p>
      </div>
    </div>
  );
};

export default TotalAdmin;
