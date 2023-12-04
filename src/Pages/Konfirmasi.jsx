import React from "react";

const konfirmasi = () => {
  return (
    <div className="bg-base-200">
      <div className="w-24 h-auto">
        <img src="public/assets/gocipeshijau.png" alt="" />
      </div>
      <div className="bg-base-200 flex">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-96 bg-grab shadow-2xl text-center rounded-md mx-auto">
            <div className="max-w-md">
              <h1 className="text-lg font-semibold mb-6">
                {" "}
                Silahkan Masukkan Password baru Anda
              </h1>
              <div className="mb-10">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Password Baru
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-72 rounded-lg text-center text-hitam p-2 focus:outline-blue-700"
                />
                <label
                  className="block text-sm font-semibold mt-4 mb-2"
                  htmlFor="email"
                >
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-72 rounded-lg text-center text-hitam p-2 focus:outline-blue-700"
                />
              </div>
              <button className="btn border-none bg-gray-300 hover:bg-gray-400 active:bg-grab">
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default konfirmasi;
