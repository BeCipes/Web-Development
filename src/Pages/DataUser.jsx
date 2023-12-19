import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header"
import UserList from "../Component/UserList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"


const DataUser = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get("http://localhost:5000/api/user");
        console.log("Login Response:", response.data);
        
        const filteredUsers = response.data.data.filter(
          (user) => user.role.role_name === "admin"
        );
        setUserData(filteredUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="User Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List User</div>
            <Link to="/add-user" >
                <ButtonAddAdmin className="ml-auto" nama="Add User"/>
            </Link>
          </div>
        </div>
        <UserList/>
      </div>
    </div>
  );
};

export default DataUser;
