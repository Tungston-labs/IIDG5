import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgimg from '../assets/images/branches.svg'
const Branches = () => {
  return (
    <div>
      <Navbar/>
      {/* -------------------------------------- first section --------------------------------------- */}
      <div className=" h-[80vh] max-lg:h-[50vh] max-xl:h-[70vh] bg-cover bg-center flex items-center justify-between max-2xl:space-x-8 max-xl:px-16 max-md:px-10 px-24" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='text-[white] font-mes text-[5rem] max-lg:leading-[3.4rem] max-md:text-[3.5rem] max-xl:text-[4rem] max-lg:text-[3.8rem]'>Our Branches</div>
      </div>
      {/* -------------------------------------- second section --------------------------------------- */}
      <div className='px-24 py-36 max-xl:px-16 max-xl:py-32 max-lg:py-24 max-md:px-10'>

        <div className="flex justify-between max-lg:flex-col max-lg:space-y-8">

          <div className=''>
            <p className='text-[#33517f] font-mes text-[4rem] max-xl:text-[3.5rem] max-lg:text-[2.7rem] max-md:text-[2.3rem] tracking-wide'>INDIA</p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem]  text-[#33517f]'>Dee Pee Plaza, Near Naruti Nexa Showroom </p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f]'>2nd Floor, Room No.39/1241B, Kokkalai  </p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f]'>Trissur – 680021 </p>
          </div>

          <div className=''>
            <p className='text-[#33517f] font-mes text-[4rem] max-xl:text-[3.5rem] max-lg:text-[2.7rem] max-md:text-[2.3rem] tracking-wide'>UAE</p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem]  text-[#33517f]'> 1401, Garachi Trading Building </p>
             <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f]'> Abu Dhabi  </p>
          </div>

          <div className=''>
            <p className='text-[#33517f] font-mes text-[4rem] max-xl:text-[3.5rem] max-lg:text-[2.7rem] max-md:text-[2.3rem] tracking-wide'>UK</p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem]  text-[#33517f]'>WA15 1AR, Ft16, 20A Victoria Road,</p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f]'>Manchester, UK</p>
          </div>

        </div>

      </div>
      <Footer/>  
    </div>
  )
}

export default Branches

