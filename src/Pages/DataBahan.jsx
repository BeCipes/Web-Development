import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import BahanList from "../Component/BahanList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataBahan = () => {
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
        const response = await axios.get("https://backend-development-becipes.fly.dev/api/bahan");

        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          const dataArray = response.data.data;
          const namaBahanList = dataArray.map(bahan => bahan.nama_bahan);
          setUserData(namaBahanList);
          console.log("List Nama Bahan:", namaBahanList);
        } else {
          console.error("Data tidak valid atau tidak ada dalam respons.");
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
        <Header nama="Ingredient Management"/>
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Bahan</div>
            <Link to="/add-bahan" >
                <ButtonAddAdmin className="ml-auto" nama="Add Bahan"/>
            </Link>
          </div>
        </div>
        <BahanList />
      </div>
    </div>
  );
};

export default DataBahan;
