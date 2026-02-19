import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgimg from '../assets/images/gemknowled.png'
import Gemsbg from '../components/Gemsbg'
import Gemslg from '../components/Gemslg'
// import gemsss from '../assets/images/gemss.svg'

const GemKnowledge = () => {
  return (
    <div>
        <Navbar/>
        {/* -------------------------------------- first section --------------------------------------- */}
        <div className="h-[75vh] bg-cover bg-center flex items-center justify-between max-md:h-[50vh] max-lg:h-[55vh] max-xl:h-[70vh] max-lg:px-10 max-xl:px-16 max-md:px-10 max-2xl:space-x-8 px-24" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='text-[#33517f] font-mes text-[5rem] max-2xl:leading-[4.4rem] max-lg:leading-[3.4rem] max-md:text-[3.4rem] max-xl:text-[4rem] max-lg:text-[3.8rem]'>Gem <br />Knowledge</div>
        </div>
        {/* -------------------------------------- second section --------------------------------------- */}
        <div className="px-24 py-20 max-xl:px-16 max-md:px-7">

            {/* --------------------------navartna text-------------------------- */}
            <div>
            <p className='text-[#33517f] font-mes text-[4.2rem] max-xl:text-[3.3rem] max-md:text-[2.4rem]'>Navratna</p>
            <div className='tracking-wide font-urban text-[1.2rem] max-2xl:text-[1rem] max-lg:text-justify max-md:text-[1rem] text-[#33517f]'>
            <p>
                Nine priceless gemstones, including Ruby, 
                Diamond, Blue Sapphire, Yellow Sapphire, 
                Emerald, Red Coral, Pearl, Cat’s Eye, and 
                Hessonite, are combined to form Navaratna, 
                which is worn as a single ornament. This 
                sacred combination, which represents the 
                energies of nine astrological planets, 
                is strongly advised in vedic astrology 
                to foster monetary prosperity, professional 
                advancement, and good health.
            </p>
            <br />
            <p>
                Finding the best-quality Navratna in a 
                desirable size at a reasonable price is 
                essential yet challenging. Since each 
                stone in the Navratna collection comes 
                from a separate area, unlike other jewels,
                 origin is not thought to be a crucial 
                 consideration. However, while purchasing
                  natural, top-quality Navaratna gemstones 
                  for astrological purposes, other crucial 
                  criteria like colour and clarity of the 
                  stones should be taken into consideration.
            </p>
            <br />
            <p>
                The richness, depth, and overall dispersion 
                of colour are used to evaluate the quality 
                of nine jewels. The more vibrant a gemstone’s 
                hue, the more expensive and astrologically 
                potent it will be. All nine of the Navratan
                 jewels must be rich, deep in colour, and 
                 completely devoid of any tint, for the best 
                 astrological results.
            </p>
            <br />
            <p>
                The quantity and quality of inclusions, 
                black spots, or other imperfections that 
                are apparent to the naked eye determine 
                how clear a Navratna is. According to 
                astrology, each of the nine stones should 
                appear faultless to the unaided eye. Minor 
                exclusions are occasionally permissible, 
                though. Stones with poor transparency and 
                numerous eye-visible inclusions are to be 
                avoided at all costs.
            </p>
            </div>
            </div>
            <hr className='border border-[#33517f] my-12 border-b-0'/>
            {/* --------------------------navartna images--------------------------  */}
            <div className='py-16 flex justify-center max-xl:px-1 max-lg:py-3 '>
                <div className='max-lg:hidden max-md:hidden max-sm:hidden '>
                    <Gemsbg/>
                </div>
                <div className='max-lg:block max-2xl:hidden max-xl:hidden max-[2560px]:hidden '>
                    <Gemslg/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default GemKnowledge