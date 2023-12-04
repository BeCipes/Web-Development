// AdminPage.js
import React from "react";
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

const AdminPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Dropdown />
        <div className="flex">
          <div className="w-full md:w-full mt-2">
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
              <div className="col-span-3 md:col-span-1 ">
                <TotalBahan />
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
