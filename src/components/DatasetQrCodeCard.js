import QRCode from "react-qr-code";
import React, { useEffect, useRef, useCallback } from "react";
import { useSpeedDating } from "../providers/speedDatingProvider";

function DatasetQrCodeCard({ datasetUrl }) {
  const { showModal, setShowModal } = useSpeedDating();
  const cardRef = useRef();
  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]); // Add handleClose to the dependencies array

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClose]); // handleClose is now memoized

  return showModal ? (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 z-0 bg-gray-900 opacity-75'></div>
      <div ref={cardRef} className='z-50 p-4 bg-white rounded-lg'>
        <button
          className='absolute top-0 right-0 m-4 text-3xl font-bold text-gray-500 cursor-pointer'
          onClick={handleClose}
        >
          &times;
        </button>
        <QRCode value={datasetUrl} />
      </div>
    </div>
  ) : null;
}

export default DatasetQrCodeCard;
