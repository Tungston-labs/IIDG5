import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import profile from '../assets/images/profile.svg';
import add from '../assets/images/add.svg';
import axios from 'axios';
import DeleteUsersModal from './DeleteUsersModal';
import EditUserModal from './EditUserModal';
 
const UsersList = ({ setAddUser }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // New state for the search query

  // Get the personname from the Redux store
  const personname = useSelector((state) => state.auth.personname);

 
  useEffect(() => {
    // Fetch users data when the component is mounted
    axios.get('https://iidglabs.com/api/auth/admin/get-all-users')
      .then((response) => {
        setUsers(response.data); // Ensure users is set as an array
      })
      .catch((error) => console.log(error));
  }, []);
 
    // Filter certificates based on the search query
  const filteredUser = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className='px-16'>
      <div className='flex justify-between'>
        <input
          placeholder='Search User'
          className='bg-[#F2F4F7] py-3 w-[30%] pl-5 placeholder:font-urban text-[1rem] rounded-[4px] outline-none'
          value={searchQuery} // Bind the input value to searchQuery
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
        />
        <div className='flex items-center'>
          <div className='font-urban text-[#33517F] font-bold pr-2 text-[1.2rem]'>Hi, {personname}</div>
          <img src={profile} alt='profile' width={35} />
        </div>
      </div>
      <div className='border-[#99A8BF] border-b-[1px] my-5'></div>
 
      <div>
        <div className='flex justify-between items-center'>
          <div className='font-urban text-[#33517F] font-bold text-[1.3rem]'>User Profiles</div>
          <button
            onClick={() => setAddUser(true)}
            className='flex items-center bg-[#33517F] py-2 px-3 rounded-[4px]'
          >
            <img src={add} alt='add' />
            <div className='text-[#ffffff] font-urban font-bold pl-2 text-[1rem]'>Add new user</div>
          </button>
        </div>
 
        {/* <div className='mt-3 flex justify-between items-center'>
          <div className='font-urban flex text-[#33517F] text-[15px]'>
            <div>Sort by:</div>
            <div className='flex font-bold ml-3'>
              Roles
              <img src={arrow} alt='arrow' width={10} className='ml-2' />
            </div>
          </div>
        </div> */}
 
        <div className='mt-8'>
          {filteredUser.slice().reverse().map((user) => (
            <div key={user.id}>
              <div className='flex justify-between py-3 px-5 hover:bg-[#F2F4F7]'>
                <div className='flex'>
                  {/* <input type='checkbox' className='w-[1rem] mr-3 checked:bg-[#E39A9B]' /> */}
                  <div>{user.username}</div>
                </div>
                <div className='flex space-x-5'>
                  <div className='font-urban text-[#33517F] font-bold'>
                    {user.role}
                  </div>
 
                  {/* edit button */}
                  <EditUserModal id={user._id}/>
 
                  {/* delete button */}
                  <DeleteUsersModal id={user._id}/>
 
                </div>
              </div>
              <div className='border-[#99A8BF] border-b-[1px]'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default UsersList;





