import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";

const VideoList = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const deleteProduct = async (videoId) => {
    setSelectedVideoId(videoId);
  };

  const confirmDelete = () => {
    axios
      .delete(`http://localhost:5000/admin/${selectedVideoId}`)
      .then(() => {})
      .catch((error) => {
        console.error("Error deleting video:", error);
      })
      .finally(() => {
        setSelectedVideoId(null);
      });
  };

  const cancelDelete = () => {
    setSelectedVideoId(null);
  };

  // Dummy Data
  const dummyData = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.example.com/video1",
      description: "Description 1",
      cover: "cover1.jpg",
      source: "Source 1",
      category: "Category 1",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.example.com/video2",
      description: "Description 2",
      cover: "cover2.jpg",
      source: "Source 2",
      category: "Category 2",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-green-700 uppercase bg-slate-300">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Judul</th>
                <th className="py-3 px-6">URL</th>
                <th className="py-3 px-6">Deskripsi</th>
                <th className="py-3 px-6">Cover</th>
                <th className="py-3 px-6">Sumber</th>
                <th className="py-3 px-6">Kategori</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((video, index) => (
                <tr key={video.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {video.title}
                  </td>
                  <td className="py-3 px-6">{video.url}</td>
                  <td className="py-3 px-6">{video.description}</td>
                  <td className="py-3 px-6">{video.cover}</td>
                  <td className="py-3 px-6">{video.source}</td>
                  <td className="py-3 px-6">{video.category}</td>
                  <td className="py-3 px-1 text-center">
                    {/* <Link to={`/edit-video/${video.id}`}> */}
                    <Link to={`/edit-video`}>
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(video.id)}>
                      <DeleteButton />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedVideoId && (
        <DeleteFile user ="video" onDelete={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default VideoList;
