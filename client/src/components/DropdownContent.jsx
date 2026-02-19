// import React from 'react'
// import gem1 from '../assets/images/gemjade.png'
// import gem2 from '../assets/images/gemhessonite.png'
// import gem3 from '../assets/images/gemcat.png'
// import gem4 from '../assets/images/gemcoral.png'
// import gem5 from '../assets/images/gempearl.png'
// import gem6 from '../assets/images/gememerald.png'
// import gem7 from '../assets/images/gemruby.png'
// import gem8 from '../assets/images/gemsapphire.png'
// import gem9 from '../assets/images/gemdiamond.png'

// const DropdownContent = ({ gem }) => {

//     const content = {

//         jade: {
//           title: "Jade",
//           image: gem1,
//           description: "The smoke-lit caves and huts where ancient people lived are where Jade’s cultural origins can be found. This hardest of stones was moulded into weapons, tools, ornaments, and ritual artefacts by Stone Age craftspeople all around the planet. Their engravings summoned the mystical forces of life and death as well as the powers of heaven and earth.",
//           facts: "Facts about Jade"
//         },

//         hessonite: {
//           title: "Hessonite",
//           image: gem2,
//           description: "A skilled expert can recognise natural hessonite, an easily recognisable stone, from a distance. The gem stands out from most other garnet or gemstone variants due to its recognisable colour, clarity, and general appearance. The gemstone’s certification provides insight into whether it is natural or maybe a marketable stimulant.",
//           facts: "The gem's brownish, cinnamon tones are due to the presence of iron and manganese. The 'scotch in water effect' is an intrinsic property of hessonite."
//         },

//         lehsunia: {
//           title: "Cat's Eye (Lehsunia)",
//           image: gem3,
//           description: "These gems are a prime example of a gemstone created entirely by nature and receive their desirable aesthetic look from minute, naturally occurring needles that reflect light in a manner like to satin. It’s crucial to exercise caution while purchasing stimulants like cat’s eye quartz and others that are marketed as alternatives to cat’s eye chrysoberyl.",
//           facts: "Facts about Cat's Eye (Lehsunia)"
//         },

//         coral: {
//           title: "Coral",
//           image: gem4,
//           description: "In contrast to most gemstones of mineral origin, coral is an organic gem that is created by living organisms. It has been in use for many years because it is an old gemstone. CaCO3 is the chemical formula of coral. Its Mohs hardness ranges from 3 to 4, and its transparency is both opaque and translucent.",
//           facts: "Facts about Coral"
//         },

//         pearl: {
//           title: "Pearl",
//           image: gem5,
//           description: "Pearls, both natural and artificial, come in a wide range of colours and are arguably the most popular gems of all time. White and cream are the most popular colours, but any shade is available. In the bodies of some mollusks, natural pearls develop in the vicinity of a minute irritant. The intentional implantation of a bead or fragment of tissue that the mollusk coats with nacre results in cultured pearls.",
//           facts: "Facts about Pearl"
//         },

//         emerald: {
//           title: "Emerald",
//           image: gem6,
//           description: "Different gemologists have different opinions on the level of green that distinguishes between an emerald and a less expensive green beryl. When a stone’s colour is “too light” to be categorised as an emerald, most gemologists, gemological laboratories, and coloured stone sellers refer to it as a green beryl. However, there are divergent viewpoints about what constitutes “too light” even among that group.",
//           facts: "Facts about Emerald"
//         },

//         ruby: {
//           title: "Ruby",
//           image: gem7,
//           description: "The price per carat for rubies is the highest of any coloured stone. As a result, ruby is among the most significant gems in the market for coloured stones. The mineral corundum is colourless in its finest state. Color changes are brought on by trace elements that integrate into the crystal structure of the mineral. The trace element responsible for the red colour of rubies is chromium.",
//           facts: "Facts about Ruby"
//         },

//         sapphire: {
//           title: "Sapphire",
//           image: gem8,
//           description: "The corundum family also includes so-called “fancy sapphires,” in addition to blue sapphire and ruby. They are available in violet, green, yellow, orange, pink, purple, and more gradations of these colours. Color change is a characteristic that some stones display, most frequently changing from blue in daylight or fluorescent illumination to purple in incandescent light. even come in shades of grey, black, or brown.",
//           facts: "Facts about Sapphire"
//         },

//         diamond: {
//           title: "Diamond",
//           image: gem9,
//           description: "Only around 100 miles below the earth’s surface, high temperature and pressure conditions are necessary for diamond formation. The bonds between the carbon atoms in a diamond are virtually the same in all directions. Graphite is a distinct mineral that also just includes carbon, but it has a significantly different crystal structure and creation method. Diamond is so hard that you can only scratch it with another diamond, yet graphite is so soft that you can write with it",
//           facts: "Facts about Diamond"
//         }}

        
//   return (
//     <div>

//         <div className="grid grid-cols-3 py-6 px-4 border-t  bg-[#f3f4f7]">

//             {/* ---- description ---- */}
//             <div className='py-4 px-4'>
//                 <p className='text-[1.2rem] font-urban text-[#33517f]'>{content[gem].description}</p>
//             </div>

//             {/* ---- image ---- */}
//             <div className='py-4 px-4'>
//                 <p className='text-[#33517f] font-mes font-bold text-[4rem]'>{content[gem].title}</p>
//                 <img src={content[gem].image} alt='img'/>
//             </div>

//             {/* ---- facts ---- */}
//             <div className='py-4 px-4'>
//                 <p className='text-[1.5rem] font-bold text-center font-urban text-[#33517f]'>Facts</p>
//                 <p className='text-[1.2rem] font-urban text-[#33517f] font-light'>{content[gem].facts}</p>
//             </div>

//         </div> 

//     </div>
//   )
// }

// export default DropdownContent