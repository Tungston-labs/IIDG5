import React, { useState, useEffect } from 'react';
import eye from '../assets/images/eye.svg';
import logo from '../assets/images/footlogo.svg'
import QRCode from 'qrcode.react';
import close from '../assets/images/close.svg'
import axios from 'axios';
// import { useParams } from 'react-router-dom';
 
const ViewBulkCertificate = (props) => {
 
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
 
    const [certificates, setCertificate] = useState([]);
    const [existingImage, setExistingImage] = useState(null);
 
 
    useEffect(() => {
        const getCertificateData = async () => {
            try {
                const response = await axios.get(`https://iidglabs.com/api/auth/bulk-cert/bulk-certificates/${props.id}`);
                const data = response.data.certificate;
 
                setCertificate({
                    certificatenum: data.certificatenum || "",
                    color: data.color || "",
                    weight: data.weight || "",
                    shape: data.shape || "",
                    sg: data.sg || "",
                    ri: data.ri || "",
                    hardness: data.hardness || "",
                    microscopeob: data.microscopeob || "",
                    conclusion: data.conclusion || ""
                });
 
                // Fetch the existing image from the server
                const imageResponse = await axios.get(`https://iidglabs.com/api/auth/bulk-cert/bulk-certificate-photo/${props.id}`, {
                    responseType: 'blob', // Fetch the image as a blob
                });
                const imageUrl = URL.createObjectURL(imageResponse.data);
                setExistingImage(imageUrl);
 
                  
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            }
        };
 
        if (modal) getCertificateData();
    }, [modal, props.id]);
 
        const certificateUrl = `https://iidglabs.com/verify-report?cert=${certificates.certificatenum}`

  return (
    <>
        <button onClick={toggleModal}>
            <img src={eye} alt='view'/>
        </button>
 
        {modal && (
 
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-[gray] opacity-50"></div>
 
                <div className='z-50 border-black border-[1px] w-[40%] font-urban bg-[#ffffff] max-xl:w-[60%] max-lg:w-[80%] max-md:w-[98%]' style={{ padding: '20px' }}>
                    
                    <div className='flex justify-between items-center '>
                        <img src={logo} width={180} alt='logo' className=' max-md:w-[9rem]'/>   
                    </div>
            
                    <div className='mt-2 '>
                        <div className=' border-b-[2px] border-[#33517F] w-[50%] max-md:w-[80%] mb-[2px]'></div>
                        <div className='text-[0.9rem] pl-3 font-bold bg-[#33517F] text-[#ffffff] w-[50%] pb-2 max-md:w-[80%] max-md:text-[0.7rem]'>SPECIES ANALYSIS REPORT</div>
                        <div className=' border-b-[2px] border-[#33517F] w-[50%] mt-[2px] max-md:w-[80%]'></div>
                    </div>
            
                    <div className='flex'>
                        <div className=' font-bold text-[0.9rem] mt-2 w-[85%] max-md:text-[0.6rem] '>
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>CERTIFICATE NO</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.certificatenum}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>COLOUR</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.color}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>WEIGHT</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.weight}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>SHAPE/CUT</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.shape}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>S.G</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.sg}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>R.I</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.ri}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>HARDNESS</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.hardness}
                            </div>
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>MICROSCOPE OB</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.microscopeob}
                            </div>  
 
                            <div className='flex'>
                                <div className='w-[30%] max-md:w-[40%]'>CONCLUSION</div>
                                <div className='w-[5%]'>:</div>
                                {certificates.conclusion}
                            </div>            
 
                        </div>
                    <div>
                        <div className='flex justify-end mr-2 -mt-[6rem]'>
                            <button onClick={toggleModal}>
                                <img src={close} alt='close'/>
                            </button>
                        </div>
                       <div className='w-[5rem]'>
                         {/* stone image */}
                         {existingImage ? (
                            <img
                            src={existingImage}
                            alt='product from backend'
                            height={100}
                            className='img img-responsive mb-8 mt-14 max-md:w-[3rem]'
                            />
                            ) : (
                            <div>No image available</div>
                        )}
                       </div>
 
                        <QRCode
                        value={certificateUrl}
                        size={70}
                        level="H"
                        />
                    </div>
                    </div>  
            
                    <div>
                        <div className=' border-b-[1px] border-[#000000] mt-2'></div>
                        <div className='flex justify-between mt-1 max-md:flex-col'>
                        <div className='text-[0.8rem] max-md:text-[0.6rem]'>IDG GLOBAL : INDIA ■ ISRAEL ■ UK ■ ABU DHABI </div>
                        <i className='text-[0.7rem] max-md:text-[0.5rem]'> for terms and conditions visit www.iidglabs.com</i>
                    </div>
                    
                    </div>
                
                </div>
            </div>
        )}
    </>
  );
};
 
export default ViewBulkCertificate;
