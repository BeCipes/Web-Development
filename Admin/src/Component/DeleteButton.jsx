import React from "react";

const DeleteButton = () => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        console.log("Delete button clicked");
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
