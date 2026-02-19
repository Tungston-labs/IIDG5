
import React from 'react'
import bgimg from '../assets/images/bgmob.svg'
import pearl from '../assets/images/pearl.svg'
import jade from '../assets/images/jade.svg'
import { Link } from 'react-router-dom'
 
const GemHomelg = () => {
  return (
    <div className=''>
        <p className='text-[#33517f] font-mes text-[3rem] pb-12 leading-[4.2rem] max-md:leading-[3rem] tracking-wide'>Gem Knowledge</p>
        <div className='flex justify-center'>
            <div  className="w-[80%] max-md:w-full  bg-cover bg-center pt-[3rem] max-md:pt-[2.5rem] pb-[3rem]"
                    style={{ backgroundImage: `url(${bgimg})` }}>
                        <div className='flex flex-col justify-center items-center space-y-10'>

                            <div>
                                <img src={pearl} alt='img' className=' shadow-lg '/>
                            </div>

                            <div className='bg-[white] shadow-lg w-[18rem] py-10 px-6'>
                                <p className='font-mes text-[#e39a9b] text-[2rem]'>Pearl</p>
                                <p className='text-[#33517f] text-[1rem] font-light font-urban'>
                                    Pearls, both natural and artificial, come in a wide range of colours and are
                                     arguably the most popular gems of all time. White and Cream are the most popular colours.</p>
                            </div>
                    
                            
                            <div>
                                <img src={jade} alt='img' className='  shadow-lg '/>
                            </div>

                            <div className='bg-[white] shadow-lg w-[18rem] py-10 px-6'>
                                <p className='font-mes text-[#e39a9b] text-[2rem]'>Jade</p>
                                <p className='text-[#33517f] text-[1rem] font-light font-urban'>
                                    The smoke-lit caves and huts where ancient people lived are where Jade's cultural 
                                    origins  can be found. This hardest of  stones was moulded into  weapons, tools, ornaments.</p>
                            </div>
                
                            
                        </div>
                        
 
            </div>
        </div>
        <div>
            <Link to='/gemknowledge'><p className='text-[#e39a9b] text-[1.3rem] max-2xl:text-[1.1rem] text-center font-light pt-10 underline'>MORE ABOUT GEMS</p></Link>
          </div>
        
    </div>
  )
}
 
export default GemHomelg