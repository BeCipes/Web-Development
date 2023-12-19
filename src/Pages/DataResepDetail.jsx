import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import ResepDetail from "../Component/ResepDetail";
import ButtonAddAdmin from "../Component/ButtonAddAdmin";

const DataResepDetail = () => {
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
        <Header nama=" Pengelolaan Resep" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">Daftar Resep</div>

            <div className="flex ml-auto space-x-4">
              <Link to="/add-resep">
                <ButtonAddAdmin nama="Tambah Resep" />
              </Link>
              <Link to="/add-step">
                <ButtonAddAdmin nama="Tambah Step" />
              </Link>
            </div>
          </div>
        </div>
        <ResepDetail />
      </div>
    </div>
  );
};

export default DataResepDetail;
