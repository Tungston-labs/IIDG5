import React, { useState, useEffect } from 'react';
import axios from 'axios';
import trash from '../assets/images/trash.svg';
import arrow from '../assets/images/bluearrow.svg';
import ViewBulkCertificate from './ViewBulkCertificate';
import EditBulkCertificate from './EditBulkCertificate';
import DeleteBulkCertificateModal from './DeleteBulkCertificate';
import '../assets/styles/styles.css';

const BulkCertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState('Descending');
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

const [key, setKey] = useState(0); // 🔹 Force UI update

const fetchCertificates = async () => {
  try {
    const response = await axios.get(
      'https://iidglabs.com/api/auth/certificate/get-bulkcertificates'
    );
    setCertificates(response.data.certificates || []); // Ensure fallback to empty array
  } catch (err) {
    console.error('Error fetching certificates:', err);
  }
};

useEffect(() => {
  fetchCertificates();
}, []);
const handleUpload = async () => {
  if (!file) {
    alert('Please select a file to upload.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      'http://178.248.112.8:8080/auth/certificate/upload-csv',
      formData
    );
  window.location.reload()
    if (response.status === 200 && response.data?.message?.includes("successful")) {
      alert(`Upload successful!\nInserted: ${response.data.inserted || 0}\nSkipped: ${response.data.skipped || 0}`);

      setFile(null); // Clear file input

      // 🔹 Force a full page reload
    
        window.location.reload();
      // Small delay to ensure alert is closed first

    } else {
      alert(response.data?.message || 'Upload failed. Please try again.');
    }
  } catch (error) {
    console.error('Upload failed:', error);
    alert(error.response?.data?.message || 'An error occurred.All entries are duplicates');
  }
};
  
  




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const handleSelectCertificate = (id) => {
    setSelectedCertificates((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((certId) => certId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = async () => {
    toggleModal();
    try {
      await Promise.all(
        selectedCertificates.map((id) =>
          axios.delete(`http://178.248.112.8:8080/auth/certificate/bulk-certificates/${id}`)
        )
      );

      setCertificates((prev) =>
        prev.filter((cert) => !selectedCertificates.includes(cert._id))
      );
      setSelectedCertificates([]);
    } catch (error) {
      console.error('Failed to delete certificates', error);
    }
  };

  const handleSortClick = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    setShowSortDropdown(false);
  };

  const sortedCertificates = certificates
    .filter((cert) =>
      cert.certificatenum.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'Ascending'
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <>
      <div className='px-16 max-xl:px-8'>
        <div className='flex justify-between'>
          <input
            placeholder='Search Certificates'
            className='bg-[#F2F4F7] py-3 w-[30%] pl-5 placeholder:font-urban text-[1rem] rounded-[4px] outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='border-[#99A8BF] border-b-[1px] my-5'></div>

        <div>
          <div className='flex justify-between items-center'>
            <div className='font-urban text-[#33517F] font-bold text-[1.3rem]'>
              Bulk Certificates
            </div>
            <div className='flex gap-x-2'>
              <input
                type='file'
                accept='.csv'
                onChange={handleFileChange}
                className='border px-3 py-2 rounded'
              />
              <button
                onClick={handleUpload}
                className='bg-[#33517F] text-[white] px-4 py-2 rounded'
              >
                Upload CSV
              </button>
            </div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <div className='font-urban flex text-[#33517F] text-[15px]'>
              <div>Sort by:</div>
              <button
                onClick={handleSortClick}
                className='flex items-center font-bold ml-3 px-2 py-1 -mt-1'
              >
                Date
                 <img src={arrow} alt='arrow' width={10} className='ml-2' />
              </button>
            </div>
            <button
              onClick={toggleModal}
              disabled={selectedCertificates.length === 0}
              className='bg-[#d1171a] flex items-center py-[5px] px-3 rounded-[4px] disabled:bg-gray-400'
            >
              <img src={trash} alt='trash' />
              <div className='text-[#ffffff] font-urban font-bold pl-2 text-[1rem]'>
                Delete
              </div>
            </button>
          </div>

          {showSortDropdown && (
            <div className='relative mt-0 ml-10'>
              <div className='absolute left-0 bg-white border border-gray-300 font-urban text-[0.9rem] text-[#33517F] rounded shadow-md'>
                <button
                  onClick={() => handleSortOrderChange('Ascending')}
                  className={`block px-4 py-0.5 text-left w-full ${sortOrder === 'Ascending' ? 'bg-gray-100' : ''
                    }`}
                >
                  Ascending
                </button>
                <button
                  onClick={() => handleSortOrderChange('Descending')}
                  className={`block px-4 py-0.5 text-left w-full ${sortOrder === 'Descending' ? 'bg-gray-100' : ''
                    }`}
                >
                  Descending
                </button>
              </div>
            </div>
          )}

          <div className='mt-8 h-[65vh] overflow-y-auto pr-6'>
            {sortedCertificates.map((item, index) => (
              <div key={index}>
                <div className='flex justify-between py-3 px-5 font-urban hover:bg-gray-100 items-center'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={selectedCertificates.includes(item._id)}
                      onChange={() => handleSelectCertificate(item._id)}
                      className='w-[1rem] mr-3'
                    />
                    <div>
                      <div>{item.certificatenum}</div>
                      <div className='text-sm text-gray-500'>
                        {new Date(item.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <ViewBulkCertificate id={item._id} />
                    <EditBulkCertificate id={item._id} />
                    <DeleteBulkCertificateModal id={item._id} />
                  </div>
                </div>
                <div className='border-[#99A8BF] border-b-[1px]'></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && (
  <div className='fixed inset-0 flex items-end justify-center bg-gray-700 bg-opacity-50 z-50 pb-48'>
    <div className='bg-white px-10 py-6 rounded-lg shadow-lg w-96 text-center'>
      <p className='font-bold text-lg mb-4 text-gray-800'>
        Are you sure you want to delete the selected certificates?
      </p>
      <div className='flex justify-center gap-4 mt-4'>
        <button
          onClick={toggleModal}
          className='bg-gray-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-gray-600 transition'>
          Cancel
        </button>
        <button
          onClick={handleDeleteSelected}
          className='bg-[#f71919] text-white px-5 py-2 rounded-md shadow-md hover:bg-[#700000] transition'>
          Delete
        </button>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default BulkCertificatePage;
