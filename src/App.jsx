import React from "react";
import Beranda from "./Pages/Beranda";
import About from "./Pages/About";
import Default from "./Pages/Default";
import Panduan from "./Pages/Panduan";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import Reset from "./Pages/Reset";
import Konfirmasi from "./Pages/Konfirmasi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/konfirmasi" element={<Konfirmasi />} />
        <Route path="/" element={<Default />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
