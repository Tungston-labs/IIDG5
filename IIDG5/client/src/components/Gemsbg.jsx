
import React, { useState } from 'react';
import gem1 from '../assets/images/gemcoral.png';
import gem2 from '../assets/images/hessonitegarnet.png';
import gem3 from '../assets/images/gemcat.png';
import gem4 from '../assets/images/gempearl.png';
import gem5 from '../assets/images/gememerald.png';
import gem6 from '../assets/images/gemruby.png';
import gem7 from '../assets/images/gemsapphire.png';
import gem8 from '../assets/images/yellowsapphire.png';
import gem9 from '../assets/images/gemdiamond.png';

// Dropdown content component
const DropdownContent = ({ gem }) => {
 
    
    const content = {

      coral: {
          title: "Coral",
          image: gem1,
          description: "The smoke-lit caves and huts where ancient people lived are where Jade’s cultural origins can be found. This hardest of stones was moulded into weapons, tools, ornaments, and ritual artefacts by Stone Age craftspeople all around the planet. Their engravings summoned the mystical forces of life and death as well as the powers of heaven and earth.",
          facts: "Facts about coral"
        },

        hessonite: {
          title: "Hessonite Garnet",
          image: gem2,
          description: "A skilled expert can recognise natural hessonite, an easily recognisable stone, from a distance. The gem stands out from most other garnet or gemstone variants due to its recognisable colour, clarity, and general appearance. The gemstone’s certification provides insight into whether it is natural or maybe a marketable stimulant.",
          facts: "The gem's brownish, cinnamon tones are due to the presence of iron and manganese. The 'scotch in water effect' is an intrinsic property of hessonite."
        },

        lehsunia: {
          title: "Chrysoberyl Cat's Eye ",
          image: gem3,
          description: "These gems are a prime example of a gemstone created entirely by nature and receive their desirable aesthetic look from minute, naturally occurring needles that reflect light in a manner like to satin. It’s crucial to exercise caution while purchasing stimulants like cat’s eye quartz and others that are marketed as alternatives to cat’s eye chrysoberyl.",
          facts: "Facts about Cat's Eye (Lehsunia)"
        },

        pearl: {
          title: "Pearl",
          image: gem4,
          description: "In contrast to most gemstones of mineral origin, coral is an organic gem that is created by living organisms. It has been in use for many years because it is an old gemstone. CaCO3 is the chemical formula of coral. Its Mohs hardness ranges from 3 to 4, and its transparency is both opaque and translucent.",
          facts: "Facts about Coral"
        },

        emerald: {
          title: "Emerald",
          image: gem5,
          description: "Pearls, both natural and artificial, come in a wide range of colours and are arguably the most popular gems of all time. White and cream are the most popular colours, but any shade is available. In the bodies of some mollusks, natural pearls develop in the vicinity of a minute irritant. The intentional implantation of a bead or fragment of tissue that the mollusk coats with nacre results in cultured pearls.",
          facts: "Facts about Pearl"
        },

        ruby: {
          title: "Ruby",
          image: gem6,
          description: "Different gemologists have different opinions on the level of green that distinguishes between an emerald and a less expensive green beryl. When a stone’s colour is “too light” to be categorised as an emerald, most gemologists, gemological laboratories, and coloured stone sellers refer to it as a green beryl. However, there are divergent viewpoints about what constitutes “too light” even among that group.",
          facts: "Facts about Emerald"
        },

        bluesapphire: {
          title: "Blue Sapphire",
          image: gem7,
          description: "The price per carat for rubies is the highest of any coloured stone. As a result, ruby is among the most significant gems in the market for coloured stones. The mineral corundum is colourless in its finest state. Color changes are brought on by trace elements that integrate into the crystal structure of the mineral. The trace element responsible for the red colour of rubies is chromium.",
          facts: "Facts about Ruby"
        },

        yellowsapphire: {
          title: "Yellow sapphire",
          image: gem8,
          description: "The corundum family also includes so-called “fancy sapphires,” in addition to blue sapphire and ruby. They are available in violet, green, yellow, orange, pink, purple, and more gradations of these colours. Color change is a characteristic that some stones display, most frequently changing from blue in daylight or fluorescent illumination to purple in incandescent light. even come in shades of grey, black, or brown.",
          facts: "Facts about Sapphire"
        },

        diamond: {
          title: "Diamond",
          image: gem9,
          description: "Only around 100 miles below the earth’s surface, high temperature and pressure conditions are necessary for diamond formation. The bonds between the carbon atoms in a diamond are virtually the same in all directions. Graphite is a distinct mineral that also just includes carbon, but it has a significantly different crystal structure and creation method. Diamond is so hard that you can only scratch it with another diamond, yet graphite is so soft that you can write with it",
          facts: "Facts about Diamond"
        }}

  return (

        <div className="col-span-3 max-xl:px-2 py-2 px-8 border-dashed border-t border-b  flex justify-between border-[#99a8bf] bg-[#f3f4f7]">
            {/* ---- description ---- */}
            <div className='py-10 max-xl:py-5 max-xl:px-10 text-center px-4 w-1/4 max-xl:w-full'>
                <p className='text-[1.2rem] font-urban text-[#33517f] max-xl:text-[0.9rem] mt-8 '>{content[gem].description}</p>
            </div>

            {/* ---- image ---- */}
            <div className='py-4 px-4 max-xl:w-full'>
                <p className='text-[#33517f] font-mes text-center font-bold text-[2.7rem] max-xl:text-[2rem] '>{content[gem].title}</p>
                <img src={content[gem].image} alt='img' className='w-[16rem] mt-4 mx-auto max-xl:w-[10rem] '/>
            </div>

             {/* ---- facts ---- */}
            <div className='py-10 max-xl:py-5 max-xl:px-10 px-4 w-1/4 max-xl:w-full'>
                <p className='text-[1.5rem] font-bold text-center font-urban text-[#33517f] max-xl:text-[1.2rem] mt-8'>Facts</p>
                <p className='text-[1.2rem] font-urban text-center text-[#33517f] font-light max-xl:text-[0.9rem]'>{content[gem].facts}</p>
            </div>
        </div>
  )
};


