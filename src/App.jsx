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
import AdminPage from "./Pages/AdminPage";
import DataAdmin from "./Pages/DataAdmin";
import DataUser from "./Pages/DataUser";
import EditAdmin from "./Pages/EditAdmin";
import AddAdmin from "./Pages/AddAdmin";
import EditUser from "./Pages/EditUser"
import AddUser from "./Pages/AddUser"
import DataResep from "./Pages/DataResep";
import AddResep from "./Pages/AddResep";
import EditResep from "./Pages/EditResep";
import DataBahan from "./Pages/DataBahan"
import AddBahan from "./Pages/AddBahan";
import EditBahan from "./Pages/EditBahan"
import DataArtikel from "./Pages/DataArtikel";
import AddArtikel from "./Pages/AddArtikel"
import EditArtikel from "./Pages/EditArtikel"
import DataVideo from "./Pages/DataVideo"
import AddVideo from "./Pages/AddVideo";
import EditVideo from "./Pages/EditVideo"
import DataKategori from "./Pages/DataKategori"
import AddKategori from "./Pages/AddKategori"
import EditKategori from "./Pages/EditKategori"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataJenis from "./Pages/DataJenis";
import EditJenis from "./Pages/EditJenis";
import AddJenis from "./Pages/AddJenis"
import DataStep from "./Pages/DataStep";
import AddStep from "./Pages/AddStep"
import EditStep from "./Pages/EditStep"
import DataResepDetail from "./Pages/DataResepDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/konfirmasi" element={<Konfirmasi />} />
        <Route path="/" element={<Default />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/DataAdmin" element={<DataAdmin />} />
        <Route path="/DataUser" element={<DataUser />} />
        <Route path="/edit-admin" element={<EditAdmin />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/add-resep" element={<AddResep />} />
        <Route path="/edit-resep/:id" element={<EditResep />} />
        <Route path="/DataBahan" element={<DataBahan />} />
        <Route path="/add-bahan" element={<AddBahan />} />
        <Route path="/edit-bahan/:id" element={<EditBahan />} />
        <Route path="/DataArtikel" element={<DataArtikel />} />
        <Route path="/add-artikel" element={<AddArtikel />} />
        <Route path="/edit-artikel/:id" element={<EditArtikel />} />
        <Route path="/DataVideo" element={<DataVideo/>} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video/:id" element={<EditVideo />} />
        <Route path="/DataKategori" element={<DataKategori/>} />
        <Route path="/add-kategori" element={<AddKategori />} />
        <Route path="/edit-kategori/:id" element={<EditKategori />} />
        <Route path="/DataJenis" element={<DataJenis />} />
        <Route path="/edit-jenis/:id" element={<EditJenis/>} />
        <Route path="/add-jenis" element={<AddJenis />} />
        <Route path="/edit-step/:id" element={<EditStep/>} />
        <Route path="/add-step" element={<AddStep />} />

        <Route path="/DataResepDetail" element={<DataResepDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
