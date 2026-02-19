import React, { useState } from 'react'
import bgimg from '../assets/images/certificatebg.svg'
import axios from 'axios'
import close from '../assets/images/close.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Certificate = ({setclose}) => {
 
  const [ certificate, setCertificate ] = useState({
    certificatenum : "",
    color : "",
    weight : "",
    shape : "",
    sg : "",
    ri : "",
    hardness : "",
    microscopeob : "",
    conclusion : "",
    image : ""
  })
 
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate(prevState => ({
      ...prevState, [name]: value
    }));
  }
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('certificatenum', certificate.certificatenum);
      formData.append('color', certificate.color);
      formData.append('weight', certificate.weight);
      formData.append('shape', certificate.shape);
      formData.append('sg', certificate.sg);
      formData.append('ri', certificate.ri);
      formData.append('hardness', certificate.hardness);
      formData.append('microscopeob', certificate.microscopeob);
      formData.append('conclusion', certificate.conclusion);
      if (image) {
        formData.append('image', image);
      }
      await axios.post('https://iidglabs.com/api/auth/certificate/create-certificate', formData)
      .then((response)=>{
        console.log(response.data);
        toast.success('Certificate created successfully', {
          position: "top-center",
          autoClose: 2000,
          style: {
            backgroundColor: "black",
            color: "white"
          }
        })
        window.location.reload()
      }).catch((err)=>{
        console.log(err);
        toast.error('Certificate creation Failed', {
          position: "top-center",
          autoClose: 2000,
          style: {
            backgroundColor: "black",
            color: "white"
          }
        })
      })
      
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div className='flex justify-center '>
       <ToastContainer/>
        {/* input field */}
 
        <form onSubmit={handleSubmit} className='flex' >
          <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-cover bg-center flex mt-[8rem] w-[56.4375rem] rounded-sm '>
          <div className='font-urban py-12 px-10 space-y-5 '>
 
 
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
 
            {/* 2************************ Color  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Color</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.color}
                  id='color'
                  type='text'  
                  name='color'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 3************************ Weight  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Weight</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.weight}
                  id='weight'
                  type='text'  
                  name='weight'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 4************************  Shape/Cut ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Shape/Cut</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.shape}
                  id='shape'
                  type='text'  
                  name='shape'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 5************************ S.G.  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">S.G.</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.sg}
                  id='sg'
                  type='text'  
                  name='sg'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 6************************ R.I.  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">R.I.</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.ri}
                  id='ri'
                  type='text'  
                  name='ri'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 7************************ Hardness  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Hardness</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.hardness}
                  id='hardness'
                  type='text'  
                  name='hardness'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 8************************ Microscope OB  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Microscope OB</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.microscopeob}
                  id='microscopeob'
                  type='text'  
                  name='microscopeob'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
 
            {/* 9************************ Conclusion  ***************************** */}
            <div>
              <div className="flex items-center text-[1.1rem] space-x-3">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Conclusion</span>
                <span className='text-[#33517f] font-bold'>:</span>
                <input
                  onChange={handleChange}
                  value={certificate.conclusion}
                  id='conclusion'
                  type='text'  
                  name='conclusion'
                  className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"/>
              </div>
            </div>
            </div>
            {/* image */}
            <div className='font-urban py-8'>
            <div className='flex justify-end mb-3 -mr-10 -mt-5'>
              <button onClick={()=>setclose(true)}>
                <img src={close} alt='close'/>
              </button>
            </div>
 
            {/* image upload */}
            <div>
              <div className="flex items-center text-[1.1rem] pl-14">
                <span className="text-[#33517f] w-[9.8rem] font-bold">Upload Photo</span>
                <label className="bg-[#33517f] text-[white] px-4 py-2 rounded-[10px] cursor-pointer flex items-center shadow-ip text-center
                  text-[1rem] font-bold">Choose file
                <input type="file" className="hidden" onChange={handleImageChange}/>
                </label>
              </div>
              <div className='px-[4rem] py-[0.4rem]'>
                <div className='px-2 py-2 w-[7rem] rounded-[10px] h-[10vh]'>
                  {/* choosed file image will be show here */}
                  {preview && <img src={preview} alt="Preview" /> }
                </div>
              </div>
              {/* upload button  */}
              <div className='mt-[16rem] flex justify-end'>
                <button type='submit' className='bg-[#33517f] text-[white] text-[1.1rem] font-bold px-8 py-2 rounded-[10px] cursor-pointer inline-block '>Upload</button>
              </div>
          
            </div>
 
            
            
          </div>
          </div>
        </form>
        
       
    </div>
  )
}
 
export default Certificate
