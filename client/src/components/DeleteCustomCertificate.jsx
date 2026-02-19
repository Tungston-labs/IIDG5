import React, { useState } from 'react';
import axios from 'axios';
import deleteicon from '../assets/images/delete.svg';

const DeleteCustomCertificate = ({ id, onDelete }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prev => !prev);
  };

  // deleting the certificate
  const handleDelete = () => {
    axios.delete(`https://iidglabs.com/api/auth/certificate/delete-customcertificate/${id}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        // Option 1: call parent callback to remove item from state
        if (onDelete) {
          onDelete(id);
        } else {
          // Option 2: fallback to reload page
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error('Error deleting custom certificate:', error);
      });
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
            <p className='font-bold text-[15px]'>Are you sure you want to delete?</p>
            <div className='flex justify-center items-center gap-10'>
              <button 
                onClick={toggleModal} 
                className='bg-[#33517f] font-bold text-[white] w-20 rounded h-8 mt-4
                           hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete} 
                className='bg-[#b90b0b] ml-2 font-bold text-[white] w-20 rounded h-8 mt-4
                           hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCustomCertificate;
