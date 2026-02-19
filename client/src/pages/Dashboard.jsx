// import React, { useState } from 'react';
// import logo from '../assets/images/dashlogo.png';
// import { useDispatch } from 'react-redux';
// import { logout } from '../Redux/store'; // Import the logout action
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [menuActive, setMenuActive] = useState('');
//   const dispatch = useDispatch(); 
//   const navigate = useNavigate();

//   const handleMenuActive = (menu) => {
//     setMenuActive(menuActive === menu ? '' : menu);
//   };
//   const handleLogout = () => {
//     dispatch(logout()); // Dispatch the logout action
//     navigate('/login'); // Redirect to the login page
//   };
//   return (
//     <div className="flex min-h-screen bg-lightgrad">
//       {/* Sidebar */}
//       <div className="w-80 text-[white] flex flex-col">
//         <div className="rounded-[32px] bg-[#121212] mt-4 ml-5 shadow-ip h-[97vh]">
//           <div>
//             <img src={logo} alt="logo" className="mx-auto pt-10 w-[12rem]" />
//           </div>

//           <div>
//             <div
//               className={`font-urban font-semibold text-[1.1rem] py-10 `}
//             >
//               {/* menu1 */}
//               <button
//                 className={`flex items-center gap-5 pl-10 py-3 cursor-pointer ${
//                   menuActive === 'certificate'
//                     ? 'bg-[white] text-[#33517f] font-bold rounded-[26px]  w-11/12 mx-auto'
//                     : ''
//                 }`}
//                 onClick={() => handleMenuActive('certificate')}
//               >
//                 <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M26.4001 12.4V18.4C26.4001 24.4 24.0001 26.8 18.0001 26.8H10.8001C4.80015 26.8 2.40015 24.4 2.40015 18.4V11.2C2.40015 5.20005 4.80015 2.80005 10.8001 2.80005H16.8001" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M26.4 12.4H21.6C18 12.4 16.8 11.2 16.8 7.60005V2.80005L26.4 12.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M8.3999 16.0001H15.5999" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M8.3999 20.7999H13.1999" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
//                 Certificate
//               </button>

//               {/* menu2 -- logout functionality*/}
//               <button
//                 className={`flex items-center gap-5 py-3 pl-10 cursor-pointer ${
//                   menuActive === 'logout'
//                     ? 'bg-[white] text-[#33517f] font-bold rounded-[26px]  w-11/12 mx-auto'
//                     : ''
//                 }`}
//                 onClick={handleLogout}
//               >
              
//                 <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10.6799 9.47194C11.0519 5.15194 13.2719 3.38794 18.1319 3.38794H18.2879C23.6519 3.38794 25.7999 5.53594 25.7999 10.8999V18.7239C25.7999 24.0879 23.6519 26.2359 18.2879 26.2359H18.1319C13.3079 26.2359 11.0879 24.4959 10.6919 20.2479" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M2.40015 14.8H17.8561" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M15.1799 10.78L19.1999 14.8L15.1799 18.82" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>

//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow rounded-[32px] bg-[white] my-4 mx-5 shadow-ip">
//         <div className='py-6 bg-[#e5e6eb] mt-5 rounded-[30px] w-[98%] mx-auto'>
//             sample
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import logo from '../assets/images/dashlogo.png';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/store';
import { useNavigate } from 'react-router-dom';
import DashMain from '../components/DashMain'
import BulkCertificatePage from '../components/BulkCertificateList';



const Dashboard = () => {
  const [menuActive, setMenuActive] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // new state to control displaying the BulkUpload component
  const [showBulkUpload, setShowBulkUpload] = useState('');

  const handleMenuActive = (menu) => {
    setMenuActive(menuActive === menu ? '' : menu);
    if (menu === 'bulkUpload') {
      setShowBulkUpload(true);
    } else {
      setShowBulkUpload(false);
    }
  };

  const handleLogout = () => {
    setMenuActive('logout');
    setTimeout(() => {
      localStorage.removeItem('token');
      dispatch(logout());
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-light">
      {/* Sidebar */}
      <div className="w-80 text-white flex flex-col">
        <div className="rounded-[32px] bg-[#33517f] mt-4 ml-5 shadow-btn h-[97vh]">
          <div>
            <img src={logo} alt="logo" className="mx-auto pt-10 w-[12rem]" />
          </div>
          <div className="font-urban font-semibold text-[1.1rem] py-10">
            {/* Certificate Menu */}
            <button
              className={`flex items-center gap-5 pl-10 py-3 cursor-pointer ${
                menuActive === 'certificate'
                  ? 'bg-white text-[#33517f] font-bold rounded-[26px] w-11/12 mx-auto'
                  : ''
              }`}
              onClick={() => handleMenuActive('certificate')}
            >
              Certificate
            </button>
            {/* Bulk Upload Menu */}
            <button
              className={`flex items-center gap-5 pl-10 py-3 cursor-pointer ${
                menuActive === 'bulkUpload'
                  ? 'bg-white text-[#33517f] font-bold rounded-[26px] w-11/12 mx-auto'
                  : ''
              }`}
              onClick={() => handleMenuActive('bulkCertificates')}
            >
              Bulk Upload
            </button>
            {/* Logout Menu */}
            <button
              className={`flex items-center gap-5 py-3 pl-10 cursor-pointer ${
                menuActive === 'logout'
                  ? 'bg-white text-[#33517f] font-bold rounded-[26px] w-11/12 mx-auto'
                  : ''
              }`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow rounded-[32px] bg-white my-4 mx-5 shadow-ip">
        {showBulkUpload ? <BulkCertificatePage /> : <DashMain />}
      </div>
    </div>
  );
};

export default Dashboard;

