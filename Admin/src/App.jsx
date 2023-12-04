import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/DataAdmin" element={<DataAdmin />} />
        <Route path="/DataUser" element={<DataUser />} />
        <Route path="/edit-admin" element={<EditAdmin />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/DataResep" element={<DataResep />} />
        <Route path="/add-resep" element={<AddResep />} />
        <Route path="/edit-resep" element={<EditResep />} />
        <Route path="/DataBahan" element={<DataBahan />} />
        <Route path="/add-bahan" element={<AddBahan />} />
        <Route path="/edit-bahan" element={<EditBahan />} />
        <Route path="/DataArtikel" element={<DataArtikel />} />
        <Route path="/add-artikel" element={<AddArtikel />} />
        <Route path="/edit-artikel" element={<EditArtikel />} />
        <Route path="/DataVideo" element={<DataVideo/>} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video" element={<EditVideo />} />
        <Route path="/DataKategori" element={<DataKategori/>} />
        <Route path="/add-kategori" element={<AddKategori />} />
        <Route path="/edit-kategori" element={<EditKategori />} />

      </Routes>
    </Router>
  );
}

export default App;