const Gemsbg = () => {

    const [ active, setActive ] = useState('');
    const handleActive = (gem) => { setActive( active === gem ? '' : gem)};


  return (
    <div className=' grid grid-cols-3 '>


        {/* ------------------------------------------------- BOX-1 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-l-0 border-r-0 ${active === 'coral' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('coral')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Coral</div>
            <div><img src={gem1} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'coral' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-2 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 ${active === 'hessonite' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('hessonite')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Hessonite Garnet</div>
            <div><img src={gem2} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'hessonite' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-3 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-r-0 border-l-0 ${active === 'lehsunia' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('lehsunia')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Chrysoberyl Cat's Eye</div>
            <div><img src={gem3} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'lehsunia' ? 'scale-90' : ''}`}/></div>
        </div>

        {/*-------------------- BOX 1 2 3 DROPDOWN HERE ---------------- */}
        {active === 'coral' && <DropdownContent gem='coral'/>}
        {active === 'hessonite' && <DropdownContent gem='hessonite'/>}
        {active === 'lehsunia' && <DropdownContent gem='lehsunia'/>}

        {/* ------------------------------------------------- BOX-4 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-l-0 border-r-0 ${active === 'pearl' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('pearl')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Pearl</div>
            <div><img src={gem4} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'pearl' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-5 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 ${active === 'emerald' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('emerald')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Emerald</div>
            <div><img src={gem5} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'emerald' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-6 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-r-0 border-l-0 ${active === 'ruby' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('ruby')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Ruby</div>
            <div><img src={gem6} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto ${active === 'ruby' ? 'scale-90' : ''}`}/></div>
        </div>

        {/*-------------------- BOX 4 5 6 DROPDOWN HERE ---------------- */}
        {active === 'pearl' && <DropdownContent gem='pearl'/>}
        {active === 'emerald' && <DropdownContent gem='emerald'/>}
        {active === 'ruby' && <DropdownContent gem='ruby'/>}

        {/* ------------------------------------------------- BOX-7 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-l-0 border-b-0 border-r-0 ${active === 'bluesapphire' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('bluesapphire')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Blue Sapphire</div>
            <div><img src={gem7} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'bluesapphire' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-8  ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-b-0 ${active === 'yellowsapphire' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('yellowsapphire')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Yellow Sapphire</div>
            <div><img src={gem8} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'yellowsapphire' ? 'scale-90' : ''}`}/></div>
        </div>


        {/* ------------------------------------------------- BOX-9 ----------------------------------------------------------- */}
        <div className={`py-10 max-xl:py-5 max-xl:px-10 px-14 border-dashed border border-[#99a8bf] border-t-0 border-r-0 border-b-0 border-l-0 ${active === 'diamond' ? 'bg-[#f3f4f7]' : 'bg-white'}`} onClick={()=> handleActive('diamond')}>
            <div className='text-[#33517f] font-mes text-[2.5rem] max-xl:text-[1.7rem] text-center py-6 tracking-wide max-2xl:text-[2rem]'>Diamond</div>
            <div><img src={gem9} alt='gem' className={`w-[10rem] py-5 max max-2xl:w-[8rem] drop-shadow-lg  mx-auto  ${active === 'diamond' ? 'scale-90' : ''}`}/></div>
        </div>

        {/*-------------------- BOX 7 8 9 DROPDOWN HERE ---------------- */}
        {active === 'bluesapphire' && <DropdownContent gem='bluesapphire'/>}
        {active === 'yellowsapphire' && <DropdownContent gem='yellowsapphire'/>}
        {active === 'diamond' && <DropdownContent gem='diamond'/>}
    </div>
  )
}

export default Gemsbg

