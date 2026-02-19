
import React, { useState } from 'react';
import navlogo from '../assets/images/navlogo.svg';
import menuIcon from '../assets/images/menu.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownVisible(!aboutDropdownVisible);
  };

  return (
    <>
      <nav className='bg-[white] w-full absolute top-0 flex justify-between items-center max-lg:px-8 max-lg:text-[0.9rem] max-xl:px-12 max-xl:text-[1rem] font-urban text-[1.1rem] px-20 py-4 text-[#33517f] tracking-wide font-medium'>

        {/* ----------------------- Logo Section (Tablet/Mobile only) ----------------------- */}
        <div className='lg:hidden flex items-center'>
          <Link to='/'><img src={navlogo} alt='logo' width={160} className='px-4' /></Link>
        </div>

        {/* ----------------------- First Section (Desktop/Laptop only) ----------------------- */}
        <div className='hidden lg:flex space-x-11 items-center font-urban max-xl:space-x-4 max-lg:space-x-1'>
          <div className='relative'>
            <button className='hover:text-[#EA929A] transition-colors duration-200 flex items-center' onClick={toggleAboutDropdown}>
              <div className='pr-2 max-lg:pr-0'>About Us</div>
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.96004 4.97498L6.70004 8.23498C6.31504 8.61998 5.68504 8.61998 5.30004 8.23498L2.04004 4.97498" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            {aboutDropdownVisible && (
              <div className='absolute top-full mt-2 bg-[white] shadow-lg rounded-lg py-2 z-10'>
                <Link to="/branch" className='block px-4 py-2 hover:bg-gray-100 text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Branches</Link>
                <Link to="/career" className='block px-4 py-2 hover:bg-gray-100 text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Careers</Link>
              </div>
            )}
          </div>
          <Link to="/qualityassurance" className='hover:text-[#EA929A] transition-colors duration-200'>Quality Assurance</Link>
          <Link to="/facility" className='hover:text-[#EA929A] transition-colors duration-200'>Facilities</Link>
        </div>

        {/* ----------------------- Second Section (Logo for Desktop/Laptop) ----------------------- */}
        <div className='hidden lg:flex'>
          <Link to='/'><img src={navlogo} alt='logo' width={160} className='px-4' /></Link>
        </div>

        {/* ----------------------- Third Section (Desktop/Laptop only) ----------------------- */}
        <div className='hidden lg:flex space-x-11 items-center font-urban font-medium max-xl:space-x-4 max-lg:space-x-2'>
          <Link to="/gemknowledge" className='hover:text-[#EA929A] transition-colors duration-200'>Gem Knowledge</Link>
          <Link to="/contactus" className='hover:text-[#EA929A] transition-colors duration-200'>Contact Us</Link>
          <Link to="/verify-report" className='px-8 py-2 max-xl:px-5 rounded-[6px] bg-[#33517f] text-[white]'>Verify Report</Link>
        </div>

        {/* ----------------------- Mobile Menu Icon (Tablet/Mobile only) ----------------------- */}
        <div className='lg:hidden flex items-center ml-auto'>
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src={menuIcon} alt="Menu" className='h-6 w-6' />
          </button>
        </div>
      </nav>

      {/* ----------------------- Mobile Dropdown Menu (Tablet/Mobile only) ----------------------- */}
      {dropdownVisible && (
        <div className='lg:hidden absolute z-50 bg-[white] font-urban top-[3rem] w-full shadow-lg rounded-lg mt-2'>
          <div className='px-4 pt-4 pb-3'>
            <div className='flex flex-col space-y-2'>

              {/* About Us Dropdown for Mobile */}
              <button className='flex items-center gap-2 hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200' onClick={toggleAboutDropdown}>
                <span>About Us</span>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.96004 4.97498L6.70004 8.23498C6.31504 8.61998 5.68504 8.61998 5.30004 8.23498L2.04004 4.97498" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              {aboutDropdownVisible && (
                <div className='flex flex-col pl-4 space-y-2'>
                  <Link to="/branch" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Branches</Link>
                  <Link to="/career" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Careers</Link>
                </div>
              )}

              
              <Link to="/qualityassurance" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Quality Assurance</Link>
              <Link to="/facility" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Facilities</Link>
              <Link to="/gemknowledge" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Gem Knowledge</Link>
              <Link to="/contactus" className='hover:text-[#EA929A] text-[#33517f] tracking-wide font-semibold transition-colors duration-200'>Contact Us</Link>
              <Link to="/verify-report" className='px-8 py-2 mt-2 w-[10rem] rounded-[6px] bg-[#33517f] text-[white]'>Verify Report</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
