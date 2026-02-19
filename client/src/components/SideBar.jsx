import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/dashlogo.svg';
import dashboard from '../assets/images/dashicon.svg';
import dropdown from '../assets/images/arrow.svg';
import users from '../assets/images/usersicon.svg';
import logoutimg from '../assets/images/logout.svg';
import { logout } from '../Redux/store';

const SideBar = ({ setSelectedComponent }) => {
  const [dash, setDash] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();   
  
  // Get the role from the Redux store
  const role = useSelector((state) => state.auth.role);

  const handleDropdown = () => {
    setDash(!dash);
  };

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem('token');
      dispatch(logout());
      navigate('/login');
    }, 2000);
  };

  return (
    <div className='bg-[#33517F] h-[100vh] grid content-between pt-16 pb-7'>
      <div>
        <div className='flex justify-center pb-28'>
          <img src={logo} alt='logo' width={170} className='max-lg:w-[9rem]'/>
        </div>

        <div className='ml-6'>
          {/* Dashboard */}
          <button 
            className='flex items-center px-5 py-2 hover:bg-[#ffffff4f] hover:rounded-sm w-[90%]' 
            onClick={handleDropdown}
          >
            <img src={dashboard} alt='dashboard icon' className='pr-2'/>
            <div className='text-[#ffffff] font-urban font-bold pr-16'>Dashboard</div>
            <img src={dropdown} alt='dropdown' className={`${dash ? 'rotate-180' : ''}`} />
          </button>

          {dash && (
            <>
              {/* Certificates Button */}
              <button 
                onClick={() => setSelectedComponent('certificates')} 
                className='w-[70%] py-2 text-[#ffffff] mt-2 hover:bg-[#99A8BF] hover:rounded-sm font-urban font-bold ml-10 px-3 text-[0.8rem] text-left'
              >
                Certificates
              </button>
            {/* Custom Certificate Button*/}
            <button 
                onClick={() => setSelectedComponent('customCertificates')} 
                className='w-[70%] py-2 text-[#ffffff] mt-2 hover:bg-[#99A8BF] hover:rounded-sm font-urban font-bold ml-10 px-3 text-[0.8rem] text-left'
              >
                Custom Certificates
              </button>

              {/* Bulk Upload Button */}
              <button 
                onClick={() => setSelectedComponent('bulkCertificates')} 
                className='w-[70%] py-2 text-[#ffffff] mt-2 hover:bg-[#99A8BF] hover:rounded-sm font-urban font-bold ml-10 px-3 text-[0.8rem] text-left'
              >
                Bulk Upload Certificates
              </button>
            </>
          )}

          {/* Users Button (visible only to admin) */}
          {role === "admin" && (
            <button 
              onClick={() => setSelectedComponent('users')}
              className='flex items-center px-5 mt-5 py-2 hover:bg-[#ffffff4f] hover:rounded-sm w-[90%]'
            >
              <img src={users} alt='users icon' className='pr-2'/>
              <div className='text-[#ffffff] font-urban font-bold'>Users</div>
            </button>
          )}
        </div>
      </div>

      <button 
        className='ml-6 flex items-center px-5 mt-5 py-2 hover:bg-[#ffffff4f] hover:rounded-sm w-[82%]'
        onClick={handleLogout}
      >
        <img src={logoutimg} alt='logout icon' className='pr-2'/>
        <div className='text-[#ffffff] font-urban font-bold'>Logout</div>
      </button>
    </div>
  );
};

export default SideBar;
