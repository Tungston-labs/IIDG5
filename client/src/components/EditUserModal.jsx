import React, { useState, useEffect } from 'react';
import bgimg from '../assets/images/certificatebg.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../assets/images/edit.svg';
import close from '../assets/images/close.svg'
 
const EditUserModal = (props) => {
 
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    const [employee, setEmployee] = useState({
        username: "",
        email: "",
        password: ""
      })
 
      useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`https://iidglabs.com/api/auth/admin/get-user/${props.id}`);
                const data = response.data;
    
                if (data) {
                    setEmployee({
                        username: data.username || "",
                        email: data.email || "",
                        password: ""  
                    });
                } else {
                    console.log('User data is undefined');
                    toast.error('Failed to fetch user data');
                }
            } catch (error) {
                console.log('Error in fetching the user\'s data:', error);
                toast.error('Failed to fetch user data');
            }
        };
        if (modal) getUserData();
    }, [modal, props.id]);
    
    
    
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmplosetEmployee) => ({
            ...prevEmplosetEmployee,
            [name]: value,
        }));
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        const formData = new FormData();
        for (const key in employee) {
            formData.append(key, employee[key]);
        }
        
        try {
            const token = localStorage.getItem('authToken')
            await axios.put(`https://iidglabs.com/api/auth/admin/edit-user/${props.id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
                },
            });
            toast.success('userupdated successfully');
            toggleModal();
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    };
    
    return (
        <div>
            <ToastContainer />
            <button onClick={toggleModal} className="px-6">
                <img src={edit} alt="edit" />
            </button>
 
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <ToastContainer/>
                    <div className="absolute inset-0 bg-[gray] opacity-50"></div>
                    <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-cover z-50 bg-center mt-[1rem] w-[56.4375rem] py-10 px-8 rounded-sm'>
                        <div className='flex justify-end mb-3 -mr-10 -mt-5 w-full'>
                            <button onClick={toggleModal} >
                                <img src={close} alt='close' />
                            </button>
                        </div>
                        <div className=' font-urban'>
                            <div className="flex items-center text-[1.1rem] space-x-3 w-[50%]">
                                <span className="text-[#33517f] w-[9.8rem] font-bold">Username</span>
                                <span className='text-[#33517f] font-bold'>:</span>
                                <input
                                    onChange={handleFieldChange}  
                                    value={employee.username}                                  
                                    id='username'
                                    name='username'
                                    className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none" type="text" />
                            </div>
 
                            <div className="flex items-center text-[1.1rem] space-x-3 mt-6 w-[50%]">
                                <span className="text-[#33517f] w-[9.8rem] font-bold">Email</span>
                                <span className='text-[#33517f] font-bold'>:</span>
                                <input
                                    onChange={handleFieldChange}
                                    value={employee.email}                                    
                                    id='email'
                                    name='email'
                                    className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none" type="text" />
                            </div>
 
                            <div className="flex items-center text-[1.1rem] space-x-3 mt-6 w-[50%]">
                                <span className="text-[#33517f] w-[9.8rem] font-bold">Password</span>
                                <span className='text-[#33517f] font-bold'>:</span>
                                <input
                                    onChange={handleFieldChange}    
                                    value={employee.password}                                
                                    id='password'
                                    name='password'
                                    className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none" type="text" />
                            </div>
 
 
                            <div className="flex items-center text-[1.1rem] space-x-3 mt-6">
                                <span className="text-[#33517f] w-[9.8rem] font-bold">Role</span>
                                <span className='text-[#33517f] font-bold '>:</span>
 
                                <div className='bg-[#33517F]  text-[0.9rem] font-bold px-8 py-1 rounded-lg text-[#ffffff]'>Employee</div>
                            </div>
                        </div>
 
                        <div className='mt-10 flex justify-end'>
                            <button type='submit'  onClick={handleSubmit} className='bg-[#33517F] text-[0.9rem] font-bold px-6 py-1 rounded-lg text-[#ffffff]'>Update User</button>
                        </div>
 
                    </div>
                </div>
            )}
        </div>
    );
};
 
export default EditUserModal;
