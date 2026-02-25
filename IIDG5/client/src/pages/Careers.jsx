import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgimg from '../assets/images/careers.svg'
const Careers = () => {
  return (
    <div>
      <Navbar/>
      {/* -------------------------------------- first section --------------------------------------- */}
      <div className=" h-[80vh] max-lg:h-[50vh] max-xl:h-[70vh] max-xl:px-16 max-md:px-10 bg-cover bg-center flex items-center justify-between max-2xl:space-x-8 px-24" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='text-[white] font-mes text-[5rem] max-lg:leading-[3.4rem] max-md:text-[3.5rem] max-xl:text-[4rem] max-lg:text-[3.8rem]'>Careers</div>
      </div>
      {/* -------------------------------------- second section --------------------------------------- */}
      <div className="ppx-24 py-36 max-xl:px-16 max-xl:py-32 max-lg:py-24 max-md:px-10">
        <div>
          <p className='font-urban  text-center text-[1.2rem] max-2xl:text-[1rem] text-[#33517f]'>We will notify here as and when positions are open at IIDG.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Careers