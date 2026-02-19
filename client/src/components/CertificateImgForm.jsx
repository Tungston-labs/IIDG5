import React ,{ useState }from 'react'
import bgimg from '../assets/images/certificatebg.svg'
import close from '../assets/images/close.svg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const CertificateImgForm = ({setcloseimg}) => {
  const [ certificate, setCertificate ] = useState({
    certificatenum : "",
    image : ""
  })

    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          setPreview(URL.createObjectURL(file));
        }
      };

    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate(prevState => ({
      ...prevState, [name]: value
    }));
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('certificatenum', certificate.certificatenum);
  if (image) {
    formData.append('image', image);                  
  }

  try {
    const response = await axios.post(
      'https://iidglabs.com/api/auth/certificate/create-certificateimg',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, 
      }
    );

    console.log(response.data);
    toast.success('Certificate created successfully', {
      position: "top-center",
      autoClose: 2000,
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);

  } catch (err) {
    console.error(err);
    toast.error('Certificate creation failed', {
      position: "top-center",
      autoClose: 2000,
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });
  }
};

  return (
    <div className='flex justify-center '>
    <ToastContainer/>
    <form onSubmit={handleSubmit} className='flex' >
        <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-cover bg-center flex mt-[8rem] w-[45rem] rounded-sm '>
            <div className='font-urban py-12 px-10 '>
                
                {/* 1************************ Certificate No  ***************************** */}
                <div>
                <div className="flex items-center text-[1.1rem] space-x-3">
                    <span className="text-[#33517f] w-[9.8rem] font-bold">Certificate No</span>
                    <span className='text-[#33517f] font-bold'>:</span>
                    <input
                    onChange={handleChange}
                    value={certificate.certificatenum}
                    id='certificatenum'
                    type='text'  
                    name='certificatenum'
                    className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
                </div>
                </div>

                 {/* image upload */}
                <div className='mt-10'>
                <div className="flex items-center text-[1.1rem]">
                    <span className="text-[#33517f] w-[9.8rem] font-bold">Upload certificate</span>
                    <label className="bg-[#33517f] text-[white] px-4 py-2 rounded-[10px] cursor-pointer flex items-center shadow-ip text-center
                    text-[1rem] font-bold">Choose file
                    <input type="file" className="hidden" onChange={handleImageChange}/>
                   
                    </label>
                </div>
                <div className='px-[4rem] py-[0.4rem] mt-10'>
                    <div className='px-2 py-2 rounded-[10px]'>
                    {/* choosed file image will be show here */}
                    {preview && <img src={preview} alt="Preview" /> }
                    </div>
                </div>
                {/* upload button  */}
                <div className='mt-[5rem] flex justify-end'>
                    <button type='submit' className='bg-[#33517f] text-[white] text-[1.1rem] font-bold px-8 py-2 rounded-[10px] cursor-pointer inline-block '>Upload</button>
                </div>
            
                </div>
            </div>

            {/* image */}
            {/* <div className='font-urban py-8'> */}
            <div className='flex justify-end items-start w-full m-7 '>
              {/* <button onClick={()=>setclose(true)}> */}
              <button type='button' onClick={()=>setcloseimg(true)}>
                <img src={close} alt='close'/>
              </button>
            </div>
 
        </div>
    </form>
    </div>
  )
}

export default CertificateImgForm
