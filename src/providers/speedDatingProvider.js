import React, { createContext, useState, useContext } from "react";

// Create the context
export const SpeedDatingContext = createContext();

export const useSpeedDating = () => useContext(SpeedDatingContext);

// Create the provider component
export const SpeedDatingProvider = ({ children }) => {
  // State for speed dating data
  const [speedDatingData, setSpeedDatingData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Value object for the context
  const value = {
    speedDatingData,
    setSpeedDatingData,
    showModal,
    setShowModal,
  };

  // Return the provider with the value object
  return (
    <SpeedDatingContext.Provider value={value}>
      {children}
    </SpeedDatingContext.Provider>
  );
};
