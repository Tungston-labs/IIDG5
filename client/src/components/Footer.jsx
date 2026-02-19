import React from 'react'
import footlogo from '../assets/images/footlogo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='w-full bg-[#f2f4f7] px-24 pb-8 max-xl:px-16 max-lg:px-10  '>
            <div className='py-[3.4rem] max-2xl:py-6'>
                <div className='flex justify-between max-lg:flex-col-reverse'>
                    {/* ------------------- Aboutus ------------------- */}
                    <div>
                        <p className='font-mes text-[2.1rem] text-[#33517f] py-5 max-md:text-[1.8rem]'>About Us</p>
                        <img src={footlogo} alt='navbarlogo' className=' max-md:w-[6rem]' />
                        <p className='text-[#33517f] text-[1rem] font-urban py-6 w-[22rem] max-md:w-[16rem] max-md:text-[0.9rem]'>
                            IIDG provides Diamond Grading, Diamond testing,
                            and Consultation for Diamonds and Gemstones
                            with International standards at our Gem
                            Testing Lab and Diamond Testing Lab.
                        </p>
                    </div>
                    {/* ------------------- quicklinks ------------------- */}
                    <div className='flex justify-between w-[58%] max-lg:w-[100%]'>
                        <div>
                            <p className='font-mes text-[2.1rem] text-[#33517f] py-5 max-md:text-[1.8rem] '>Quick Links</p>
                            <ul className='font-urban text-[1rem] text-[#33517f] px-2 space-y-3 max-md:text-[0.9rem]'>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/verify-report'><li>Verify Report</li></Link>
                                <Link to='/facility'><li>Facilities</li></Link>
                                <Link to='/gemknowledge'><li>Gem Knowledge</li></Link>
                                <Link to='/contactus'><li>Contact</li></Link>
                            </ul>
                        </div>
                        {/* ------------------- getintouch ------------------- */}
                        <div className=' max-md:-mr-4'>
                            <p className='font-mes text-[2.1rem] text-[#33517f] py-5 max-md:text-[1.8rem]'>Get in Touch</p>
                            <p className='text-[#33517f] px-2 text-[1rem] font-urban pb-1 max-md:text-[0.9rem]'>
                                Dee Pee Plaza <br />
                                Near Maruti Nexa Showroom 2nd Floor, <br />
                                Room No. 39/1241B, Kokkalai, Thrissur – <br />
                                680021
                            </p>
                            <p className='text-[#33517f] text-[1rem] px-2 font-urban py-2 max-md:text-[0.9rem]'>+91 79091 67000</p>
                            <p className='text-[#33517f] text-[1rem] px-2 font-urban py-2 max-md:text-[0.9rem]'>info@iidglabs.com</p>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <div className='text-[#33517f] text-[1rem] font-urban max-md:text-[0.9rem] '>© Copyright 2024,  Designed by
                        <a href="https://tungstonlabs.com/" className='text-[#33517f] font-bold'> Tungston Labs</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer