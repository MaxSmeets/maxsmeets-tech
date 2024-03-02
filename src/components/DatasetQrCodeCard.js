import QRCode from "react-qr-code";
import React, { useEffect, useRef } from "react";
import { useSpeedDating } from "../providers/speedDatingProvider";

function DatasetQrCodeCard({ datasetUrl }) {
  const { showModal, setShowModal } = useSpeedDating();
  const cardRef = useRef();

  const handleClose = () => {
    setShowModal(false);
  };

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
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if it's a left click
      if (event.button !== 0) {
        return;
      }

      if (cardRef.current && !cardRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
