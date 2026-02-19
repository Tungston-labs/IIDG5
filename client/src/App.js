import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Branches from './pages/Branches'
import Facilities from './pages/Facilities'
import Careers from './pages/Careers'
import GemKnowledge from './pages/GemKnowledge'
import '../../client/src/assets/styles/styles.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Fourc from './pages/Fourc';
import QualityAssurance from './pages/QualityAssurance';
import Contactus from './pages/Contactus';
import Verifyreport from './pages/Verifyreport';
import Dashboard from './pages/Dashboard'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Dash from './pages/Dash'
import Test from './pages/Test'



const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/branch' element={<Branches/>}/>
        <Route path='/facility' element={<Facilities/>}/>
        <Route path='/career' element={<Careers/>}/>
        <Route path='/gemknowledge' element={<GemKnowledge/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        {/* <Route path='/dash' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/> */}

         {/* Dynamic Route for Verify Report with ID */}
         <Route path='/verify-report/:id' element={<Verifyreport />} />


        <Route path='/dash' element={<Dashboard />}/>
        <Route path='/fourc' element={<Fourc />} />
        <Route path='/qualityassurance' element={<QualityAssurance />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/verify-report' element={<Verifyreport />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dash /></ProtectedRoute>}/> 

        <Route path='/test' element={<Test />}/>
      </Routes>
    </>
  )
}

export default App