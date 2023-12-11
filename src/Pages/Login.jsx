import React, { useState } from "react";
import { FaGooglePlay, FaTimes } from "react-icons/fa";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate()

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
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200  Poppins">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="flex bg-stone-950 text-white mb-16 mx-16 max-w-full h-96 lg:h-full rounded-md shadow-2xl">
            <div className="flex w-full lg:w-2/5">
              {/* Left side */}
              <div
                className="bg-cover bg-center w-full h-full rounded-md shadow-2xl"
                style={{
                  backgroundImage: "url('public/assets/avocado toast.jpeg')",
                }}
              ></div>
            </div>

            <div className="flex w-full lg:w-3/5  rounded-md p-8 shadow-2xl bg-grab ">
              {/* Right side */}
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
                  <div className="form-control flex mb-4 text-hitam">
                    <label className="label flex items-center">
                      <input type="checkbox" className="checkbox bg-white" />
                      <span className="label-text text-md mr-80 font-semibold">
                        Ingat Saya
                      </span>
                    </label>
                  </div>
                  <div
                    className="text-end -mt-12 text-black"
                    style={{ textDecoration: "underline" }}
                  >
                    <a href="/reset">Lupa Password?</a>
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
    </div>
  );
};

export default Login;
