import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import SearchBar from "./SearchBar";

const VideoList = () => {
  const [videoData, setVideoData] = useState([]);
  const [filteredVideoData, setFilteredVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-development-becipes.fly.dev/api/teknik"
        );
        setVideoData(response.data.data);
        setFilteredVideoData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://backend-development-becipes.fly.dev/api/teknik/${id}`
      );
      const response = await axios.get(
        "https://backend-development-becipes.fly.dev/api/teknik"
      );
      setVideoData(response.data.data);
      setFilteredVideoData(response.data.data);
    } catch (error) {
      console.error("Error deleting Video:", error.message);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredData = videoData.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideoData(filteredData);
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
                <th className="py-3 px-6">Judul</th>
                <th className="py-3 px-6">Deskripsi</th>
                <th className="py-3 px-6">Cover</th>
                <th className="py-3 px-6">URL</th>
                <th className="py-3 px-6">Sumber</th>
                <th className="py-3 px-6">Kategori</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredVideoData.map((video, index) => (
                <tr key={video.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {video.title}
                  </td>
                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
                    {video.description}
                  </td>
                  <td className="py-3 px-6">{video.cover}</td>
                  <td className="py-3 px-6">{video.url}</td>
                  <td className="py-3 px-6">{video.sumber}</td>
                  <td className="py-3 px-6">{video.id_kategori}</td>
                  <td className="py-3 px-1 text-center">
                    <div className="flex">
                      <Link to={`/edit-video/${video.id}`} className="mr-2">
                        <EditButton />
                      </Link>
                      <Link onClick={() => deleteProduct(video.id)}>
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

export default VideoList;
