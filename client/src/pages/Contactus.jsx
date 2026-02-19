import React from 'react'
import contactus from '../assets/images/contactus.svg'
import call from '../assets/images/call.svg'
import email from '../assets/images/email.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Contactus = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://iidglabs.com/api/auth/contact/send-contact-form', formData);
            toast.success('Message sent successfully', {
                position: "top-center",
                autoClose: 2000,
                style: {
                    backgroundColor: "black",
                    color: "white"
                }
            })
            
        } catch (error) {
            console.error("There was an error sending the form data:", error);
            toast.error('Form submission failed', {
                position: "top-center",
                autoClose: 2000,
                style: {
                    backgroundColor: "black",
                    color: "white"
                }
            })
        }
    };
 
    return (
        <div>
           <Navbar />
            <div className="h-[75vh] max-md:h-[50vh] max-lg:h-[55vh] max-xl:h-[70vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${contactus})` }}>
                {/* Your content here */}
                <div className=" text-[white] font-mes text-[5rem] leading-[4.6rem] pl-[7rem] max-md:pl-[3rem] max-md:text-[3rem] max-md:leading-[3.8rem] max-xl:text-[4rem] max-lg:text-[3.8rem]">
                    Contact Us
                </div>
                </div>
                <ToastContainer/>
                <div className='px-24 my-24 flex max-md:flex-col-reverse max-xl:px-14 max-lg:px-10 max-md:px-7'>
                    {/* left side */}
                    <div className='w-[45%] max-md:w-full max-md:mt-16'>
                        {/* contact details */}
                        <div className=' font-mes text-[#33517F] text-[2.2rem] max-xl:text-[1.9rem] mb-4'>Contact details</div>
                        <div className=' max-xl:text-[0.8rem]'>
                            <div className='flex gap-2 mb-4'>
                                <img src={call} alt='img' width={22}/>
                                <p className=' font-urban text-[#33517F]'>+91 79091 67000</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={email} alt='call' width={22}/>
                                <p className=' font-urban text-[#33517F]'>info@iidglabs.com</p>
                            </div>
                        </div>
        
                        {/* our locations */}
                        <div className=' font-mes text-[#33517F] text-[2.2rem] max-xl:text-[1.9rem] mt-8 '>Our Locations</div>
                        <div>
                            <div className='mt-3'>
                                <div className='font-mes text-[#33517F] text-[1.8rem] max-xl:text-[1.6rem]'>India</div>
                                <p className=' font-urban text-[#33517F] text-[1.2rem] max-xl:text-[1rem] max-md:text-[0.9rem]'>Dee Pee Plaza,<br />
                                    Near Naruti Nexa Showroom<br />
                                    2nd Floor, Room No.39/1241B,<br />
                                    Kokkalai, Trissur – 680021
                                </p>
                            </div>
        
                            <div className='mt-8'>
                                <div className='font-mes text-[#33517F] text-[1.8rem] max-xl:text-[1.6rem]'>UAE</div>
                                <p className=' font-urban text-[#33517F] text-[1.2rem] max-xl:text-[1rem] max-md:text-[0.9rem]'>
                                    1401, Garachi Trading Building,<br />
                                    Abu Dhabi, UAE
                                </p>
                            </div>
                            <div className='mt-8'>
                                <div className='font-mes text-[#33517F] text-[1.8rem] max-xl:text-[1.6rem]'>UK </div>
                                <p className=' font-urban text-[#33517F] text-[1.2rem] max-xl:text-[1rem] max-md:text-[0.9rem]'>
                                    WA15 1AR, Ft16, 20A Victoria Road,<br />
                                    Manchester, UK
                                </p>
                            </div>
                        </div>
        
                    </div>
 
                    {/* right side */}
                    <div className='w-[55%] max-lg:w-[65%] max-md:w-full'>
                    <div className='font-urban text-[#33517F] text-[1.4rem] max-xl:text-[1.2rem] max-md:text-[1rem] mb-6'>Fill the form and we shall get back to you</div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex mb-5'>
                            <input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder='First Name*'
                                className=' bg-[#F2F4F7] outline-none py-5 max-xl:py-3 w-[35%] max-xl:w-[50%] pl-5 mr-4 placeholder:font-urban text-[1.1rem] max-xl:text-[1rem] max-md:text-[0.9rem] rounded-[4px]'
                            />
                            <input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder='Last Name*'
                                className=' bg-[#F2F4F7] outline-none py-5 max-xl:py-3 w-[35%] max-xl:w-[50%] pl-5 placeholder:font-urban text-[1.1rem] max-xl:text-[1rem] max-md:text-[0.9rem] rounded-[4px]'
                            />
                        </div>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email*'
                            className=' bg-[#F2F4F7] py-5 outline-none max-xl:py-3 w-[72%] max-xl:w-[100%] pl-5 mr-4 placeholder:font-urban mb-5 text-[1.1rem] max-xl:text-[1rem] max-md:text-[0.9rem] rounded-[4px]'
                        />
                        <input
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder='Phone Number*'
                            className=' bg-[#F2F4F7] py-5 outline-none max-xl:py-3 w-[72%] max-xl:w-[100%] pl-5 mr-4 placeholder:font-urban mb-5 text-[1.1rem] max-xl:text-[1rem] max-md:text-[0.9rem] rounded-[4px]'
                        />
 
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Your Message*'
                            rows={6}
                            className=' bg-[#F2F4F7] outline-none rounded-[4px] py-5 w-[72%] max-xl:w-[100%] pl-5 mr-4 placeholder:font-urban mb-5 text-[1.1rem] max-xl:text-[1rem] max-md:text-[0.9rem]'
                        ></textarea>
                        <div className='w-[72%] max-xl:w-[100%] flex justify-end'>
                            <button type="submit" className='bg-[#33517F] text-[white] font-urban px-5 py-2 rounded-[4px] max-xl:text-[0.9rem] max-md:text-[0.8rem] max-md:w-full'>SUBMIT</button>
                        </div>
                    </form>
                </div>
                </div>
                <Footer />
                </div>
    );
};
 
export default Contactus;








