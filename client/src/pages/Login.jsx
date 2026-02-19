import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../Redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      setError("Email or password are required");
      toast.error("Email or password are required", {
        position: "top-center",
        autoClose: 2000,
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://iidglabs.com/api/auth/admin/login",
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      // Decode the token to get the role
      const decodedToken = jwtDecode(token);
      const { role } = decodedToken;
      const { personname } = decodedToken;

      console.log("gyfyu");
      console.log(role);

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
      // dispatch(login({ token }));

      // Dispatch the token and role to the Redux store
      dispatch(login({ token, role, personname }));

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 2000,
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#33517f]">
      <ToastContainer />
      <div className="bg-[white] p-8 rounded-[48px] shadow-btn max-w-md w-full mt-8">
        <h2 className="text-[2rem] font-mes font-bold mb-6 text-center text-[#33517f] tracking-wide">
          Login
        </h2>
        <form className="font-urban" onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
            />
          </div>
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#a9a9a9]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && (
            <p className="text-[#b41313] text-center tracking-wide text-sm">
              *{error}
            </p>
          )}{" "}
          {/* Error message in red */}
          {/* <div className="text-center text-sm text-[#a9a9a9] tracking-wide">
            <Link to="/forgotpassword" className="text-[#2b7cd6] font-bold hover:underline">Forgot Password</Link>
          </div> */}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-5 rounded-full shadow-btn text-[1rem] font-bold text-[white] bg-[#33517f] active:scale-95 transition transform duration-150 focus:outline-none"
          >
            Log In
          </button>
        </form>
        {/* <p className="mt-5 text-center text-sm text-[#a9a9a9] tracking-wide">
          Don't have an account? <Link to="/signup" className="text-[#030303] font-bold hover:underline">Sign up</Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { useDispatch } from 'react-redux';
// import { login } from '../Redux/store';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//   const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const validateForm = () => {
//       if (!email || !password) {
//         setError('Email or password are required');
//         toast.error('Email or password are required', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//         return false;
//       }
//       setError('');
//       return true;
//     };

//     const handleLogin = async (e) => {
//       e.preventDefault();
//       if (!validateForm()) return;

//       try {
//         const response = await axios.post( 'http://178.248.112.8:8080/auth/admin/login', {
//           email,
//           password,
//         },{ withCredentials: true },);
//         const { token } = response.data;
//         // Decode the token to get the role
//         const decodedToken = jwtDecode(token);
//         const { role } = decodedToken;
//         const { personname }= decodedToken;

//         console.log("gyfyu")
//         console.log(role)

//         toast.success('Login successful!', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//         // dispatch(login({ token }));

//         // Dispatch the token and role to the Redux store
//         dispatch(login({ token, role, personname }));

//         navigate('/dashboard');

//       } catch (error) {
//         console.error(error);
//         setError('Login failed. Please check your credentials.');
//         toast.error('Login failed. Please check your credentials.', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//       }
//     };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#33517f]">
//        <ToastContainer />
//       <div className="bg-[white] p-8 rounded-[48px] shadow-btn max-w-md w-full mt-8">
//         <h2 className="text-[2rem] font-mes font-bold mb-6 text-center text-[#33517f] tracking-wide">Login</h2>
//         <form className='font-urban' onSubmit={handleLogin}>
//           <div className="mb-5">
//             <input
//               type="email"
//               id="email"
//               placeholder='E-mail'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="password"
//               id="password"
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
//             />
//           </div>
//           {error && <p className="text-[#b41313] text-center tracking-wide text-sm">*{error}</p>} {/* Error message in red */}
//           {/* <div className="text-center text-sm text-[#a9a9a9] tracking-wide">
//             <Link to="/forgotpassword" className="text-[#2b7cd6] font-bold hover:underline">Forgot Password</Link>
//           </div> */}
//           <button
//             type="submit"
//             className="w-full py-3 px-4 mt-5 rounded-full shadow-btn text-[1rem] font-bold text-[white] bg-[#33517f] active:scale-95 transition transform duration-150 focus:outline-none"
//           >
//             Log In
//           </button>
//         </form>
//         {/* <p className="mt-5 text-center text-sm text-[#a9a9a9] tracking-wide">
//           Don't have an account? <Link to="/signup" className="text-[#030303] font-bold hover:underline">Sign up</Link>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { useDispatch } from 'react-redux';
// import { login } from '../Redux/store';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//   const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const validateForm = () => {
//       if (!email || !password) {
//         setError('Email or password are required');
//         toast.error('Email or password are required', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//         return false;
//       }
//       setError('');
//       return true;
//     };

//     const handleLogin = async (e) => {
//       e.preventDefault();
//       if (!validateForm()) return;

//       try {
//         const response = await axios.post('http://localhost:8080/auth/admin/login', {
//           email,
//           password,
//         });
//         const { token } = response.data;
//         // Decode the token to get the role
//         const decodedToken = jwtDecode(token);
//         const { role } = decodedToken;

//         console.log("gyfyu")
//         console.log(role)

//         toast.success('Login successful!', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//         // dispatch(login({ token }));

//         // Dispatch the token and role to the Redux store
//       dispatch(login({ token, role }));

//         navigate('/dashboard');

//       } catch (error) {
//         console.error(error);
//         setError('Login failed. Please check your credentials.');
//         toast.error('Login failed. Please check your credentials.', {
//           position: "top-center",
//           autoClose: 2000,
//           style: {
//             backgroundColor: "black",
//             color: "white"
//           }
//         });
//       }
//     };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-grad">
//        <ToastContainer />
//       <div className="bg-[white] p-8 rounded-[48px] shadow-btn max-w-md w-full mt-8">
//         <h2 className="text-[2rem] font-mes font-bold mb-6 text-center text-[#030303] tracking-wide">Login</h2>
//         <form className='font-urban' onSubmit={handleLogin}>
//           <div className="mb-5">
//             <input
//               type="email"
//               id="email"
//               placeholder='E-mail'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="password"
//               id="password"
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#030303] sm:text-sm"
//             />
//           </div>
//           {error && <p className="text-[#b41313] text-center tracking-wide text-sm">*{error}</p>} {/* Error message in red */}
//           {/* <div className="text-center text-sm text-[#a9a9a9] tracking-wide">
//             <Link to="/forgotpassword" className="text-[#2b7cd6] font-bold hover:underline">Forgot Password</Link>
//           </div> */}
//           <button
//             type="submit"
//             className="w-full py-3 px-4 mt-5 rounded-full shadow-btn text-[1rem] font-bold text-[white] bg-grad active:scale-95 transition transform duration-150 focus:outline-none"
//           >
//             Log In
//           </button>
//         </form>
//         <p className="mt-5 text-center text-sm text-[#a9a9a9] tracking-wide">
//           Don't have an account? <Link to="/signup" className="text-[#030303] font-bold hover:underline">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
