import React from 'react'
import bgimg from '../assets/images/BGpattern.svg'
import pearl from '../assets/images/pearl.svg'
import jade from '../assets/images/jade.svg'
import { Link } from 'react-router-dom'
 
const GemHome = () => {
  return (
    <div className=''>
        <p className='text-[#33517f] font-mes text-[4.2rem] pb-12 leading-[4.2rem] max-2xl:leading-[3.9rem] max-2xl:text-[3.6rem] max-xl:text-[3.4rem]  tracking-wide'>Gem Knowledge</p>
        <div className='flex justify-center'>
            <div  className="w-[80%] max-xl:w-[90%] bg-cover bg-center pt-[8rem] pb-[5rem]"
                    style={{ backgroundImage: `url(${bgimg})` }}>
                        <div className='flex justify-between w-[120%] max-xl:w-[115%] -mx-28 max-xl:-mx-16'>
                            <div className='bg-[white] w-[22%] max-xl:w-[26%]  px-7  py-5 max-2xl:px-5 shadow-lg transform -translate-y-[4rem] '>
                                <p className='font-mes text-[#e39a9b] text-[2rem]'>Pearl</p>
                                <p className='text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] font-light font-urban'>Pearls, both natural and artificial, come in a wide range of colours and are arguably the most popular gems of all time. White and Cream are the most popular colours.</p>
                            </div>
                    
                            <div><img src={pearl} alt='img' className='max-xl:w-[13rem] shadow-lg max-2xl:shadow-none max-2xl:w-[15rem] max-2xl:h-[15rem]'/></div>
 
                            <div className='bg-[white] w-[22%] max-xl:w-[26%] px-7  py-5 max-2xl:px-5 shadow-lg transform -translate-y-[4rem] '>
                                <p className='font-mes text-[#e39a9b] text-[2rem]'>Jade</p>
                                <p className='text-[#33517f] text-[1.2rem] max-2xl:text-[1rem] font-light font-urban'>The smoke-lit caves and huts where ancient people lived are where Jade's cultural origins  can be found. This hardest of  stones was moulded into  weapons, tools, ornaments.</p>
                            </div>
                
                            <div><img src={jade} alt='img' className=' max-xl:w-[13rem] shadow-lg max-2xl:shadow-none max-2xl:w-[15rem] max-2xl:h-[15rem]'/></div>
                        </div>
                        
 
            </div>
        </div>
        <div>
            <Link to='/gemknowledge'><p className='text-[#e39a9b] text-[1.3rem] max-2xl:text-[1.1rem] text-center font-light pt-10 underline'>MORE ABOUT GEMS</p></Link>
          </div>
        
    </div>
  )
}
 
export default GemHome

