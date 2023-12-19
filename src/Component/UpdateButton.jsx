import React from "react";

const UpdateButton = ({onClick}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      //   onClick={updateAdmin}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    >
      Update
    </button>
  );
};

export default UpdateButton;
