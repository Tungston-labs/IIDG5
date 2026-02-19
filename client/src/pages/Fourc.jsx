import React from 'react'
import bgimg from '../assets/images/4cbg.svg'
import orangebg from '../assets/images/orangebg.svg'
import greybg from '../assets/images/greybg.svg'
import carat from '../assets/images/carat.svg'
import color from '../assets/images/color.svg'
import clarity from '../assets/images/clarity.svg'
import cut from '../assets/images/cut.svg'
 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
const Fourc = () => {
    return (
 
        <div>
            {/* --------------------------Navbar------------------------ */}
            <Navbar />
            <div
                className="h-[70vh] bg-cover bg-center max-xl:bg-left flex items-center"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                {/* Your content here */}
                <div className="text-[white] font-mes text-[5rem] leading-[4.6rem] pl-[7rem] max-md:pl-[3rem] max-md:text-[3rem] max-md:leading-[3.8rem] max-xl:text-[4rem] max-lg:text-[3.8rem]">
                    4Cs of<br /> Diamond Quality
                </div>
            </div>
 
            <div className='px-24 max-xl:px-14 max-lg:px-10'>
                {/* 1st div */}
                <div className='py-28 font-urban text-[#33517F] text-[1.2rem] max-xl:text-[1rem] max-md:text-[0.9rem]'>
                    <div className='pb-3'>These four characteristics of a diamond are the main factors affecting its structure and appeal. Within the diamond, the 4Cs interact with one another. They determine the diamond’s appearance and quality. For instance, a diamond’s capacity to return light to your eyes is largely influenced by its cut quality but also by its colour and clarity.</div>
                    <div>Professionals score the four diamond properties on a standardized scale, providing you with a tool to assess diamonds. You can more accurately assess whether a diamond is of great grade by looking at its 4Cs</div>
                </div>
 
                {/* 2nd div */}
                <div
                    className='py-16 bg-cover bg-center mb-20 flex items-center max-xl:py-12 max-lg:flex-col-reverse '
                    style={{ backgroundImage: `url(${orangebg})` }}
                >
                    <div className='w-[57%] pl-20 max-xl:pl-12 max-lg:w-[82%] max-lg:pl-0'>
                        <div className=' font-mes text-[3rem] text-[#33517F] max-xl:text-[2.7rem] max-md:text-[2rem]'>Carat</div>
                        <div className=' text-left font-urban text-[1.2rem] text-[#33517F] max-xl:text-[1rem] max-md:text-[0.9rem]'>When people hear the word “Carat Weight,” they frequently assume it relates to the diamond’s size. Carat really refers to the weight of the diamond rather than the size of the stone. A 1 carat diamond weighs 200 mgs, or 0.2 grams, which is equivalent to the weight of one-fourth of a raisin. Two 1 carat diamonds may be significantly varied in size depending on the diamond’s shape and cutting technique.</div>
                    </div>
                    <div className=' max-md:px-7'>
                        <img src={carat} alt='carat' className=' max-lg:w-[18rem]'/>
                    </div>
 
                </div>
                {/* 3rd div */}
                <div
                    className='py-12 bg-cover bg-center mb-20 flex items-center max-lg:flex-col'
                    style={{ backgroundImage: `url(${greybg})` }}
                >
                    <div className='pl-6 max-md:pl-0'>
                        <img src={color} alt='color' className=' max-lg:w-[16rem] max-md:w-[13.5rem]'/>
                    </div>
                    <div className='w-[75%] pl-10 text-right pr-20 max-xl:pr-12 max-lg:w-[82%] max-lg:pr-0 max-lg:pl-0 max-lg:text-left'>
                        <div className=' font-mes text-[3rem] text-[#33517F] max-xl:text-[2.7rem] max-md:text-[2rem]'>Color</div>
                        <div className=' font-urban text-[1.2rem] max-xl:text-[1rem] text-[#33517F] mb-5 max-md:text-[0.9rem]'>The degree of a diamond’s [white]ness or lack of colour is used to grade its colour. According to the GIA, diamonds are graded from D to Z, with D being the most colourless and Z having a pronounced brown or yellow tint. The diamond colour chart that follows displays how each grade contrasts with the others. </div>
                        <div className=' font-urban text-[1.2rem] max-xl:text-[1rem] text-[#33517F] max-md:text-[0.9rem]'>Although the diamond colour chart is an illustration of how each grade looks, it’s necessary to examine each diamond separately. The hue of a diamond may vary depending on the cut, carat weight, and form of the stone.</div>
                    </div>
 
                </div>
 
                {/* 4th div */}
                <div
                    className='py-8 bg-cover bg-center mb-20 flex items-center max-lg:flex-col-reverse max-lg:py-12'
                    style={{ backgroundImage: `url(${orangebg})` }}
                >
                    <div className='w-[65%] pl-20 max-xl:pl-12 max-lg:w-[82%] max-lg:pl-0'>
                        <div className=' font-mes text-[3rem] text-[#33517F] max-xl:text-[2.7rem] max-md:text-[2rem]'>Clarity</div>
                        <div className=' text-left font-urban text-[1.2rem] max-xl:text-[1rem] text-[#33517F] mb-5 max-md:text-[0.9rem]'>A diamond’s clarity grade determines how free of imperfections and flaws it is.</div>
                        <div className=' text-left font-urban text-[1.2rem] max-xl:text-[1rem] text-[#33517F] max-md:text-[0.9rem]'>
                            These flaws can prevent light from passing through the diamond, depending on their size, location, and degree of darkness. When this occurs, the diamond’s beauty and brilliance are diminished, detracting from the superior Cut
                        </div>
                    </div>
                    <div className=' -mb-16 max-md:-ml-5'>
                        <img src={clarity} alt='clarity' className=' max-lg:w-[15rem] max-lg:pb-12'/>
                    </div>
 
                </div>
                {/* 5th div */}
                <div
                    className='py-8 bg-cover bg-center mb-20 flex items-center max-lg:flex-col max-lg:py-12'
                    style={{ backgroundImage: `url(${greybg})` }}
                >
                    <div className='pl-6 max-md:pl-0'>
                        <img src={cut} alt='cut' className=' max-lg:w-[15rem] max-lg:pb-5'/>
                    </div>
                    <div className='w-[75%] pl-10 text-right pr-20 max-xl:pr-12 max-lg:w-[82%] max-lg:pr-0 max-lg:pl-0 max-lg:text-left'>
                        <div className=' font-mes text-[3rem] text-[#33517F] max-xl:text-[2.7rem] max-md:text-[2rem]'>Cut</div>
                        <div className=' font-urban text-[1.2rem] max-xl:text-[1rem] text-[#33517F] max-md:text-[0.9rem]'>The “Cut” of a diamond is possibly the most significant factor that affects its beauty. Diamond cut precisely describes the brilliance, fire, scintillation, angles, dimensions, and finishing features of a diamond. These elements have an immediate effect on a diamond’s propensity to sparkle as well as its general visual attractiveness. </div>
                    </div>
 
 
                </div>
 
 
            </div>
 
            {/* -----------------------footer--------------------- */}
            <Footer />
        </div>
    )
}
 
export default Fourc