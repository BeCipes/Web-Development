import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { RiLogoutCircleLine, RiReactjsLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../assets/BeCipes.png"
import { MdArticle } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { FaFileVideo } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    delete axios.defaults.headers.common["Authorization"];

    navigateTo("/login");
  };
  return (
    <div className="p-4 bg-white shadow fixed text-black h-screen w-56">
      <div>
        <img src = {logo}/>
      </div>
      <ul>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/adminpage" >
              <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Dashboard
              </span>
          </Link>
        </li>
        
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataAdmin">
              <span className="flex items-center text-lg">
                <FaRegUser  className="mr-2" /> Admin
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataUser">
          <span className="flex items-center text-lg">
                <FaUser className="mr-2" /> User
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataResep">
          <span className="flex items-center text-lg">
                <IoBookSharp  className="mr-2" /> Resep
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataBahan">
          <span className="flex items-center text-lg">
                <BiSolidFoodMenu className="mr-2" /> Bahan
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataKategori">
          <span className="flex items-center text-lg">
                <BiSolidCategory className="mr-2" /> Kategori
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataArtikel">
          <span className="flex items-center text-lg">
                <MdArticle className="mr-2" /> Artikel
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataVideo">
          <span className="flex items-center text-lg">
                <FaFileVideo className="mr-2" /> Video
              </span>
          </Link>
        </li>
      </ul>
      <div className="p-4 mt-16">
        <ul>
        <li
            className="flex items-center py-2 px-4 justify-between hover:bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            <Link to="/login">
              <span className="flex items-center">
                <RiLogoutCircleLine className="mr-2" /> Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
