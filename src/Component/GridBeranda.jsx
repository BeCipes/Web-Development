import React from 'react';
import { Link } from "react-router-dom";

const GridBeranda = () => {
  return (
    <div className="mb-40 mx-10 max-w-full">
      <div className="grid grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex bg-black text-white rounded-md h-72 -z-0">
          {/* Image Side */}
          <div className="w-1/2 relative -z-0" style={{ transform: "translateY(-20px) translateX(-15px)" }}>
            <img
              src="public/assets/home4.jpg"
              alt="Card"
              className="w-full h-full object-cover rounded-md"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            />
          </div>
          {/* Text Side */}
          <div className="flex flex-col justify-center items-center h-full w-1/2 text-center px-3">
            <p className="text-white mb-4 text-center">
              Rasakan manfaat kesehatan yang akan Anda dapatkan dengan memilih makanan sehat. Kami selalu siap mendengar dari Anda dan memberikan dukungan yang Anda butuhkan.
            </p>
            <Link to="/ContactUs">
              <button className="btn bg-grab hover:bg-slate-300 border-none rounded-3xl px-10 text-hitam">
                Kontak & Dukungan
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex bg-black text-white rounded-md h-72 -z-0">
          {/* Image Side */}
          <div className="w-1/2 relative -z-0" style={{ transform: "translateY(-20px) translateX(-15px)" }}>
            <img
              src="public/assets/home.jpg"
              alt="Card"
              className="w-full h-full object-cover rounded-md"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            />
          </div>
          {/* Text Side */}
          <div className="flex flex-col justify-center items-center h-full w-1/2 text-center px-3">
            <p className="text-white mb-4 text-center">
              Bergabunglah dengan kami dalam perjalanan menuju gaya hidup yang lebih sehat dan nikmat dengan resep-resep terbaik dari Healty Food Recipes.
            </p>
            <Link to="">
            <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
              Download Aplikasi
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBeranda;
