import React, { useEffect, useState } from 'react';
import axios from 'axios'
import deleteicon from '../assets/images/delete.svg';
 
const DeleteCertificateModal = (props) => {
  useEffect(()=>{
    console.log(props);
  } , )
 
    const [modal, setModal] = useState(false);
    // const {productId} = useParams()
 
    const toggleModal = () => {
        setModal(!modal);
    };
 
  //deleting the product
  const handleDelete =()=>{
    try {
        axios.delete(`https://iidglabs.com/api/auth/certificate/delete-certificate/${props.id}`)
        .then((response)=>{
            console.log(response.data)
            window.location.reload()
        })
        .catch((error)=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
  }
 
 
  return (
    <>
 
        {/* product page button */}
      <button onClick={toggleModal}>
        <img src={deleteicon} alt='delete'/>
      </button>
 
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-[gray] opacity-50"></div>
          <div className="bg-[white] px-14 py-6 rounded-lg z-20">
 
            <p className='font-bold text-[15px] '>Are you sure you want to delete?</p>
 
            <div className=' flex justify-center items-center gap-10'>
                <button onClick={toggleModal} className='bg-[#33517f] font-bold text-[white] w-20 rounded h-8 mt-4
                hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'>Cancel</button>
 
                <button onClick={handleDelete} className='bg-[#b90b0b] ml-2 font-bold text-[white] w-20 rounded h-8 mt-4
                hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
 
export default DeleteCertificateModal;
