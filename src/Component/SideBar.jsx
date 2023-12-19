import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiLogoutCircleLine, RiReactjsLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../assets/BeCipes.png";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";

const Sidebar = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    delete axios.defaults.headers.common["Authorization"];

    navigateTo("/login");
  };
  return (
    <div className="p-4 bg-white shadow fixed text-black h-screen w-56 flex flex-col items-center">
      <div>
        <img src={logo} className="w-32 h-32" alt="Logo" />
      </div>
      <ul>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/adminpage">
            <span className="flex items-center text-lg">
              <IoHomeOutline className="mr-2" /> Dashboard
            </span>
          </Link>
        </li>

        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataAdmin">
            <span className="flex items-center text-lg">
              <FaRegUser className="mr-2" /> Admin
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataUser">
            <span className="flex items-center text-lg">
              <FaRegUser className="mr-2" /> User
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataResepDetail">
            <span className="flex items-center text-lg">
              <IoBookOutline className="mr-2" /> Resep Detail
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataBahan">
            <span className="flex items-center text-lg">
              <BiFoodMenu className="mr-2" /> Bahan
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataJenis">
            <span className="flex items-center text-lg">
              <BiCategory className="mr-2" /> Jenis Kategori
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataKategori">
            <span className="flex items-center text-lg">
              <BiCategory className="mr-2" /> Kategori
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataArtikel">
            <span className="flex items-center text-lg">
              <MdOutlineArticle className="mr-2" /> Artikel
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataVideo">
            <span className="flex items-center text-lg">
              <FaRegFileVideo className="mr-2" /> Video
            </span>
          </Link>
        </li>
      </ul>
      <div className="p-4 -mt-2">
        <ul>
          <li
            className="flex items-center py-2 px-4 justify-between hover:bg-red-200 cursor-pointer"
            onClick={handleLogout}
          >
            <Link to="/login">
              <span className="flex items-center">
                <RiLogoutCircleLine /> Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
