// Header.js
import React, { useState } from "react";
import {CgProfile} from "react-icons/cg"

const Header = (props) => {
  return (
    <header className="px-4 sm:ml-56 bg-white shadow">
      <div className="flex items-center justify-between h-16">
        <div className="text-2xl font-bold">
          {props.nama || "Dashboard"}
        </div>
        <span className="flex items-center text-lg">
                <CgProfile className="mr-2" /> Admin
        </span>
      </div>
    </header>
  );
};

export default Header;
