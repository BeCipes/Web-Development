import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CancelButton from "../Component/CancelButton";
import UpdateButton from "../Component/UpdateButton";

const EditResep = () => {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Resep</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
            //   value={admin.name}
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deskripsi
            </label>
            <input
              type="text"
              name="deksripsi"
            //   value={admin.email}
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Step
            </label>
            <input
              type="text"
              name="step"
            //   value={admin.email}
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Waktu
            </label>
            <input
              type="number"
              name="waktu"
            //   value={admin.email}
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bahan
            </label>
            <input
              type="text"
              name="bahan"
            //   value={admin.password}
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gambar
            </label>
            <input
              type="file"
              name="photo"
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Informasi Gizi
            </label>
            <input
              type="text"
              name="InformasiGizi"
              // onChange={}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center">
            <UpdateButton/>
            <Link to="/DataResep">
                <CancelButton/>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditResep;
