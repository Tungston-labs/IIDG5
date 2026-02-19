import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import logo from '../assets/images/footlogo.svg'
import stone from '../assets/images/stoneimage.svg'
import jsPDF from 'jspdf';
import QRCode from 'qrcode.react';

const CertificatePdf = () => {
  // Create a reference to the div you want to download
  const divRef = useRef();
  const buttonRef = useRef();

  const handleDownload = () => {
    const input = divRef.current;
    const button = buttonRef.current;

    // Hide the download button
    button.style.display = 'none';

    // Use html2canvas to capture the div
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Add the image to the PDF and save it
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      })
      .catch((err) => {
        console.error('Error generating PDF', err);
      })
      .finally(() => {
        // Show the download button again after the PDF is generated
        button.style.display = 'block';
      });
  };

  return (
    <div
      ref={divRef}
      className='border-black border-[1px] w-[40%] font-urban bg-[#ffffff] max-xl:w-[60%] max-lg:w-[80%] max-md:w-[98%]'
      style={{ padding: '20px' }}
    >
      <div className='flex justify-between items-center '>
        <img src={logo} width={180} alt='logo' className=' max-md:w-[9rem]'/>
        <button
          ref={buttonRef}
          className='flex items-center bg-green-100 text-[#ffffff] bg-[#33517F] text-[0.9rem] py-1 px-3 rounded-[5px]'
          onClick={handleDownload}
        >
          {/* <img src={download} width={25} className='pr-1' alt='download'/> */}
          <div className='pl-1'>Download</div>
        </button>
      </div>

      <div className='mt-2 '>
          <div className=' border-b-[2px] border-[#33517F] w-[50%] max-md:w-[80%] mb-[2px]'></div>
          <div className='text-[0.9rem] pl-3 font-bold bg-[#33517F] text-[#ffffff] w-[50%] pb-2 max-md:w-[80%] max-md:text-[0.7rem]'>SPECIES ANALYSIS REPORT</div>
          <div className=' border-b-[2px] border-[#33517F] w-[50%] mt-[2px] max-md:w-[80%]'></div>
      </div>

    <div className='flex'>
      <div className=' font-bold text-[0.9rem] mt-2 w-[85%] max-md:text-[0.6rem] '>
          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>CERTIFICATE NO</div>
            <div className='w-[5%]'>:</div> 
            IDGTCR25NOV22566
          </div>

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>COLOUR</div>
            <div className='w-[5%]'>:</div> 
            YELLOW
          </div>

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>WEIGHT</div>
            <div className='w-[5%]'>:</div> 
            1.68 cts
          </div>

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>SHAPE/CUT</div>
            <div className='w-[5%]'>:</div> 
            OVAL MIXED
          </div>

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>S.G</div>
            <div className='w-[5%]'>:</div> 
            4.00
          </div> 

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>R.I</div>
            <div className='w-[5%]'>:</div> 
            1.76 - 1.77
          </div>

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>HARDNESS</div>
            <div className='w-[5%]'>:</div> 
            9
          </div> 

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>MICROSCOPE OB</div>
            <div className='w-[5%]'>:</div> 
            Healed feathers
          </div>  

          <div className='flex'>
            <div className='w-[30%] max-md:w-[40%]'>CONCLUSION</div>
            <div className='w-[5%]'>:</div> 
            NATURAL YELLOW SAPPHIRE
          </div>            

      </div>
      <div>
        {/* stone image */}
        <img src={stone} width={70} className='my-3 max-md:w-[3rem]' alt='stone'/>
        <QRCode 
          value={'IDGTCR25NOV22566'} 
          size={70}
          level="H"
        />
      </div>
    </div>
      

      <div>
      <div className=' border-b-[1px] border-[#000000] mt-2'></div>
      <div className='flex justify-between mt-1 max-md:flex-col'>
        <div className='text-[0.8rem] max-md:text-[0.6rem]'>IDG GLOBAL : INDIA ■ ISRAEL ■ UK ■ ABU DHABI </div>
        <i className='text-[0.7rem] max-md:text-[0.5rem]'> for terms and conditions visit www.iidglabs.com</i>
      </div>
      
      </div>
      
    </div>
  );
};

export default CertificatePdf;


