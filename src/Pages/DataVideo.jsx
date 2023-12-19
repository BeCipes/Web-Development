import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import VideoList from "../Component/VideoList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataVideo = () => {
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get("http://localhost:5000/api/teknik");
        console.log("Login Response:", response.data);
        setVideoData(response.data);
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
        <Header nama="Video Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Video</div>

            <Link to="/add-video" >
                <ButtonAddAdmin className="ml-auto" nama="Add Video"/>
            </Link>
          </div>
        </div>
        <VideoList />
      </div>
    </div>
  );
};

export default DataVideo;
