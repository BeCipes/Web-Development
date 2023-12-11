import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFileVideo } from "react-icons/fa6";
const TotalVideo= () => {


  return (
    <div className="sm:ml-60 bg-blue-500 text-white p-4 rounded-md mt-4 flex items-center w-60">
      <FaFileVideo className="mr-4" size={30}/>
      <div>
      <h2 className="text-2xl font-semibold mb-2">Total Video</h2>
      <p className="text-3xl font-bold">0</p>
      {/* <p className="text-3xl font-bold">{totalVideo}</p> */}
      </div>
    </div>
  );
};

export default TotalVideo;
