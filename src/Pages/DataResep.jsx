import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import ResepList from "../Component/ResepList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin";

const DataResep = () => {
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
        <Header nama="Resep Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Resep</div>

            <Link to="/add-resep">
              <ButtonAddAdmin className="ml-auto" nama="Add Resep" />
            </Link>
          </div>
        </div>
        <ResepList />
      </div>
    </div>
  );
};

export default DataResep;
