import React, { useState } from 'react';
import axios from 'axios';
import deleteicon from '../assets/images/delete.svg';

const DeleteBulkCertificateModal = ({ id }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://iidglabs.com/api/auth/certificate/bulk-certificates/${id}`);
      console.log(`Bulk Certificate with ID ${id} deleted`);
      
    } catch (error) {
      console.error('Error deleting bulk certificate:', error);
    }
  };

  return (
    <>
      <button onClick={toggleModal}>
        <img src={deleteicon} alt='delete' />
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-[gray] opacity-50"></div>
          <div className="bg-[white] px-14 py-6 rounded-lg z-20">
            <p className="font-bold text-[15px]">Are you sure you want to delete?</p>
            <div className="flex justify-center items-center gap-10">
              <button onClick={toggleModal} className="bg-[#33517f] font-bold text-[white] w-20 rounded h-8 mt-4 hover:scale-90 shadow-custom">
                Cancel
              </button>
              <button onClick={handleDelete} className="bg-[#b90b0b] font-bold text-[white] w-20 rounded h-8 mt-4 hover:scale-90 shadow-custom">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBulkCertificateModal;
