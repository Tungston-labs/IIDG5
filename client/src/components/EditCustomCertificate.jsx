
import React, { useState, useEffect } from 'react';
import bgimg from '../assets/images/certificatebg.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../assets/images/edit.svg';
import close from '../assets/images/close.svg'

const EditCustomCertificate = (props) => {
    const [modal, setModal] = useState(false);
    const [certificate, setCertificate] = useState({
        certificatenum: "",
        color: "",
        weight: "",
        shape: "",
        sg: "",
        ri: "",
        hardness: "",
        microscopeob: "",
        conclusion: ""
    });
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState(null);
    // const [preview, setPreview] = useState(null);
 
    const toggleModal = () => {
        setModal((prev) => !prev);
    };
 
    useEffect(() => {
        const getCertificateData = async () => {
            try {
                const response = await axios.get(`https://iidglabs.com/api/auth/certificate/get-customcertificate/${props.id}`);
                const data = response.data.certificate;
 
                setCertificate({
                    certificatenum: data.certificatenum || "",
                    
                });
 
                // Fetch the existing image from the server
                const imageResponse = await axios.get(`https://iidglabs.com/api/auth/certificate/certificate-photo/${props.id}`, {
                    responseType: 'blob', // Fetch the image as a blob
                });
                const imageUrl = URL.createObjectURL(imageResponse.data);
                setExistingImage(imageUrl);
 
                    // if (data.image) {
                    //     setExistingImage(`data:${data.image.contentType};base64,${Buffer.from(data.image.data).toString('base64')}`);
                    // }
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            }
        };
 
        if (modal) getCertificateData();
    }, [modal, props.id]);
 
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setCertificate((prevCertificate) => ({
            ...prevCertificate,
            [name]: value,
        }));
    };
 
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setImage(file);
    //         setPreview(URL.createObjectURL(file));
    //     }
    // };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        const formData = new FormData();
        for (const key in certificate) {
            formData.append(key, certificate[key]);
        }
        image&&formData.append('image', image);
   
        console.log(image)
 
        try {
            await axios.put(`https://iidglabs.com/api/auth/certificate/update-customcertificate/${props.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Certificate updated successfully');
            toggleModal();
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    };
  return (
      <div>
                <ToastContainer />
                <button onClick={toggleModal} className="px-6">
                    <img src={edit} alt="edit" />
                </button>
     
                {modal && (
                    <div className="fixed inset-0 flex items-center justify-center z-10">
                        <div className="absolute inset-0 bg-[gray] opacity-50"></div>
                        <form onSubmit={handleSubmit} className="flex z-50 mb-[8rem]">
                            <div
                                style={{ backgroundImage: `url(${bgimg})` }}
                                className="bg-cover bg-center flex mt-[8rem]  rounded-sm "
                            >
                                <div className="font-urban py-12 px-10 space-y-5">
                                    {/* Certificate No */}
                                    <div>
                                        <div className="flex items-center text-[1.1rem] space-x-3">
                                            <span className="text-[#33517f] w-[9.8rem] font-bold">Certificate No</span>
                                            <span className='text-[#33517f] font-bold'>:</span>
                                            <input
                                                onChange={handleFieldChange}
                                                value={certificate.certificatenum}
                                                id='certificatenum'
                                                type='text'  
                                                name='certificatenum'
                                                className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                            />
                                        </div>
                                    </div>

                                     {/* Upload Photo */}
                                     <div>
                                        <div className="flex items-center text-[1.1rem] ">
                                            <span className="text-[#33517f] w-[9.8rem] font-bold">Upload Photo</span>
                                            <label className="bg-[#33517f] text-[white] px-4 py-2 rounded-[10px] cursor-pointer flex items-center shadow-ip text-center text-[1rem] font-bold">
                                                {/* Choose file
                                                <input type="file" className="hidden"  /> */}
                                                {image? image.name : 'Choose file'}
                                        <input
                                            type='file'
                                            name="image"
                                            accept='image/*'
                                            onChange={(e) => setImage(e.target.files[0])}
                                            hidden
                                        />
                                            </label>
                                        </div>
                                        <div className='px-[4rem] py-[0.4rem]'>
                                        <div className='px-2 py-2 w-[22rem] rounded-[10px]'>
                                                {image ? (
                                                    <div className='text-center'>
                                                        <img
                                                            src={URL.createObjectURL(image)}
                                                            alt='product'
                                                            height={'200px'}
                                                            className='img img-responsive'
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className='text-center'>
                                                        {existingImage ? (
                                                            <img
                                                                src={existingImage}
                                                                alt='product from backend'
                                                                height={100}
                                                                className='img img-responsive'
                                                            />
                                                        ) : (
                                                            <div>No image available</div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
                                    </div>
     
                                    {/* Submit Button */}
                                    <div className='flex justify-center'>
                                        <button type='submit' className='bg-[#33517f] text-[white] text-[1.1rem] font-bold px-8 py-2 rounded-[10px] cursor-pointer inline-block'>
                                            Update
                                        </button>
                                    </div>
                                   
                                </div>
     
                                <div className="font-urban py-8">
                                    {/* close button */}
                                    <div className='flex justify-end mb-3 mr-10'>
                                        <button onClick={toggleModal}>
                                            <img src={close} alt='close'/>
                                        </button>
                                    </div>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
  )
}

export default EditCustomCertificate
