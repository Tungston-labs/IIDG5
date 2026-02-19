// import React, { useState } from "react";

// const Test = () => {
//   const [csvData, setCsvData] = useState([]);
//   const [headers, setHeaders] = useState([]);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "text/csv") {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const csvContent = e.target.result;
//         parseCSV(csvContent);
//       };

//       reader.readAsText(file);
//     } else {
//       alert("Please upload a valid CSV file.");
//     }
//   };

//   const parseCSV = (csvContent) => {
//     const rows = csvContent.split("\n").map((row) => row.trim());
//     const headersRow = rows[0].split(",");
//     const dataRows = rows.slice(1);

//     const parsedData = dataRows.map((row) => {
//       const values = row.split(",");
//       const obj = {};
//       headersRow.forEach((header, index) => {
//         obj[header] = values[index];
//       });
//       return obj;
//     });

//     setHeaders(headersRow);
//     setCsvData(parsedData);
//   };

//   const handleButtonClick = () => {
//     document.getElementById("csvInput").click();
//   };

//   return (
//     <div className="m-20">
//       <div>
//         <button
//           onClick={handleButtonClick}
//           className="flex items-center bg-[#33517F] py-2 px-3 rounded-[4px] text-[#ffffff] font-urban font-bold"
//         >
//           Upload CSV
//         </button>
//         <input
//           id="csvInput"
//           type="file"
//           accept=".csv"
//           style={{ display: "none" }}
//           onChange={handleFileUpload}
//         />
//         {headers.length > 0 && (
//           <table className="mt-4 border-collapse border border-gray-400">
//             <thead>
//               <tr>
//                 {headers.map((header, index) => (
//                   <th key={index} className="border border-gray-400 px-2 py-1">
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {csvData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {headers.map((header, colIndex) => (
//                     <td key={colIndex} className="border border-gray-400 px-2 py-1">
//                       {row[header]}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Test;












import React, { useState } from "react";

const Test = () => {
  const [csvData, setCsvData] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();

      reader.onload = (e) => {
        setCsvData(e.target.result);
      };

      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleButtonClick = () => {
    document.getElementById("csvInput").click();
  };

  return (
    <div className="m-20">
      <div>
        <button
          onClick={handleButtonClick}
          className="flex items-center bg-[#33517F] py-2 px-3 rounded-[4px] text-[#ffffff] font-urban font-bold"
        >
          Upload CSV
        </button>
        <input
          id="csvInput"
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <p className="mt-4 whitespace-pre-wrap">{csvData}</p>
      </div>
    </div>
  );
};

export default Test;






// import React from 'react'

// const Test = () => {
//   return (
//     <div className='m-20'>
//       <div>
//         <button
//             className='flex items-center bg-[#33517F] py-2 px-3 rounded-[4px] text-[#ffffff] font-urban font-bold'
//             >Upload CSV</button>

//             <p></p>
//       </div>
//     </div>
//   )
// }

// export default Test



// import React from 'react'
// import QRCode from 'qrcode.react';

// const Test = () => {
//     const id = 'abcd1454hkh12';
//   return (
//     <div>
//     {/* id */}
//     <div>{id}</div>
//     {/* qr code */}
//     <QRCode value={id} />
//     {/* <QRCode value={'abcd14554hkh12'} /> */}
//   </div>
//   )
// }

// export default Test