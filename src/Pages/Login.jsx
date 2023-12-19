import React, { useState } from "react";
import { FaGooglePlay, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login Response:", response.data);
      console.log("Login Response:", response.data.data);

      const { role, token } = response.data.data;

      if (role === "admin" && token) {
        const { accessToken, refreshToken } = token;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        console.log("Headers:", axios.defaults.headers);
        navigateTo("/adminpage");
      } else {
        console.error("User does not have admin role or tokens not found.");
        setShowWarningModal(true);
        setLoginError("Login failed.");
      }
    } catch (error) {
      console.error("Login failed", error);
      console.log("ERRORS:", error.response.data.errors);
      setLoginError(error.response.data.errors);
    }
  };

  const handleCloseModal = () => {
    setShowWarningModal(false);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200  Poppins">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="flex bg-stone-950 text-white mb-16 mx-16 max-w-full h-96 lg:h-full rounded-md shadow-2xl">
            <div className="flex w-full lg:w-2/5">
              <div
                className="bg-cover bg-center w-full h-full rounded-md shadow-2xl"
                style={{
                  backgroundImage: "url('public/assets/avocado toast.jpeg')",
                }}
              ></div>
            </div>

            <div className="flex w-full lg:w-3/5  rounded-md p-8 shadow-2xl bg-grab ">
              <div className="w-full">
                <a href="/" className="flex items-center justify-end">
                  <FaTimes className="text-hitam text-lg"></FaTimes>
                </a>

                <h1 className="text-3xl font-bold mb-4 text-hitam flex-col">
                  Login
                </h1>
                <p className="py-6 text-hitam text-l">
                  Selamat datang kembali! Kami senang Anda kembali ke akun Anda.
                  Mohon masukkan informasi login Anda.
                </p>
                {loginError && (
                  <div className="text-red-500 mb-4">{loginError}</div>
                )}
                <form onSubmit={handleLogin}>
                  <div className="form-control mb-4 text-hitam">
                    <label className="label">
                      <span className="label-text text-md font-semibold">
                        Alamat Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Masukkan alamat email"
                      className="input input-bordered text-sm"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-control mb-4 text-hitam">
                    <label className="label">
                      <span className="label-text text-md font-semibold">
                        Kata Sandi
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Masukkan kata sandi"
                      className="input input-bordered text-sm"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn btn-primary w-full bg-hitam border-none text-white
                    hover:bg-slate-300 hover:text-hitam"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Peringatan!
            </h2>
            <p className="text-gray-700">
              Pengguna publik tidak diperbolehkan untuk masuk sebagai admin.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 btn bg-red-500 w-full text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
