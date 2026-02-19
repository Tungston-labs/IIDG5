// import React from 'react'
// import Navbar from '../components/Navbar'
// import bgvideo from '../assets/images/welcomevideo.mp4'
// import Footer from '../components/Footer'
// import cmain from '../assets/images/4cmain.svg'
// import qass from '../assets/images/qass.svg'
// import bgimg from '../assets/images/BGpattern.svg'
// import pearl from '../assets/images/pearl.svg'
// import jade from '../assets/images/jade.svg'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//       {/* -------------------------------------- first section --------------------------------------- */}
//       <div className=' relative '>
      
//           <div >
//             <video src={bgvideo} alt="video" autoPlay muted loop disablePictureInPicture className="w-full"/>   
//           </div>
          
//           <Navbar/>  
          
//           <div className='absolute max-2xl:top-[17rem] max-2xl:px-20 max-xl:px-12 top-80 px-24 space-y-5 max-xl:space-y-0 max-xl:top-[12rem]'>
//             <div className='text-[white] font-mes text-[5rem] leading-[4.6rem] max-xl:text-[4rem] max-xl:leading-[4rem]'>Welcome toIDG Labs</div>
//             <div className='text-[1.2rem] max-2xl:text-[1rem] font-urban text-[white] max-xl:text-[1rem]'>Diamond Grading, Diamond Testing, and Consultation for <br />
//              Diamonds and Gemstones with International standards <br />
//             at our Gem Testing Lab and Diamond Testing Lab.</div>
//           </div>

        
//       </div>
//       {/* -------------------------------------- second section --------------------------------------- */}
//       <div className='h-[85vh] max-xl:h-[70vh] bg-white flex items-center px-28 justify-between max-xl:gap-5 max-2xl:px-20 max-xl:px-12'>
       
//           {/* text */}
//           <div className='w-[40rem] max-xl:w-[33rem] '>
//             <p className='text-[#33517f]  font-mes text-[4.2rem] max-2xl:text-[3.6rem] max-xl:text-[3.4rem] leading-[4.2rem] max-2xl:leading-[3.9rem] tracking-wide'>4Cs of <br /> Diamond Quality </p>
//             <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3'>
//               These four characteristics of a diamond are the main factors affecting its 
//               structure and appeal. Within the diamond, the 4Cs interact with one 
//               another. They determine the diamond’s appearance and quality.
//             </p>
//             <hr className='border border-[#33517f] my-3 border-b-0'/>
//             <ul className='font-bold mt-[1.6rem] list-disc font-urban text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] px-7  space-y-2'>
//               <li>Carat Weight</li>
//               <li>Color Grade</li>
//               <li>Clarity Grade</li>
//               <li>Cut Grade</li>
//             </ul>
//             <Link to='/fourc'><p className='text-[#33517f] text-[1.3rem] max-2xl:text-[1.1rem] font-light mt-4 underline'>KNOW MORE</p></Link>
//           </div>
//           {/* image */}
//           <div>
//             <img src={cmain} alt='img' className='max-xl:w-[30rem]' />
//           </div>
          
//       </div>
//       {/* -------------------------------------- third section --------------------------------------- */}
//       <div className='h-[95vh] max-xl:h-[85vh] max-2xl:h-[100vh] bg-[#f2f4f7] px-28 py-[7.5rem] max-xl:py-[4.5rem] max-2xl:py-[5.5rem] max-2xl:px-20 max-xl:px-12' >
//         <div className=''>
//           <p className='text-[#33517f] font-mes text-[4.2rem]  leading-[4.2rem] max-2xl:leading-[3.9rem] max-2xl:text-[3.6rem] max-xl:text-[3.4rem]  tracking-wide'>Gem Knowledge</p>
          
//           <div className='mt-[3rem] max-2xl:mt-[2rem] relative'>
            
