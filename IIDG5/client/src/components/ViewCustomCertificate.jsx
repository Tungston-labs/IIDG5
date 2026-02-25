import React ,{ useState, useEffect }from 'react'
import eye from '../assets/images/eye.svg';
import close from '../assets/images/close.svg'
import axios from 'axios';

const ViewCustomCertificate = (props) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
 
    // const [certificate, setCertificate] = useState([]);
    // const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState(null);
 
    // useEffect(() => {
        
    //     axios.get(`http://localhost:8080/auth/certificate/get-certificate/${props.id}`)
            
    //         .then((response) => {
    //             setCertificate(response.data.certificate);
    //             console.log(response.data.certificate);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
            
    // }, [props.id]);
    useEffect(() => {
        const getCertificateData = async () => {
            try {
               
 
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
  return (
    <div>
         <button onClick={toggleModal}>
            <img src={eye} alt='view'/>
        </button>
 
        {modal && (
 
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-[gray] opacity-50"></div>
 
                <div className='z-50 border-black border-[1px] w-[35%] font-urban bg-[#ffffff] max-xl:w-[60%] max-lg:w-[80%] max-md:w-[98%]' style={{ padding: '20px' }}>
                       
                    <div>
                        <div className='flex justify-end  '>
                            <button onClick={toggleModal}>
                                <img src={close} alt='close'/>
                            </button>
                        </div>
                       <div className='w-[25rem]'>
                         {/* stone image */}
                         {existingImage ? (
                            <img
                            src={existingImage}
                            alt='product from backend'
                            className='img mb-3  w-[200rem]'
                            />
                            ) : (
                            <div>No image available</div>
                        )}
                       </div>
 
                        
                    </div>
                    </div>  
            
                   
                
            </div>
        )}
    </div>
  )
}

export default ViewCustomCertificate
