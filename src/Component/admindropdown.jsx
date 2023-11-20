// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 sm:px-6 md:px-8 bg-white shadow">
      <div className="flex items-center justify-end h-16">
        <div className="text-2xl font-bold">Admin</div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-black px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          >
            <span>&#9660;</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
              <ul>
                <li className="p-2">Profile</li>
                <li className="p-2">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
