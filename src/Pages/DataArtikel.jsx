import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import ArtikelList from "../Component/ArtikelList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataArtikel = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user");
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

  if (!userData.length) {
    navigate("/login");
  }
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="Artikel Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Artikel</div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded border border-gray-300 focus:outline-none focus:shadow-outline"/>
            </div>
            <Link to="/add-artikel" >
                <ButtonAddAdmin className="ml-auto" nama="Add Artikel"/>
            </Link>
          </div>
        </div>
        <ArtikelList />
      </div>
    </div>
  );
};

export default DataArtikel;
