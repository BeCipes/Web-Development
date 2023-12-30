import React, {useState, useEffect} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Sidebar from "../Component/SideBar";
import Dropdown from "../Component/admindropdown";
import TotalUser from "../Component/TotalUser";
import TotalAdmin from "../Component/TotalAdmin";
import TotalResep from "../Component/TotalResep";
import TotalBahan from "../Component/TotalBahan";
import TotalKategori from "../Component/TotalKategori";
import TotalArtikel from "../Component/TotalArtikel";
import TotalVideo from "../Component/TotalVideo";
import Header2 from "../Component/Header2";
import Header from "../Component/Header"
import TotalJenis from "../Component/TotalJenis"
import TotalStep from "../Component/TotalStep"


const AdminPage = () => {
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
        const response = await axios.get("https://backend-development-becipes.fly.dev/api/user");
        
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
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex">
          <div className="w-full md:w-full mt-4">
            <Header2/>
            <div className="w-4/5 grid grid-cols-3 gap-4 pl-8 m-10">
              <div className="col-span-3 md:col-span-1 ">
                <TotalUser />
              </div>
              <div className="col-span-3 md:col-span-1">
                <TotalAdmin />
              </div>
              <div className="col-span-3 md:col-span-1 ">
                <TotalResep />
              </div>
              <div className="col-span-3 md:col-span-1">
                <TotalStep />
              </div>
              <div className="col-span-3 md:col-span-1 ">
                <TotalBahan />
              </div>
              <div className="col-span-3 md:col-span-1">
                <TotalJenis />
              </div>
              <div className="col-span-3 md:col-span-1">
                <TotalKategori />
              </div>
              <div className="col-span-3 md:col-span-1 ">
                <TotalArtikel />
              </div>
              <div className="col-span-3 md:col-span-1 ">
                <TotalVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
