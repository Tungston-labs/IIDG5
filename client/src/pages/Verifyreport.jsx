import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import verifybg from "../assets/images/verifybg.svg";
import verifygrey from "../assets/images/verifygreybg.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import html2canvas from "html2canvas";
import logo from "../assets/images/footlogo.svg";
// import stone from '../assets/images/stoneimage.svg';
import jsPDF from "jspdf";
import QRCode from "qrcode.react";
import axios from "axios";

const Verifyreport = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const divRef = useRef();
  const buttonRef = useRef();
  const [certNumber, setCertNumber] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [search, setSearch] = useState(false);
  const [existingImage, setExistingImage] = useState(null);
  const [certificateType, setCertificateType] = useState(""); // 'custom', 'bulk', or 'standard'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setCertNumber(id); // Set the certificate number to the ID from the URL
      handleSearch(id); // Trigger the search
      console.log(id);
    }
  }, [id]);

  const handleDownload = async () => {
    if (certificateType === "custom") {
      // Custom certificate — download the image directly
      const image = new Image();
      image.crossOrigin = "anonymous"; // Allow cross-origin download
      image.src = existingImage;

      image.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "pt", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Certificate_${certificateDetails.certificatenum}.pdf`);
      };
    } else {
      // Non-custom certificate — use html2canvas on the div
      if (!divRef.current) return;
      const canvas = await html2canvas(divRef.current, {
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificate_${certificateDetails.certificatenum}.pdf`);
    }
  };
  const handleSearch = async (searchTerm) => {
    setSearch(true);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://iidglabs.com/api/auth/certificate/search-certificate/${searchTerm}`
      );

      const { source, certificate } = response.data;
      setCertificateType(source);
      setCertificateDetails(certificate);

      // Fetch image
      let imageUrl = "";
      const id = certificate._id;

      if (source === "custom") {
        const res = await axios.get(
          `https://iidglabs.com/api/auth/certificate/custom-certificate-photo/${id}`,
          { responseType: "blob" }
        );
        imageUrl = URL.createObjectURL(res.data);
      } else if (source === "bulk") {
        const res = await axios.get(
          `https://iidglabs.com/api/auth/certificate/bulk-certificate-photo/${id}`,
          { responseType: "blob" }
        );
        imageUrl = URL.createObjectURL(res.data);
      } else {
        const res = await axios.get(
          `https://iidglabs.com/api/auth/certificate/product-photo/${id}`,
          { responseType: "blob" }
        );
        imageUrl = URL.createObjectURL(res.data);
      }

      setExistingImage(imageUrl);
    } catch (error) {
      console.error("Error searching certificate:", error);
      setCertificateDetails(null);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="h-[70vh] max-md:h-[50vh] max-lg:h-[55vh] max-xl:h-[70vh] bg-cover bg-center max-xl:bg-left flex items-center"
        style={{ backgroundImage: `url(${verifybg})` }}
      >
        <div className=" text-[white] font-mes text-[4.5rem] leading-[4.6rem] pl-[7rem] max-md:pl-[3rem] max-md:text-[3rem] max-md:leading-[3.8rem] max-xl:text-[4rem] max-lg:text-[3.8rem]">
          Verify Report
        </div>
      </div>

      <div className="px-24 max-xl:px-14 max-lg:px-10 max-md:px-8 pt-28 max-md:pt-16 pb-24 max-md:pb-12 font-urban text-[#33517F] text-[1.2rem] max-xl:text-[1rem] max-md:text-[0.9rem]">
        IDG reports represent the highest standard of reliability, consistency
        and integrity. And now, IDG Report Verification is available for all IDG
        reports, providing you with an additional level of assurance. With
        report verification, you can quickly and conveniently confirm that the
        information on your report matches what is archived in the IDG report
        database.
      </div>

      <div
        className="bg-cover bg-center mb-28 pb-24 pt-10"
        style={{ backgroundImage: `url(${verifygrey})` }}
      >
        <div className="w-full flex justify-center items-center max-md:flex-col max-md:px-8">
          <div className="font-urban text-[#33517F] text-[1.2rem] pr-3 max-xl:text-[1rem] max-md:text-[0.9rem] max-md:mb-4">
            Look up a report
          </div>
          <input
            placeholder="Enter certificate number"
            className=" bg-[white] py-5 w-[25%] outline-none max-lg:w-[37%] max-md:w-full pl-5 max-xl:py-3 mr-4 max-md:mr-0 placeholder:font-urban text-[1.1rem] rounded-[4px] max-xl:text-[1rem] max-md:text-[0.9rem] max-md:mb-5"
            value={certNumber}
            onChange={(e) => {
              setCertNumber(e.target.value);
              setSearch(false);
            }}
          />
          <button
            className="bg-[#33517F] text-[white] font-urban px-6 py-3 max-xl:py-2 rounded-[4px] max-xl:text-[0.8rem] max-md:w-full"
            // onClick={handleSearch}
            onClick={() => handleSearch(certNumber)}
          >
            SEARCH
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center pt-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#33517F]"></div>
            <span className="ml-4 text-[#33517F] font-urban text-lg">
              Loading certificate...
            </span>
          </div>
        ) : certificateDetails ? (
          <div className="flex-col items-center justify-center pt-12">
            <div className="flex justify-center mb-8">
              {certificateType === "custom" ? (
                existingImage ? (
                  <img
                    src={existingImage}
                    alt="Custom Certificate"
                    className="w-full max-w-3xl shadow-xl border rounded-md"
                  />
                ) : (
                  <p>Loading certificate image...</p>
                )
              ) : (
                <div
                  ref={divRef}
                  className="border-black border-[1px] w-[40%] font-urban bg-[#ffffff] max-xl:w-[60%] max-lg:w-[80%] max-md:w-[98%]"
                  style={{ padding: "20px" }}
                >
                  <div className="flex justify-between items-center">
                    <img
                      src={logo}
                      width={180}
                      alt="logo"
                      className=" max-md:w-[9rem]"
                    />
                  </div>

                  <div className="mt-2">
                    <div className="border-b-[2px] border-[#33517F] w-[50%] max-md:w-[80%] mb-[2px]"></div>
                    <div className="text-[0.9rem] pl-3 font-bold bg-[#33517F] text-[#ffffff] w-[50%] pb-2 max-md:w-[80%] max-md:text-[0.7rem]">
                      SPECIES ANALYSIS REPORT
                    </div>
                    <div className="border-b-[2px] border-[#33517F] w-[50%] mt-[2px] max-md:w-[80%]"></div>
                  </div>

                  <div className="flex">
                    <div className="font-bold text-[0.9rem] mt-2 w-[85%] max-md:text-[0.6rem]">
                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">
                          CERTIFICATE NO
                        </div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.certificatenum}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">COLOUR</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.color}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">WEIGHT</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.weight}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">SHAPE/CUT</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.shape}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">S.G</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.sg}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">R.I</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.ri}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">HARDNESS</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.hardness}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">
                          MICROSCOPE OB
                        </div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.microscopeob}
                      </div>

                      <div className="flex">
                        <div className="w-[30%] max-md:w-[40%]">CONCLUSION</div>
                        <div className="w-[5%]">:</div>
                        {certificateDetails.conclusion}
                      </div>
                    </div>

                    <div>
                      {existingImage ? (
                        <img
                          src={existingImage}
                          alt="product from backend"
                          width={70}
                          className="img img-responsive mt-3 mb-5 max-md:w-[3rem]"
                        />
                      ) : (
                        <div>No image available</div>
                      )}
                      <QRCode
                        value={`https://iidglabs.com/verify-report/${certificateDetails.certificatenum}`}
                        size={70}
                        level="H"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="border-b-[1px] border-[#000000] mt-2"></div>
                    <div className="flex justify-between mt-1 max-md:flex-col">
                      <div className="text-[0.8rem] max-md:text-[0.6rem]">
                        IDG GLOBAL : INDIA ■ ISRAEL ■ UK ■ ABU DHABI{" "}
                      </div>
                      <i className="text-[0.7rem] max-md:text-[0.5rem]">
                        for terms and conditions visit www.iidglabs.com
                      </i>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                ref={buttonRef}
                className="flex items-center bg-green-100 text-[#ffffff] bg-[#33517F] text-[0.9rem] py-1 px-3 rounded-[5px]"
                onClick={handleDownload}
              >
                <div className="pl-1">Download</div>
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`${!search && "hidden"} ${
              certNumber === "" && "hidden"
            } flex justify-center pt-20 font-urban text-[#33517F]`}
          >
            Certificate not found
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Verifyreport;
