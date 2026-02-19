import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import profile from '../assets/images/profile.svg';
import add from '../assets/images/add.svg';
import arrow from '../assets/images/bluearrow.svg';
import trash from '../assets/images/trash.svg';
import axios from 'axios';
import EditCertificate from './EditCertificate';
import DeleteCertificateModal from './DeleteCertificateModa';
import ViewCertificate from './ViewCertificate';
import '../assets/styles/styles.css';

const CertificateList = ({ setCreateCertificate }) => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState('Descending');
  const [modal, setModal] = useState(false);

  // Get the personname from the Redux store
  const personname = useSelector((state) => state.auth.personname);

  const toggleModal = () => {
    setModal(!modal);
  };

  // Fetch  certificates
  useEffect(() => {
    axios.get('https://iidglabs.com/api/auth/certificate/get-certificates')
      .then((response) => {
        setCertificates(response.data.certificates);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSelectCertificate = (id) => {
    setSelectedCertificates(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(certId => certId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    toggleModal();
    Promise.all(
      selectedCertificates.map(id => {
        return axios.delete(`https://iidglabs.com/api/auth/certificate/delete-certificates/${id}`)
          .then(response => {
            console.log(`Certificate with ID ${id} deleted successfully.`);
            return id;
          })
          .catch(err => {
            console.error(`Failed to delete certificate with ID ${id}. Error:`, err);
            return null;
          });
      })
    ).then(deletedIds => {
      const successfulDeletions = deletedIds.filter(id => id !== null);
      setCertificates(prevCertificates =>
        prevCertificates.filter(cert => !successfulDeletions.includes(cert._id))
      );
      setSelectedCertificates([]);
    });
  };

  const handleSortClick = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    setShowSortDropdown(false);
  };

  const sortedCertificates = certificates
    .filter(cert => cert.certificatenum.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'Ascending') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

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
          <div className='flex items-center'>
            <div className='font-urban text-[#33517F] font-bold pr-2 text-[1.2rem]'>Hi, {personname}</div>
            <img src={profile} alt='profile' width={35} />
          </div>
        </div>
        <div className='border-[#99A8BF] border-b-[1px] my-5'></div>

        <div>
          <div className='flex justify-between items-center'>
            <div className='font-urban text-[#33517F] font-bold text-[1.3rem]'>Certificates</div>
            <div className='flex gap-x-2'>
              <button
                onClick={() => setCreateCertificate(true)}
                className='flex items-center bg-[#33517F] py-2 px-3 rounded-[4px]'
              >
                <img src={add} alt='add' />
                <div className='text-[#ffffff] font-urban font-bold pl-2 text-[0.9rem]'>Add new certificate</div>
              </button>
              {/* Note: Upload certificate image button removed here */}
            </div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <div className='font-urban flex text-[#33517F] text-[15px]'>
              <div>Sort by:</div>
              <button onClick={handleSortClick} className='flex items-center font-bold ml-3 px-2 py-1 -mt-1'>
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
              <div className='text-[#ffffff] font-urban font-bold pl-2 text-[1rem]'>Delete</div>
            </button>
          </div>
          {showSortDropdown && (
            <div className='relative mt-0 ml-20'>
              <div className='absolute left-0 bg-[#ffffff] border-[1px] border-[#7e78789a] font-urban text-[0.9rem] text-[#33517F] rounded shadow-md'>
                <button
                  onClick={() => handleSortOrderChange('Ascending')}
                  className={`block px-4 py-2 text-left w-full rounded-t-[4px] ${sortOrder === 'Ascending' ? 'bg-[#F2F4F7]' : ''}`}
                >
                  Ascending
                </button>
                <button
                  onClick={() => handleSortOrderChange('Descending')}
                  className={`block px-4 py-2 text-left w-full rounded-b-[4px] ${sortOrder === 'Descending' ? 'bg-[#F2F4F7]' : ''}`}
                >
                  Descending
                </button>
              </div>
            </div>
          )}

          <div className='mt-8 h-[65vh] overflow-y-auto pr-6' style={{ direction: 'ltr' }}>
            {sortedCertificates.map((item, index) => (
              <div key={index}>
                <div className='flex justify-between py-3 px-5 font-urban hover:bg-[#F2F4F7] items-center'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={selectedCertificates.includes(item._id)}
                      onChange={() => handleSelectCertificate(item._id)}
                      className='w-[1rem] mr-3 checked:bg-[#E39A9B]'
                    />
                    <div>
                      <div>{item.certificatenum}</div>
                      <div className='text-sm text-gray-500'>{new Date(item.createdAt).toLocaleString()}</div>
                    </div>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <ViewCertificate id={item._id} />
                    <EditCertificate id={item._id} />
                    <DeleteCertificateModal id={item._id} />
                  </div>
                </div>

                <div className='border-[#99A8BF] border-b-[1px]'></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-[gray] opacity-50"></div>
          <div className="bg-[white] px-14 py-6 rounded-lg z-20">
            <p className='font-bold text-[15px]'>Are you sure you want to delete the selected certificates?</p>
            <div className='flex justify-center items-center gap-10'>
              <button onClick={toggleModal} className='bg-[#33517f] font-bold text-[white] w-20 rounded h-8 mt-4 hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'>Cancel</button>
              <button onClick={handleDeleteSelected} className='bg-[#b90b0b] ml-2 font-bold text-[white] w-20 rounded h-8 mt-4 hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateList;
