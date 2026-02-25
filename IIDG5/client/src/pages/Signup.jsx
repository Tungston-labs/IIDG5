
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const validateForm = () => {
      if (!username || !email || !password) {
        setError('All fields are required');
        toast.error('All fields are required', {
          position: "top-center",
          autoClose: 2000,
          style: {
            backgroundColor: "black",
            color: "white"
          }
        });
        return false;
      }
      setError('');
      return true;
    };
  
    const handleSignup = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
  
      try {
        const response = await axios.post('http://localhost:3001/auth/admin/adminsignup', {
          username,
          email,
          password,
        });
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
          style: {
            backgroundColor: "black",
            color: "white"
          }
        });
        navigate('/login');
      } catch (error) {
        console.error(error);
        setError('Signup failed. Please try again.');
        toast.error('Signup failed. Please try again.', {
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
    <div className="min-h-screen flex items-center justify-center bg-grad">
      <ToastContainer/>
      <div className="bg-[white] p-8 rounded-[48px] shadow-btn max-w-md w-full mt-8">
        <h2 className="text-[2rem] font-mes font-bold mb-6 text-center tracking-wide text-[#030303]">Signup</h2>
        <form className='font-urban' onSubmit={handleSignup}>
          <div className="mb-5">
            <input
              type="text"
              id="first-name"
              placeholder='User Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block placeholder:text-[#a9a9a9] text-[1.2rem] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block placeholder:text-[#a9a9a9] text-[1.2rem] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block placeholder:text-[#a9a9a9] text-[1.2rem] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
            />
          </div>
          {error && <p className="text-[#b41313] text-center racking-wide  text-sm">*{error}</p>} {/* Error message in red */}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-5 rounded-full shadow-btn text-[1rem] font-bold text-[white] bg-grad active:scale-95 transition transform duration-150 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-[#a9a9a9] tracking-wide">
          Already have an account? <Link to="/login" className="text-[#030303] font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
