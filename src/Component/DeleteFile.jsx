import React, { useState } from "react";
import Modal from "react-modal";

const DeleteFile = ({ user, onDelete, onCancel }) => {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleDelete = () => {
    onDelete();
    setModalOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      className="fixed inset-0 flex items-center justify-center"
    > 
      <div className="bg-white p-5 rounded-md w-full sm:w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-3">Konfirmasi Penghapusan</h2>
        <p className="mb-5">Apakah kamu yakin ingin menghapus data {user} ini?</p>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteFile;
