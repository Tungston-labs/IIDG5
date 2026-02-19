
import React, { useState, useEffect } from 'react';
import bgimg from '../assets/images/certificatebg.svg';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../assets/images/edit.svg';
import close from '../assets/images/close.svg'
import Swal from 'sweetalert2';

const EditBulkCertificate = (props) => {
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

                const imageResponse = await axios.get(`https://iidglabs.com/api/auth/bulk-cert/bulk-certificate-photo/${props.id}`, {
                    responseType: 'blob', 
                });

                if (imageResponse.data) {
                    const imageUrl = URL.createObjectURL(imageResponse.data);
                    setExistingImage(imageUrl);
                }

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setExistingImage(URL.createObjectURL(file)); 
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in certificate) {
            formData.append(key, certificate[key]);
        }
        image && formData.append('image', image);

        console.log(image)

        try {
            await axios.put(`https://iidglabs.com/api/auth/bulk-cert/update-bulkcertificate/${props.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
      Swal.fire({
  icon: 'success',
  title: 'Updated!',
  text: 'Certificate updated successfully',
  confirmButtonColor: '#33517f',
}).then(() => {
  toggleModal();
  props.onUpdateSuccess?.({
    _id: props.id,
    ...certificate,
  });
});

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <button onClick={toggleModal} className="px-6">
                <img src={edit} alt="edit" />
            </button>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-[gray] opacity-50"></div>
                    <form onSubmit={handleSubmit} className="flex z-50 mb-[8rem]">
                        <div
                            style={{ backgroundImage: `url(${bgimg})` }}
                            className="bg-cover bg-center flex mt-[8rem] w-[56.4375rem] rounded-sm "
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
                                {/* Color */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Color</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.color}
                                            id='color'
                                            type='text'
                                            name='color'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* Weight */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Weight</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.weight}
                                            id='weight'
                                            type='text'
                                            name='weight'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* Shape/Cut */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Shape/Cut</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.shape}
                                            id='shape'
                                            type='text'
                                            name='shape'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* S.G. */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">S.G.</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.sg}
                                            id='sg'
                                            type='text'
                                            name='sg'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* R.I. */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">R.I.</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.ri}
                                            id='ri'
                                            type='text'
                                            name='ri'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* Hardness */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Hardness</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.hardness}
                                            id='hardness'
                                            type='text'
                                            name='hardness'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* Microscope OB */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Microscope OB</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.microscopeob}
                                            id='microscopeob'
                                            type='text'
                                            name='microscopeob'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>
                                {/* Conclusion */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] space-x-3">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Conclusion</span>
                                        <span className='text-[#33517f] font-bold'>:</span>
                                        <input
                                            onChange={handleFieldChange}
                                            value={certificate.conclusion}
                                            id='conclusion'
                                            type='text'
                                            name='conclusion'
                                            className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="font-urban py-8">
                                {/* close button */}
                                <div className='flex justify-end mb-3 -mr-10 -mt-5'>
                                    <button onClick={toggleModal}>
                                        <img src={close} alt='close' />
                                    </button>
                                </div>
                                {/* Upload Photo */}
                                <div>
                                    <div className="flex items-center text-[1.1rem] pl-14">
                                        <span className="text-[#33517f] w-[9.8rem] font-bold">Upload Photo</span>
                                        <label className="bg-[#33517f] text-[white] px-4 py-2 rounded-[10px] cursor-pointer flex items-center shadow-ip text-center text-[1rem] font-bold">
                                            {/* Choose file
                                            <input type="file" className="hidden"  /> */}
                                            {image ? image.name : 'Choose file'}
                                            <input
                                                type='file'
                                                name="image"
                                                accept='image/*'
                                                onChange={handleImageChange}
                                                hidden
                                            />

                                        </label>

                                    </div>
                                    <div className='px-[4rem] py-[0.4rem]'>
                                        <div className='px-2 py-2 w-[7rem] rounded-[10px] h-[10vh]'>
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
                                                <div className='px-2 py-2 w-[7rem] rounded-[10px] h-[10vh]'>
                                                {existingImage ? (
                                                    <img src={existingImage} alt='Uploaded' height={100} className='img img-responsive' />
                                                ) : (
                                                    <div>No image available</div>
                                                )}
                                            </div>
                                            
                                            )}
                                        </div>

                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className='mt-[16rem] flex justify-end'>
                                    <button type='submit' className='bg-[#33517f] text-[white] text-[1.1rem] font-bold px-8 py-2 rounded-[10px] cursor-pointer inline-block'>
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditBulkCertificate;