//             <div className=' flex justify-center'>
//               <img src={bgimg} alt='img' className='w-[70rem] max-2xl:w-[60rem] max-xl:w-[45rem]'/>
//             </div>
//             <div className='flex absolute top-[8.5rem] max-2xl:top-[10rem] px-36 space-x-10 max-2xl:px-[6rem] max-2xl:space-x-8'>
//               {/* pearl text */}
//               <div className='bg-[white]  px-7  py-5 max-2xl:px-5 shadow-lg transform -translate-y-[4rem] '>
//                 <p className='font-mes text-[#e39a9b] text-[2rem]'>Pearl</p>
//                 <p className='text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] font-light font-urban'>Pearls, both natural and <br />artificial, come in a wide range <br />of colours and are arguably <br />the most popular gems of all <br />time. White and Cream are <br />the most popular colours.</p>
//               </div>
//               {/* pearl image */}
//               <div><img src={pearl} alt='img' className='shadow-lg max-2xl:shadow-none max-2xl:w-[15rem] max-2xl:h-[15rem]'/></div>
//               {/* jade text */}
//               <div className='bg-[white] px-7  py-5 max-2xl:px-5 shadow-lg transform -translate-y-[4rem] '>
//                 <p className='font-mes text-[#e39a9b] text-[2rem]'>Jade</p>
//                 <p className='text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] font-light font-urban'>The smoke-lit caves and huts <br />where ancient people lived are <br />where Jade's cultural origins  <br />can be found. This hardest of  <br />stones was moulded into  <br />weapons, tools, ornaments.</p>
//               </div>
//               {/* jade image */}
//               <div><img src={jade} alt='img' className='shadow-lg max-2xl:shadow-none max-2xl:w-[15rem] max-2xl:h-[15rem]'/></div>
//             </div>
            
//           </div>



//           <div>
//             <Link to='/gemknowledge'><p className='text-[#e39a9b] text-[1.3rem] max-2xl:text-[1.1rem] text-center font-light pt-10 underline'>MORE ABOUT GEMS</p></Link>
//           </div>
//         </div>
//       </div>
//       {/* -------------------------------------- forth section --------------------------------------- */}
//       <div className='h-[70vh] bg-white flex items-center px-28 justify-between max-2xl:px-20 max-xl:px-12'>
       
//           {/* text */}
//           <div>
//             <p className='text-[#33517f] font-mes text-[4.2rem] max-2xl:text-[3.6rem]  max-xl:text-[3.4rem]  leading-[4.2rem] max-2xl:leading-[3.9rem] tracking-wide'>Quality <br /> Assurance </p>
//             <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3'>
//               IIDG certifies the greatest range of gemstones and jewelry.
//             </p>
//             <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3'>              
//               Renowned for grading colorful gemstones, diamonds, pearls, fine jewelry, <br /> and all contemporary synthetics and simulants.
//             </p>
//             <Link to='/qualityassurance' ><p className='text-[#33517f] text-[1.3rem] max-2xl:text-[1.1rem] font-light mt-4 underline'>KNOW MORE</p></Link>
//           </div>
//           {/* image */}
//           <div>
//             <img src={qass} alt='img'  className=''/>
//           </div>
          
//       </div>
//       {/* -------------------------------------- Footer --------------------------------------- */}
//       <Footer/>

//     </div>
//   )
// }

// export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import bgvideo from '../assets/images/welcomevideo.mp4'
import Footer from '../components/Footer'
import cmain from '../assets/images/4cmain.svg'
import qass from '../assets/images/qass.svg'
import { Link } from 'react-router-dom'
import GemHome from '../components/GemHome'
import bgmobile from '../assets/images/vidmob.mp4'
import GemHomelg from '../components/GemHomelg'


