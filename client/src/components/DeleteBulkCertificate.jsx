import React from "react";
import axios from "axios";
import deleteicon from "../assets/images/delete.svg";
import Swal from "sweetalert2";

const DeleteBulkCertificateModal = ({ id, onDeleteSuccess }) => {

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This certificate will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b90b0b",
      cancelButtonColor: "#33517f",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(
        `https://iidglabs.com/api/auth/bulk-cert/bulk-certificates/${id}`
      );

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Certificate deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      // 🔑 Update list without reload
      if (typeof onDeleteSuccess === "function") {
        onDeleteSuccess(id);
      }

    } catch (error) {
      console.error("Delete error:", error);

      Swal.fire({
        icon: "error",
        title: "Delete failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <button onClick={handleDelete}>
      <img src={deleteicon} alt="delete" />
    </button>
  );
};

export default DeleteBulkCertificateModal;
