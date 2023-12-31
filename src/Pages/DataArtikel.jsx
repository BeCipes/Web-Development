import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import ArtikelList from "../Component/ArtikelList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataArtikel = () => {
  const [artikelData, setArtikelData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get("https://backend-development-becipes.fly.dev/api/artikel");
        console.log("Login Response:", response.data);
        setArtikelData(response.data);
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
        <Header nama="Artikel Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Artikel</div>
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
