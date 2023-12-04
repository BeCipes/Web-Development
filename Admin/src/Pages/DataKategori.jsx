import React from "react";
import {Link} from "react-router-dom"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import KategoriList from "../Component/KategoriList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataKategori = () => {
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="Category Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Kategori</div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded border border-gray-300 focus:outline-none focus:shadow-outline"/>
            </div>
            <Link to="/add-kategori" >
                <ButtonAddAdmin className="ml-auto" nama="Add Kategori"/>
            </Link>
          </div>
        </div>
        <KategoriList />
      </div>
    </div>
  );
};

export default DataKategori;
