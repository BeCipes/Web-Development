import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";
import SearchBar from "./SearchBar";


const ArtikelList = () => {
    const [artikelData, setArtikelData] = useState([]);
    const [filteredArtikelData, setFilteredArtikelData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://backend-development-becipes.fly.dev/api/artikel");
          setArtikelData(response.data.data);
          setFilteredArtikelData(response.data.data);

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    }, []);
  
    const deleteProduct = async (id) => {
      try {
        await axios.delete(`https://backend-development-becipes.fly.dev/api/artikel/${id}`);
        const response = await axios.get("https://backend-development-becipes.fly.dev/api/artikel");
        setArtikelData(response.data.data);
        setFilteredArtikelData(response.data.data);

      } catch (error) {
        console.error("Error deleting Artikel:", error.message);
      }
    };
    
  const handleSearch = (searchTerm) => {
    const filteredData = artikelData.filter((artikel) =>
      artikel.headline.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtikelData(filteredData);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
      <SearchBar onSearch={handleSearch} />
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Headline</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Isi</th>
                <th className="py-3 px-6">Penulis</th>
                <th className="py-3 px-6">Sumber</th>
                <th className="py-3 px-6">Kategori</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredArtikelData.map((artikel, index) => (
                <tr key={artikel.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{artikel.headline}</td>
                  <td className="py-3 px-6">{artikel.gambar}</td>
                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
                    {artikel.isi}
                  </td>
                  <td className="py-3 px-6">{artikel.penulis}</td>
                  <td className="py-3 px-6">{artikel.sumber}</td>
                  <td className="py-3 px-6">{artikel.id_kategori}</td>
                  <td className="py-3 px-1 text-center">
                  <div className="flex">
                    <Link to={`/edit-artikel/${artikel.id}`} className="mr-2">
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(artikel.id)}>
                      <DeleteButton />
                    </Link>
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArtikelList;
