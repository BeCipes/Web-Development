import React from "react";
import Sidebar from "../Component/SideBar";
import Header from "../Component/Header"
import UserList from "../Component/UserList";
import ButtonAddAdmin from "../Component/ButtonAddAdmin"
import {Link} from "react-router-dom"

const DataUser = () => {
  return (
    <div className="flex-column">
      <Sidebar />
      <div className="flex-column">
        <Header nama="User Management" />
        <div className="flex px-6 sm:ml-56 mt-5">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="text-2xl font-bold">List User</div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded border border-gray-300 focus:outline-none focus:shadow-outline"/>
            </div>
            <Link to="/add-user" >
                <ButtonAddAdmin className="ml-auto" nama="Add User"/>
            </Link>
          </div>
        </div>
        <UserList/>
      </div>
    </div>
  );
};

export default DataUser;