const Home = () => {
  return (
    <div>
      {/* -------------------------------------- first section --------------------------------------- */}
      <div className=' relative '>
      
          <div className=' max-md:hidden max-sm:hidden '>
            <video src={bgvideo} alt="video" autoPlay muted loop disablePictureInPicture className="w-full"/>   
          </div>
 
          <div className='max-md:block max-2xl:hidden max-xl:hidden max-lg:hidden max-[2560px]:hidden max-md:w-full'>
            <video src={bgmobile} alt="video" autoPlay muted loop disablePictureInPicture className="w-full"/>   
          </div>
 
          
          <Navbar/>  
          
          <div className='absolute max-2xl:top-[17rem] max-lg:top-[9rem] max-md:top-[10rem] max-lg:px-10 max-2xl:px-20 max-xl:px-12 top-80 px-24 space-y-5 max-xl:space-y-0 max-xl:top-[12rem]'>
            <div className='text-[white] font-mes text-[5rem] leading-[4.6rem] max-xl:text-[4rem] max-lg:text-[3.5rem] max-lg:leading-[3rem] max-xl:leading-[4rem] max-sm:text-[3rem]'>Welcome to <br />IDG Labs</div>
            <div className='text-[1.2rem] max-2xl:text-[1rem] font-urban text-[white] max-xl:text-[1rem] max-lg:text-[0.9rem] w-[30rem] max-xl:w-[25rem] max-md:w-[21rem] max-sm:text-[0.8rem] max-sm:w-[17rem]'>
              Diamond Grading, Diamond Testing, and Consultation for 
             Diamonds and Gemstones with International standards 
            at our Gem Testing Lab and Diamond Testing Lab.</div>
          </div>
 
        
      </div>
      {/* -------------------------------------- second section --------------------------------------- */}
      <div className=' py-28 bg-white max-lg:justify-around flex items-center px-28 justify-between max-lg:px-10 max-lg:flex-col-reverse max-xl:gap-5 max-2xl:px-20 max-xl:px-12'>
       
          {/* text */}
          <div className='w-[40rem] max-xl:w-[33rem] max-lg:w-full max-lg:pb-10 '>
            <p className='text-[#33517f]  font-mes text-[4.2rem] max-2xl:text-[3.6rem] max-lg:text-[3rem] max-lg:leading-[2.8rem] max-xl:text-[3.4rem] leading-[4.2rem] max-2xl:leading-[3.9rem] tracking-wide'>4Cs of <br /> Diamond Quality </p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3'>
              These four characteristics of a diamond are the main factors affecting its
              structure and appeal. Within the diamond, the 4Cs interact with one
              another. They determine the diamond’s appearance and quality.
            </p>
            <hr className='border border-[#33517f] my-3 border-b-0'/>
            <ul className='font-bold mt-[1.6rem] list-disc font-urban text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] px-7  space-y-2'>
              <li>Carat Weight</li>
              <li>Color Grade</li>
              <li>Clarity Grade</li>
              <li>Cut Grade</li>
            </ul>
            <Link to='/fourc'><p className='text-[#33517f] text-[1.3rem] max-2xl:text-[1.1rem] font-light mt-4 underline'>KNOW MORE</p></Link>
          </div>
          {/* image */}
          <div>
            <img src={cmain} alt='img' className='max-xl:w-[30rem] max-lg:pb-10' />
          </div>
          
      </div>
      {/* -------------------------------------- third section --------------------------------------- */}
      <div className='bg-[#f2f4f7] px-28 max-md:px-10 py-[7.5rem] max-xl:py-[4.5rem] max-2xl:py-[5.5rem] max-2xl:px-20 max-xl:px-12' >
         <div className='max-lg:hidden max-md:hidden max-sm:hidden '>
          <GemHome/>
        </div>
        <div className='max-lg:block max-2xl:hidden max-xl:hidden max-[2560px]:hidden '>
          <GemHomelg/>
        </div> 
      </div>
      {/* -------------------------------------- forth section --------------------------------------- */}
      <div className='py-20 max-md:justify-center max-md:gap-16 max-lg:justify-around max-lg:px-10 bg-white max-lg:flex-col-reverse flex items-center px-28 justify-between max-2xl:px-20 max-xl:px-12'>
       
          {/* text */}
          <div className='w-[40rem] max-xl:w-[33rem] max-lg:w-full'>
            <p className='text-[#33517f] font-mes text-[4.2rem] max-2xl:text-[3.6rem] max-lg:text-[3rem] max-lg:leading-[2.8rem]  max-xl:text-[3.4rem]  leading-[4.2rem] max-2xl:leading-[3.9rem] tracking-wide'>Quality <br /> Assurance </p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3 max-lg:py-0'>
              IIDG certifies the greatest range of gemstones and jewelry.
            </p>
            <p className='font-urban text-[1.2rem] max-2xl:text-[1rem] text-[#33517f] py-3 max-lg:py-0'>              
              Renowned for grading colorful gemstones, diamonds, pearls, fine jewelry, and all contemporary synthetics and simulants.
            </p>
            <Link to='/qualityassurance' ><p className='text-[#33517f] text-[1.3rem] max-2xl:text-[1.1rem] font-light mt-4 underline'>KNOW MORE</p></Link>
          </div>
          {/* image */}
          <div>
            <img src={qass} alt='img' className='max-xl:w-[30rem] max-lg:pb-10'/>
          </div>
          
      </div>
      {/* -------------------------------------- Footer --------------------------------------- */}
      <Footer/>
 
    </div>
  )
}
 
export default Home
