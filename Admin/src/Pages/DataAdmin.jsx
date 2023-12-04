import React from "react";
import {Link} from "react-router-dom"
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header";
import AdminList from "../Component/AdminList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"
const DataAdmin = () => {
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="Admin Management"/>
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List Admin</div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded border border-gray-300 focus:outline-none focus:shadow-outline"/>
            </div>
            <Link to="/add-admin" >
                <ButtonAddAdmin className="ml-auto" nama="Add Admin"/>
            </Link>
          </div>
        </div>
        <AdminList />
      </div>
    </div>
  );
};

export default DataAdmin;
