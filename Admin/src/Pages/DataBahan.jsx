import React from "react";
import {Link} from "react-router-dom"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import BahanList from "../Component/BahanList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"

const DataBahan = () => {
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="Ingredient Management"/>
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Bahan</div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded border border-gray-300 focus:outline-none focus:shadow-outline"/>
            </div>
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
