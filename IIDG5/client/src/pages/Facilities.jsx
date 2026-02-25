import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgimg from '../assets/images/aboutusfacilities.svg'
import fac1 from '../assets/images/fac1.svg'
import fac2 from '../assets/images/fac2.svg'
import fac3 from '../assets/images/fac3.svg'
import fac4 from '../assets/images/fac4.svg'
import fac5 from '../assets/images/fac5.svg'
import fac6 from '../assets/images/fac6.svg'
import fac7 from '../assets/images/fac7.svg'
import fac8 from '../assets/images/fac8.svg'
const Facilities = () => {
  return (
    <div>
        <Navbar/>

        {/* -------------------------------------- first section --------------------------------------- */}
        <div className=" h-[80vh] bg-cover bg-center flex items-center justify-between max-md:h-[50vh] max-lg:h-[55vh] max-xl:h-[70vh] max-lg:px-10 max-xl:px-16 max-md:px-10 max-2xl:space-x-8 px-24" style={{ backgroundImage: `url(${bgimg})` }}>
          <div className='text-[white] font-mes text-[5rem] max-lg:leading-[3.4rem] max-md:text-[3.5rem] max-xl:text-[4rem] max-lg:text-[3.8rem]'>Facilities</div>
        </div>
        {/* -------------------------------------- second section --------------------------------------- */}
            {/* -------------------------------------- diamond grading --------------------------------------- */}
            <div className='px-28 py-14 bg-[#f2f4f7]  max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10 '>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col-reverse max-md:gap-6 '>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full '>
                  <p className='text-[#33517f] font-mes text-[4.2rem]  max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Diamond<br />Grading </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem] max-2xl:text-[1rem] text-[#33517f] py-3 text-left max-lg:text-[0.9rem] max-md:text-justify'>
                    4Cs of Diamond Quality is the universal method for assessing the quality of
                    any diamond, anywhere in the world and is trusted by museums,
                    auctions houses, and consumers all over the world to grade
                    nature’s finest diamonds.
                  </p>
                </div>
                {/* image 1 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac1} alt='img' /></div>
              </div>

            </div>

            {/* -------------------------------------- gemstone identification --------------------------------------- */}

            <div className='px-28 py-14 bg-[#fffefe] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col max-md:gap-6 '>
                {/* image 2 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac2} alt='img' /></div>
                <div className='w-[42vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes text-[4.2rem]  max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide text-right max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Gemstone<br />Identification </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem] max-2xl:text-[1rem]  text-[#33517f] py-3 text-right max-lg:text-[0.9rem] max-md:text-justify'>
                    IIDG uses advanced technology & expert gemologists to determine a 
                    gemstone's origin (natural, lab-grown, or artificial). Gemological 
                    characteristics are described according to the highest 
                    standards.If the origin country can be confirmed, it
                    is included with a detailed image. 
                </p>
                </div>
              </div>

            </div>

            {/* -------------------------------------- jewelry quality analysis --------------------------------------- */}

            <div className='px-28 py-14 bg-[#f2f4f7] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col-reverse max-md:gap-6 '>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes text-[4.2rem]  max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Jewelry<br />Quality Analysis </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem] max-2xl:text-[1rem]  text-[#33517f] py-3 text-left max-lg:text-[0.9rem] max-md:text-justify'>
                    IIDG specializes in complex jewelry analysis and documentation. Our expert 
                    team provides thorough, unbiased reports without damaging delicate pieces. 
                    High-quality images highlight intricate craftsmanship and detail every 
                    gemstone and setting.
                  </p>
                </div>
                {/* image 3 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac3} alt='img' /></div>
              </div>

            </div>

            {/* -------------------------------------- sealed report facilities --------------------------------------- */}

            <div className='px-24 py-14 bg-[#fffefe] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col max-md:gap-6 '>
                {/* image 4 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac4} alt='img' /></div>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes text-[4.2rem]  max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide text-right max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Sealed Report<br />Facilities </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem] max-2xl:text-[1rem]  text-[#33517f] py-3 text-right max-lg:text-[0.9rem] max-md:text-justify'>
                    IIDG uses advanced technology & expert gemologists to determine
                    a gemstone's origin (natural, lab-grown, or artificial). Gemological 
                    characteristics are described according to the highest standards.
                    If the origin country can be confirmed, it is included with a
                    detailed image.
                  </p>
                </div>
              </div>

            </div>

            {/* -------------------------------------- screening --------------------------------------- */}

            <div className='px-28 py-14 bg-[#f2f4f7] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col-reverse max-md:gap-6 '>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes text-[4.2rem]  max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Screening </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem] max-2xl:text-[1rem]  text-[#33517f] py-3 text-left max-lg:text-[0.9rem] max-md:text-justify'>
                    IIDG uses advanced technology to determine if diamonds are natural,
                    lab-created, or simulated. Natural diamonds are securely sealed in
                    tamper-proof bags with detailed analysis information.                  
                  </p>
                </div>
                {/* image 5 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac5} alt='img' /></div>
              </div>

            </div>

            {/* -------------------------------------- sorting --------------------------------------- */}

            <div className='px-28 py-14 bg-[#fffefe] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col max-md:gap-6 '>
                {/* image 6 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac6} alt='img' /></div>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes  text-[4.2rem] max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] text-right tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Sorting </p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem]  max-2xl:text-[1rem] text-[#33517f] py-3 text-right max-lg:text-[0.9rem] max-md:text-justify'>
                    IIDG determines if your diamond is natural or lab-grown using advanced 
                    technology. Diamonds are returned in IGI D-Boxes with color, clarity,
                    and cut grades (on request). Other details like measurements and 
                    fluorescence are available upon request.
                  </p>
                </div>
              </div>

            </div>

            {/* -------------------------------------- laserscribe --------------------------------------- */}

            <div className='px-28 py-14 bg-[#f2f4f7] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col-reverse max-md:gap-6 '>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes  text-[4.2rem] max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem]'>Laserscribe</p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem]  max-2xl:text-[1rem] text-[#33517f] py-3 text-left max-lg:text-[0.9rem] max-md:text-justify'>
                    Laser inscription is common in the diamond industry. We use Laserscribe® to 
                    engrave your IIDG report number on the diamond's girdle for easy 
                    identification and verification of gemological data.
                  </p>
                </div>
                {/* image 7 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac7} alt='img' /></div>
              </div>

            </div>

            {/* -------------------------------------- cvd --------------------------------------- */}

            <div className='px-28 py-14 bg-[#fffefe] max-xl:px-14 max-lg:px-10 max-xl:py-14 max-md:px-10'>

              <div className='flex items-center justify-between max-2xl:space-x-8 max-md:space-x-0 max-md:flex-col max-md:gap-6 '>
                {/* image 8 */}
                <div className='max-xl:w-[36vw] max-lg:w-[40vw] max-md:w-full'><img src={fac8} alt='img' /></div>
                <div className='w-[40vw] max-lg:w-[44vw] max-md:w-full'>
                  <p className='text-[#33517f] font-mes  text-[4.2rem] max-2xl:text-[4rem] max-xl:text-[3.5rem] max-xl:leading-[3.3rem]  leading-[4.2rem] text-right tracking-wide max-lg:text-[2.9rem] max-lg:leading-[2.6rem] max-md:text-left max-md:text-[2.3rem] max-md:leading-[2.1rem] '>CVD</p>
                  <p className='font-urban text-[1.2rem] max-xl:text-[0.9rem]  max-2xl:text-[1rem] text-[#33517f] py-3 text-right max-lg:text-[0.9rem] max-md:text-justify'>
                    CVD diamonds are identical to natural diamonds in every way, except origin. 
                    Grown in labs, they achieve the purity of Type IIa diamonds. The CVD 
                    process involves exposing a diamond seed to extreme conditions,
                    allowing carbon to form a diamond. This complex technology
                    limits the number of global producers.
                  </p>
                </div>
              </div>

            </div>

        <Footer/>
    </div>
  )
}

export default Facilities