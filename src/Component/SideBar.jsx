import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white h-screen w-1/5 fixed">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Your Website Name</h1>
        </div>
        <ul className="py-4">
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">About</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Services</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Contact</li>
        </ul>
      </div>
    );
  };

export default Sidebar;
