import React from 'react'
import Navbar from '../components/Navbar'
import qabg from '../assets/images/qabg.svg'
import one from '../assets/images/one.svg'
import two from '../assets/images/two.svg'
import three from '../assets/images/three.svg'
import four from '../assets/images/four.svg'
import five from '../assets/images/five.svg'
import six from '../assets/images/six.svg'
import seven from '../assets/images/seven.svg'
import eight from '../assets/images/eight.svg'
import nine from '../assets/images/nine.svg'
import ten from '../assets/images/ten.svg'
import eleven from '../assets/images/eleven.svg'
import twelve from '../assets/images/twelve.svg'
import thirteen from '../assets/images/thirteen.svg'
import fourteen from '../assets/images/fourteen.svg'
import fifteen from '../assets/images/fifteen.svg'
import sixteen from '../assets/images/sixteen.svg'
import Footer from '../components/Footer'
 
const QualityAssurance = () => {
    return (
        <div>
            <Navbar />
            <div
                className="h-[70vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${qabg})` }}
            >
                {/* Your content here */}
                <div className=" text-[white] font-mes text-[5rem] leading-[4.6rem] pl-[7rem] max-md:pl-[3rem] max-md:text-[3rem] max-md:leading-[3.8rem] max-xl:text-[4rem] max-lg:text-[3.8rem]">
                    Quality<br /> Assurance
                </div>
            </div>
            <div className='bg-orangegradient font-mes mt-24 px-24 py-5 text-[3.6rem] text-[#33517F] leading-[4.2rem] max-xl:text-[2.8rem] max-xl:leading-[3.2rem] max-md:text-[1.5rem] max-md:leading-[2.3rem] max-xl:px-14 max-lg:px-10 max-md:px-8'>
                “Experts in Identification and Grading of Colored stones and Diamonds”
            </div>
 
            <div className='px-24 font-urban text-[#33517F] text-[1.2rem] pt-5 max-xl:text-[1rem] max-md:text-[0.9rem] max-xl:px-14 max-lg:px-10 max-md:px-8'>
                <div className='py-3'>IIDG certifies the greatest range of gemstones and jewelry.</div>
                <div>As the industry pioneer in jewelry evaluation, we have unmatched expertise and a global footprint. We are renowned for grading colourful gemstones, diamonds, pearls, fine jewelry, and all contemporary synthetics and simulants. We also have a solid reputation for grading diamond.</div>
                <div className='pt-3'>IIDG reports are regarded as a reliable source for determining authenticity and quality since they are tested in our world-class laboratory.</div>
                <div className='border-b-[1px] border-[#33517F] pt-6'></div>
            </div>
 
            <div className='mb-24'>
                <div className='px-24 font-mes text-[3rem] text-[#33517F] pt-12 max-xl:text-[2.5rem] max-md:text-[1.5rem] max-xl:px-14 max-lg:px-10 max-md:px-8'>Uncut Diamond/Jewellery QA Check List</div>
                <div className='px-[15rem] text-[1.2rem] mt-10 max-xl:text-[1rem] max-md:text-[0.9rem] max-xl:px-[10rem] max-lg:px-[6rem] max-md:px-10'>
                    {/* one */}
                    <div className='flex items-center'>
                        <img src={one} alt='one' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Identification of Stone:</span>Determining the type of gemstone used.
                        </div>
                    </div>
                    {/* two */}
                    <div className='flex items-center mt-8'>
                        <img src={two} alt='two' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Disclosure of imitation stones:</span>Identifying if any stones are artificial or man-made.
                        </div>
                    </div>
                    {/* three */}
                    <div className='flex items-center mt-8'>
                        <img src={three} alt='three' width={40} className=' max-xl:w-[1.5rem]'/>
                        <div className='font-urban text-[#33517F] pl-12 max-md:pl-6'>
                            <span className='font-bold pr-2'>Disclosure of synthetic stones: </span>Identifying if any stones are lab-created.
                        </div>
                    </div>
                    {/* four */}
                    <div className='flex items-center mt-8'>
                        <img src={four} alt='Color variation in colored gemstones' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Color variation in colored gemstones: </span>
                            Assessing consistency of color within a gemstone.
                        </div>
                    </div>
                    {/* five */}
                    <div className='flex items-center mt-8 max-xl:mt-7'>
                        <img src={five} alt='Missing stones:' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Missing stones: </span>
                            Checking for any missing gemstones.
                        </div>
                    </div>
                    {/* six */}
                    <div className='flex items-center mt-8'>
                        <img src={six} alt='Broken gemstones:' width={40} className=' max-xl:w-[1.5rem]'/>
                        <div className='font-urban text-[#33517F] pl-12 max-md:pl-6'>
                            <span className='font-bold pr-2'>Broken gemstones:  </span>
                            Identifying any damaged gemstones.
                        </div>
                    </div>
                    {/* seven*/}
                    <div className='flex items-center mt-8'>
                        <img src={seven} alt='Mishappen gemstones' width={50} className=' max-xl:w-[2rem]'/>
                        <div className=' font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Mishappen gemstones:</span>
                            Evaluating the shape and cut of the gemstone.
                        </div>
                    </div>
                    {/* eight*/}
                    <div className='flex items-center mt-10 max-xl:mt-8'>
                        <img src={eight} alt='Undersized gemstones' width={50} className=' max-xl:w-[2.2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Undersized gemstones:</span>
                            Checking if the gemstone is smaller than expected or specified
                        </div>
                    </div>
                    {/* nine*/}
                    <div className='flex items-center mt-14 max-xl:mt-10'>
                        <img src={nine} alt='Unfinished prongs' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Unfinished prongs: </span>
                            Assessing the completion of the metal claws holding the gemstone.
                        </div>
                    </div>
                    {/* ten*/}
                    <div className='flex items-center mt-10 max-xl:mt-8'>
                        <img src={ten} alt='Soldering defects' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Soldering defects:  </span>
                            Examining the quality of the metal joints.
                        </div>
                    </div>
                    {/* eleven*/}
                    <div className='flex items-center mt-8 max-xl:mt-5'>
                        <img src={eleven} alt='Rods/Balls polishing' width={40} className=' max-xl:w-[2rem]'/>
                        <div className=' font-urban text-[#33517F] pl-12 max-md:pl-6'>
                            <span className='font-bold pr-2'>Rods/Balls polishing: </span>
                            Checking the finish of metal components.
                        </div>
                    </div>
                    {/* twelve*/}
                    <div className='flex items-center mt-10 max-xl:mt-7'>
                        <img src={twelve} alt='Gap between prongs' width={50} className=' max-xl:w-[2rem]'/>
                        <div className=' font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Gap between prongs: </span>
                             Evaluating the spacing of the prongs.
                        </div>
                    </div>
                    {/* thirteen*/}
                    <div className='flex items-center mt-12 max-xl:mt-9'>
                        <img src={thirteen} alt='GBack/Lock screws checking' width={40} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-12 max-md:pl-6'>
                            <span className='font-bold pr-2'>GBack/Lock screws checking: </span>
                              Inspecting the functionality and condition of the jewelry's closure.
                        </div>
                    </div>
                    {/* fourteen*/}
                    <div className='flex items-center mt-12 max-xl:mt-7'>
                        <img src={fourteen} alt='Cracks if any' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Cracks if any: </span>
                            Identifying any fractures in the metal.
                        </div>
                    </div>
                    {/* fifteen*/}
                    <div className='flex items-center mt-12 max-xl:mt-9'>
                        <img src={fifteen} alt='Metal porosity' width={50} className=' max-xl:w-[2rem]'/>
                        <div className=' font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Metal porosity: </span>
                              Checking for tiny holes in the metal.
                        </div>
                    </div>
                    {/* sixteen*/}
                    <div className='flex items-center mt-12 max-xl:mt-8'>
                        <img src={sixteen} alt='Loose setting' width={50} className=' max-xl:w-[2rem]'/>
                        <div className='font-urban text-[#33517F] pl-10 max-md:pl-5'>
                            <span className='font-bold pr-2'>Loose setting: </span>
                              Determining if the gemstone is securely held in place.
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </div>
    )
}
 
export default QualityAssurance