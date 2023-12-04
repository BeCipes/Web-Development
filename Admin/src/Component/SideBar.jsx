import React from "react";
import { Link } from "react-router-dom";
import { RiLogoutCircleLine, RiReactjsLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../assets/BeCipes.png"

const Sidebar = () => {
  return (
    <div className="p-4 bg-white shadow fixed text-black h-screen w-56">
      <div>
        <img src = {logo}/>
      </div>
      <ul>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/" >
              <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Dashboard
              </span>
          </Link>
        </li>
        
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataAdmin">
              <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Admin
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataUser">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data User
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataResep">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Resep
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataBahan">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Bahan
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataKategori">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Kategori
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataArtikel">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Artikel
              </span>
          </Link>
        </li>
        <li className="flex py-2 px-4 justify-start hover:bg-gray-200 cursor-pointer">
          <Link to="/DataVideo">
          <span className="flex items-center text-lg">
                <IoHomeOutline className="mr-2" /> Data Video
              </span>
          </Link>
        </li>
      </ul>
      <div className="p-4 mt-16">
        <ul>
          <li className="flex items-center py-2 px-4 justify-between hover:bg-gray-200 cursor-pointer">
            <Link to="/logout">
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
