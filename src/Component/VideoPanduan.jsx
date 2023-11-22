// src/YoutubeVideo.js
import React from "react";

const VideoPanduan = ({ videoId }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <iframe
        className="rounded-xl"
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPanduan;
