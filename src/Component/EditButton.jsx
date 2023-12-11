import React from "react";

const EditButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      onClick={() => {
        console.log("Edit button clicked");
      }}
    >
      Edit
    </button>
  );
}

export default EditButton;
