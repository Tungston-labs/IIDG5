import React, { useState, useEffect } from "react";
import axios from "axios";
import add from "../assets/images/add.svg";
import arrow from "../assets/images/bluearrow.svg";
import trash from "../assets/images/trash.svg";
import EditCustomCertificate from "./EditCustomCertificate";
import ViewCustomCertificate from "./ViewCustomCertificate";
import DeleteCustomCertificate from "./DeleteCustomCertificate";
import "../assets/styles/styles.css";

const CustomCertificateList = ({
  setCreateCustomCertificate,
  setImageCertificate,
}) => {
  const [customCertificates, setCustomCertificates] = useState([]);
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState("Descending");
  const [bulkDeleteModal, setBulkDeleteModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [goToInput, setGoToInput] = useState("");
  const [loading,setLoading]=useState(false);
  const [totalPages, setTotalPages] = useState(1);

 useEffect(() => {
  setLoading(true);
  axios
    .get(`https://iidglabs.com/api/auth/certificate/get-customcertificates`, {
      params: {
        page,
        limit,
        search: searchQuery, // this is the input value
      },
    })
    .then((res) => {
      setCustomCertificates(res.data.certificates);
      setTotalPages(res.data.totalPages);
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, [page, limit, searchQuery]);


 

  // Bulk selection handler
  const handleSelectCertificate = (id) => {
    setSelectedCertificates((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((certId) => certId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Toggle bulk delete modal
  const toggleBulkDeleteModal = () => {
    setBulkDeleteModal((prev) => !prev);
  };

  // Bulk delete function: delete each  certificate
  const handleBulkDelete = () => {
    toggleBulkDeleteModal();
    Promise.all(
      selectedCertificates.map((id) =>
        axios
          .delete(
            `https://iidglabs.com/api/auth/certificate/delete-customcertificate/${id}`
          )
          .then((response) => {
            console.log(`Certificate with ID ${id} deleted successfully.`);
            return id;
          })
          .catch((err) => {
            console.error(
              `Failed to delete certificate with ID ${id}. Error:`,
              err
            );
            return null;
          })
      )
    ).then((deletedIds) => {
      const successfulDeletions = deletedIds.filter((id) => id !== null);
      setCustomCertificates((prevCerts) =>
        prevCerts.filter((cert) => !successfulDeletions.includes(cert._id))
      );
      setSelectedCertificates([]);
    });
  };

  const handleSortClick = () => {
    setShowSortDropdown((prev) => !prev);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    setShowSortDropdown(false);
  };

  const sortedCertificates = customCertificates
    .sort((a, b) => {
      if (sortOrder === "Ascending") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  const handleSingleDelete = (deletedId) => {
    setCustomCertificates((prevCerts) =>
      prevCerts.filter((cert) => cert._id !== deletedId)
    );
  };

  return (
    <>
      <div className="px-16 max-xl:px-8">
        <div className="flex justify-between">
          <input
            placeholder="Search Custom Certificates"
            className="bg-[#F2F4F7] py-3 w-[30%] pl-5 placeholder:font-urban text-[1rem] rounded-[4px] outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="border-[#99A8BF] border-b-[1px] my-5"></div>
        <div>
          <div className="flex justify-between items-center">
            <div className="font-urban text-[#33517F] font-bold text-[1.3rem]">
              Custom Certificates
            </div>
            <div className="flex gap-x-2">
              <button
                onClick={() => setImageCertificate(true)}
                className="flex items-center bg-[#33517F] py-2 px-3 rounded-[4px]"
              >
                <img src={add} alt="add" />
                <div className="text-[#ffffff] font-urban font-bold pl-2 text-[0.9rem]">
                  Upload certificate image
                </div>
              </button>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="font-urban flex text-[#33517F] text-[15px]">
              <div>Sort by:</div>
              <button
                onClick={handleSortClick}
                className="flex items-center font-bold ml-3 px-2 py-1 -mt-1"
              >
                Date
                <img src={arrow} alt="arrow" width={10} className="ml-2" />
              </button>
            </div>
            <button
              onClick={toggleBulkDeleteModal}
              disabled={selectedCertificates.length === 0}
              className="bg-[#d1171a] flex items-center py-[5px] px-3 rounded-[4px] disabled:bg-gray-400"
            >
              <img src={trash} alt="trash" />
              <div className="text-[#ffffff] font-urban font-bold pl-2 text-[1rem]">
                Delete
              </div>
            </button>
          </div>
          {showSortDropdown && (
            <div className="relative mt-0 ml-20">
              <div className="absolute left-0 bg-white border-[1px] border-[#7e78789a] font-urban text-[0.9rem] text-[#33517F] rounded shadow-md">
                <button
                  onClick={() => handleSortOrderChange("Ascending")}
                  className={`block px-4 py-2 text-left w-full rounded-t-[4px] ${
                    sortOrder === "Ascending" ? "bg-[#F2F4F7]" : ""
                  }`}
                >
                  Ascending
                </button>
                <button
                  onClick={() => handleSortOrderChange("Descending")}
                  className={`block px-4 py-2 text-left w-full rounded-b-[4px] ${
                    sortOrder === "Descending" ? "bg-[#F2F4F7]" : ""
                  }`}
                >
                  Descending
                </button>
              </div>
            </div>
          )}
          <div
            className="mt-8 h-[65vh] overflow-y-auto pr-6"
            style={{ direction: "ltr" }}
          > 
{loading ? (
  <div className="flex justify-center items-center h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#33517F]"></div>
  </div>
) : (
  sortedCertificates.map((item, index) => (
    <div key={index}>
      <div className="flex justify-between py-3 px-5 font-urban hover:bg-[#F2F4F7] items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={selectedCertificates.includes(item._id)}
            onChange={() => handleSelectCertificate(item._id)}
            className="w-[1rem] mr-3 checked:bg-[#E39A9B]"
          />
          <div>
            <div>{item.certificatenum}</div>
            <div className="text-sm text-gray-500">
              {new Date(item.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ViewCustomCertificate id={item._id} />
          <EditCustomCertificate id={item._id} />
          <DeleteCustomCertificate
            id={item._id}
            onDelete={handleSingleDelete}
          />
        </div>
      </div>
      <div className="border-[#99A8BF] border-b-[1px]"></div>
    </div>
  ))
)}

          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-6 gap-4 font-urban text-[#33517F] font-semibold">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>

        <div className="flex items-center gap-2">
          <span>Go to page:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={goToInput}
            onChange={(e) => setGoToInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const targetPage = parseInt(goToInput);
                if (
                  !isNaN(targetPage) &&
                  targetPage >= 1 &&
                  targetPage <= totalPages
                ) {
                  setPage(targetPage);
                  setGoToInput("");
                }
              }
            }}
            placeholder="Page"
            className="w-16 px-2 py-1 border border-gray-300 rounded outline-none text-center"
          />
        </div>
      </div>

      {bulkDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="bg-white px-14 py-6 rounded-lg z-20">
            <p className="font-bold text-[15px]">
              Are you sure you want to delete the selected certificates?
            </p>
            <div className="flex justify-center items-center gap-10">
              <button
                onClick={toggleBulkDeleteModal}
                className="bg-[#33517F] font-bold text-white w-20 rounded h-8 mt-4 hover:transition ease-in-out hover:-translate-y-1 hover:scale-90"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkDelete}
                className="bg-[#b90b0b] ml-2 font-bold text-white w-20 rounded h-8 mt-4 hover:transition ease-in-out hover:-translate-y-1 hover:scale-90"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCertificateList;
