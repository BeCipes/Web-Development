import React from "react";
import { FaGooglePlay, FaTimes } from "react-icons/fa";

const reset = () => {
  return (
    <div className="hero min-h-screen text-white bg-base-200">
      <div className="w-36 h-auto  -mt-[450px]">
        <img src="public/assets/gocipeshijau.png" alt="" />
      </div>

      <div className="hero-content shadow-2xl bg-grab text-center rounded-lg relative">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Halo Tinz</h1>
          <a href="/login" className="absolute top-0 right-0 p-4">
            <FaTimes className="text-hitam text-lg" />
          </a>
          <p className="py-6 ">
            Kami akan mengirimkan pesan ke email anda untuk mereset ulang kata
            sandi anda. Masukkan Email anda dan Klik Tombol dibawah untuk
            mengirim pesan
          </p>
          <div className="mb-10">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              id="email"
              className="w-72 rounded-lg text-center text-hitam p-2 focus:outline-blue-700"
            />
          </div>
          <a href="#">
            <button className="btn border-none bg-gray-300 hover:bg-gray-400 active:bg-grab">
              Kirim Pesan
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default reset;
