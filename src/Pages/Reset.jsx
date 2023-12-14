import React, { useState } from "react";
import { FaGooglePlay, FaTimes } from "react-icons/fa";

const Reset = () => {
  const [pesan, setPesan] = useState(
    "Kami akan mengirimkan pesan ke email anda untuk mereset ulang kata sandi anda. Klik Tombol dibawah untuk mengirim pesan"
  );

  const [pesanDikirim, setPesanDikirim] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);
  const sendResetEmailToUser = async () => {
    try {
      const response = await fetch("https://example.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        return Promise.resolve();
      } else {
        return Promise.reject("Gagal mengirim email");
      }
    } catch (error) {
      return Promise.reject(error.message || "Gagal mengirim email");
    }
  };

  const handleKirimPesan = () => {
    sendResetEmailToUser()
      .then(() => {
        setPesanDikirim(true);
      })
      .catch((error) => {
        console.error("Gagal mengirim email:", error);
      });
    setIsInputVisible(false);

    setPesanDikirim(true);
    setPesan(
      "Kami telah mengirimkan pesan ke email anda. Anda dapat mengubah kata sandi dari email anda"
    );
  };

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
          <p className="py-6  ">{pesan}</p>
          <div className={`mb-10 ${isInputVisible ? "" : "hidden"}`}>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              id="email"
              className="w-72 rounded-lg text-center text-hitam p-2 focus:outline-blue-700"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>

          {!pesanDikirim ? (
            <button
              className="btn border-none bg-gray-300 hover:bg-gray-400 active:bg-grab"
              onClick={handleKirimPesan}
            >
              Kirim Pesan
            </button>
          ) : (
            <p className="text-3xl font-semibold">Pesan berhasil dikirim</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reset;
