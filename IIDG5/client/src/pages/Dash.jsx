import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import CertificateList from '../components/CertificateList';
import UsersList from '../components/UsersList';
import Certificate from '../components/Certificate';
import AddUser from '../components/AddUser';
import CertificateImgForm from '../components/CertificateImgForm';
import CustomCertificateList from '../components/CustomCertificateList';
import BulkCertificateList from '../components/BulkCertificateList';
const Dash = () => {
  const [selectedComponent, setSelectedComponent] = useState('certificates');
  const [createCertificate, setCreateCertificate] = useState(false);
  const [imageCertificate, setImageCertificate] = useState(false);
  const [close, setClose] = useState(false);
  const [closeImg, setCloseImg] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [userClose, setUserClose] = useState(false);
  
  useEffect(() => {
    if (close) {
      setCreateCertificate(false);
      setClose(false);
    }
  }, [close]);

  useEffect(() => {
    if (closeImg) {
      setImageCertificate(false);
      setCloseImg(false);
    }
  }, [closeImg]);

  useEffect(() => {
    if (userClose) {
      setAddUser(false);
      setUserClose(false);
    }
  }, [userClose]);
 
  return (
    <div className='relative'>
      <div className='flex'>
        <div className='w-[20%] max-xl:w-[30%]'>
          <SideBar setSelectedComponent={setSelectedComponent} />
        </div>
        <div className='pt-10 w-[80%]'>
          {selectedComponent === 'certificates' && (
            <CertificateList setCreateCertificate={setCreateCertificate} />
          )}
          {selectedComponent === 'users' && <UsersList setAddUser={setAddUser} />}
         
          {selectedComponent === 'customCertificates' && (
            <CustomCertificateList setImageCertificate={setImageCertificate} />

          )}
            {selectedComponent === 'bulkCertificates' && (
            <BulkCertificateList setImageCertificate={setImageCertificate} />
            
          )}
        </div>
      </div>
      
      {imageCertificate && (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-[#1c212742]'>
          <CertificateImgForm setcloseimg={setCloseImg}/>
        </div>
      )}
      {createCertificate && (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-[#1c212742]'>
          <Certificate setclose={setClose}/>
        </div>
      )}

      
      {addUser && (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-[#1c212742]'>
          <AddUser setUserClose={setUserClose}/>
        </div>
      )}
    </div>
  );
};

export default Dash;
