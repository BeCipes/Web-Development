import React, { useState } from 'react';
import myimage from '../assets/foto kelompok/logo.jpg';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`bg-gray-800 fixed text-white h-screen w-${sidebarVisible ? '1/2' : '1/12'} sm:w-1/6 transition-all ease-in-out`}>
      <button
        className="text-white p-2 bg-gray-800 cursor-pointer sm:hidden"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <div className="p-4">
        <h1 className="flex justify-center text-lg font-bold">Healty Food Recipes</h1>
        <img className='rounded-full scale-75 mx-auto' src={myimage} alt="foto admin" />
        <h2 className='flex justify-center text-lg font-bold pb-7 border-b-2'>Admin-01</h2>
      </div>
      <ul>
        <li className="flex py-2 px-4 justify-center hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="flex py-2 px-4 justify-center hover:bg-gray-700 cursor-pointer">Data Admin</li>
        <li className="flex py-2 px-4 justify-center hover:bg-gray-700 cursor-pointer">Data User</li>
        <li className="flex py-2 px-4 justify-center hover:bg-gray-700 cursor-pointer">Data Resep</li>
      </ul>
    </div>
  );
};

export default Sidebar;
